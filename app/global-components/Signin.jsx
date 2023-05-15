'use client';
import { useEffect, useRef, useState, useContext } from 'react';
// import PocketBase from "pocketbase";
import GlobalContext from '../Contexts/GlobalContext';
import passwordIcon from '../../assets/show-password.png';
import Image from 'next/image';

export default function Signin() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const rememberRef = useRef(null);
	const successRef = useRef(null);
	// const [result, setResult] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const globalContext = useContext(GlobalContext);
	const { pb, setGlobalLogin } = globalContext;

	async function verify() {
		if (emailRef.current.value === '' || passwordRef.current.value === '') {
			setError('Please fill all the fields');

			// alert('masla');
			return false;
		}
		try {
			console.log('Im here inside signing');
			let result = await pb
				.collection('users')
				.authWithPassword(
					emailRef.current.value,
					passwordRef.current.value
				);

			// setGlobalLogin(pb.authStore.baseToken !== '');
			console.log('i is happen');
			successRef.current.style.display = 'block';

			return true;
		} catch (e) {
			setError('Invalid email or password');
			return false;
		}
	}

	function clickHandler() {
		setError('');
		setLoading(true);
		successRef.current.style.display = 'none';

		verify().then((isValid) => {
			setLoading(false);
			if (!isValid) return;
			setTimeout(() => {
				console.log('I am here at set timeout');
				setGlobalLogin(pb.authStore.baseToken !== '');
				}, 1800);
		});
	}
	return (
		<>
			<input type='checkbox' id='sign-in' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box relative'>
					<label
						htmlFor='sign-in'
						className='btn-sm btn absolute right-2 top-2 border-0 bg-white text-black hover:text-white'
					>
						x
					</label>
					<h3 className='mb-7 mt-2 text-center text-2xl  font-bold'>
						Sign in
					</h3>
					<form>
						<div className='mb-6'>
							<label
								htmlFor='email'
								className='mb-2 block text-sm font-medium text-gray-900 darkremoveext-white'
							>
								Your email
							</label>
							<input
								type='email'
								ref={emailRef}
								className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 darkremoveorder-gray-600 darkremoveg-gray-700 darkremoveext-white darkremovelaceholder-gray-400 darkremoveocus:border-blue-500 darkremoveocus:ring-blue-500'
								placeholder='name@example.com'
								required
							></input>
						</div>
						<div className='mb-6 '>
							<label
								htmlFor='password'
								className='mb-2 block text-sm font-medium text-gray-900 darkremoveext-white'
							>
								Your password
							</label>
							<div className='relative'>
								<input
									type='password'
									ref={passwordRef}
									placeholder='••••••••'
									className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 darkremoveorder-gray-600 darkremoveg-gray-700 darkremoveext-white darkremovelaceholder-gray-400 darkremoveocus:border-blue-500 darkremoveocus:ring-blue-500'
									required
								/>
								<label
									htmlFor='password'
									className='mb-2 block text-sm font-medium text-gray-900 cursor-pointer darkremoveext-white absolute top-1/2 transform -translate-y-1/2 right-3'
									onMouseDown={() => {
										passwordRef.current.type = 'text';
									}}
									onMouseUp={() => {
										passwordRef.current.type = 'password';
									}}
								>
									<Image src={passwordIcon} />
								</label>
							</div>

						</div>
						<h1
							ref={successRef}
							className={'mb-2 hidden text-green-800'}
						>
							Success! Reloading...
						</h1>
						<h1 className={'mb-2 text-red-800'}>{error}</h1>

						<div className='grid w-full'>
							<div
								className={`btn bg-eleven border-2 border-eleven hover:bg-opacity-10 hover:text-eleven ${
									loading ? 'loading' : ''
								}`}
								onClick={clickHandler}
							>
								Submit
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
