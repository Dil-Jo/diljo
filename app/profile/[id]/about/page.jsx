"use client";
import { useEffect, useId, useState, useRef, useContext } from "react";
import Button from "../../../global-components/Button";
import PocketBase from "pocketbase";
import GlobalContext from "../../../Contexts/GlobalContext";

export default function Page() {
	const globalContext = useContext(GlobalContext)
	const { pb } = globalContext
	
	return (
		<div className='group grid place-items-center rounded-xl p-10 shadow-lg bg-white'>
			<div className='w-full'>
				<h1 className='text m-8 mb-12 inline w-72 text-start text-3xl font-black tracking-tighter text-gray-800 lg:w-auto'>
					About
				</h1>
			</div>
			<div className='h-full w-full grid gap-4'>
				<Field
					name='Name'
					detail={pb.authStore.model?.name}
					field1='New Name'
					field2={'Enter Password'}
					placeholder={'Full Name'}
				/>
				<Field
					name='Username'
					detail={pb.authStore.model?.username}
					field1={'New Username'}
					field2={'Enter Password'}
					placeholder={'username'}
				/>
				<Field
					name='Password'
					detail={'•••••••••'}
					field1={'New Password'}
					field2={'Current Password'}
					placeholder={'•••••••••'}
					type={'password'}
				/>
			</div>
		</div>
	);
}

function Field(props) {
	const dialog = useId();
	const globalContext = useContext(GlobalContext)
	const { pb } = globalContext

	function clickHandler() {
		let modal = document.getElementById(`${dialog}`);
		modal.showModal();
	}

	return (
		<div className='m-5 border-b-2'>
			<div className='m-3 flex flex-col md:flex-row md:items-center'>
				<dialog
					id={dialog}
					className={
						'bg-white border-2 dialog border-gray-300 rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl backdrop:bg-black backdrop:opacity-30'
					}
				>
					<Modal
						title={'Change ' + props.name}
						name={props.name}
						field1={props.field1}
						field2={props.field2}
						placeholder={props.placeholder}
						dialog={dialog}
						pb={pb}
						type={props.type}
					></Modal>
				</dialog>
				<div className='mb-4 md:mb-0 md:mr-4 md:flex-1'>
					<h1 className='text-xl font-black tracking-tighter text-gray-900'>
						{props.name}
					</h1>
					<h1 className='text-lg text-gray-500'>{props.detail}</h1>
				</div>
				<div className='md:w-40 md:flex-none'>
					<button
						text=''
						className='bg-eleven px-6 py-2 rounded-md text-white border-2 border-eleven font-bold text-sm transition-all duration-200 hover:bg-opacity-10 hover:text-eleven'
						onClick={() => {
							clickHandler();
						}}
					>
						Change
					</button>
				</div>
			</div>
		</div>
	);
}

function Modal(props) {
	let if1 = useId();
	let if2 = useId();
	const successRef = useRef(null);
	const errorRef = useRef(null);
	const passRef = useRef(null);
	const ifRef = useRef(null);
	const email = props.pb.authStore.model.email;

	return (
		<>
			<div className={'w-full h-full flex flex-col p-6'}>
				<div className={'w-96 flex justify-center mb-6'}>
					<h1 className={'text-xl font-black text-gray-900'}>
						{props.title}
					</h1>
				</div>
				<div className='mb-6'>
					<label className='block mb-2 text-sm font-medium text-gray-900'>
						{props.field2}
					</label>
					<input
						type='password'
						ref={passRef}
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
						placeholder={'••••••••'}
					/>
				</div>
				<div>
					<label className='block mb-2 text-sm font-medium text-gray-900'>
						{' '}
						{props.field1}
					</label>
					<input
						type={props.type ? props.type : 'text'}
						ref={ifRef}
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
						placeholder={`${props.placeholder}`}
					/>
				</div>
				<div
					className={
						'grid grid-rows-1 grid-cols-2 w-full gap-4 flex-row justify-around pt-6 pb-3'
					}
				>
					<button
						text=''
						className={' bg-red-800 px-6 py-2 rounded-md text-white border-2 border-red-800 font-bold text-sm transition-all duration-200 hover:bg-opacity-10 hover:text-red-800'}
						onClick={() => {
							ifRef.current.value = '';
							passRef.current.value = '';
							document.getElementById(props?.dialog).close();
						}}
					>Cancel</button>
					<button
						text=''
						className='bg-eleven px-6 py-2 rounded-md text-white border-2 border-eleven font-bold text-sm transition-all duration-200 hover:bg-opacity-10 hover:text-eleven'
						onClick={async () => {
							successRef.current.style.display = 'none';
							errorRef.current.style.display = 'none';

							const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

							try {
								let result = await pb
									.collection("users")
									.authWithPassword(email, passRef.current.value);

								const updateField = async (field, value, successMessage) => {
									await pb
										.collection("users")
										.update(result.record.id, { [field]: value });

									successRef.current.innerHTML = successMessage;
									let item = JSON.parse(localStorage.getItem("Login"));
									item.record[field] = value;
									localStorage.setItem("Login", JSON.stringify(item));
								};

								switch (props.name.toLowerCase()) {
									case "name":
										await updateField(
											"name",
											ifRef.current.value,
											"Name changed successfully, Reloading..."
										);
										break;

									case "password":
										await pb.collection("users").update(result.record.id, {
											oldPassword: passRef.current.value,
											password: ifRef.current.value,
											passwordConfirm: ifRef.current.value,
											auth: true,
										});

										successRef.current.innerHTML =
											"Password changed successfully, Reloading...";
										break;

									case "email":
										let emailExists = await pb
											.collection("users")
											.getList(1, 50, {
												filter: `email = '${ifRef.current.value}'`,
											});

										if (emailExists.length > 0) {
											errorRef.current.innerHTML = "Email already exists";
											errorRef.current.style.display = "block";
											return false;
										} else {
											// await updateField("email", ifRef.current.value, "Email changed successfully, Reloading...");
											await pb.collection("users").update(result.record.id, {
												email: ifRef.current.value,
												emailVisibility: true,
												auth: true,
											});
										}
										successRef.current.innerHTML =
											"Password changed successfully, Reloading...";

										break;

									case "username":
										let usernameExists = await pb
											.collection("users")
											.getList(1, 50, {
												filter: `username = '${ifRef.current.value}'`,
											});

										if (usernameExists.length > 0) {
											errorRef.current.innerHTML = "Username already exists";
											errorRef.current.style.display = "block";
											return false;
										} else {
											await updateField(
												"username",
												ifRef.current.value,
												"Username changed successfully, Reloading..."
											);
										}
										break;

									default:
										break;
								}

								successRef.current.style.display = 'block';
								setTimeout(() => {
									successRef.current.style.display = 'none';
									window.location.reload();
								}, 1200);
							} catch (e) {
								console.log(e);
								errorRef.current.innerHTML =
									'Invalid password or some other error, please try again';
								errorRef.current.style.display = 'block';
							}
						}}
					>Change</button>

				</div>
				<h1 ref={successRef} className={'text-green-800 hidden'}></h1>
				<h1 ref={errorRef} className={'text-red-800 hidden'}></h1>
			</div>
		</>
	);
}
