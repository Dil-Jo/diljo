'use client';
import { useState } from 'react';
import Button from '../../global-components/Button';
import arrow from '../../../assets/arrow.png';
import Image from 'next/image';

const Comp2 = ({ next, updateForm, prev, fullForm }) => {
	const [form, setForm] = useState({
		name: fullForm.name,
		cnic: fullForm.cnic,
		amount: fullForm.amount,
		acountName: fullForm.acountName,
		acountNumber: fullForm.acountNumber,
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	// const [name, setName] = useState("");
	// const [cnic, setCnic] = useState("");
	// const [amount, setAmount] = useState("");
	// const [acname, setAcname] = useState("");
	// const [acnum, setAcnum] = useState("");
	// const [formcp2, setForm] = useState({
	//     name: "",
	//     cnic: "",
	//     amount: "",
	//     acname: "",
	//     acnum: "",
	// });

	const handleSubmit = (e) => {
		e.preventDefault();
		updateForm(form);
		// updateForm({
		//     ...formcp2,
		//     name: name,
		//     cnic: cnic,
		//     amount: amount,
		//     acname: acname,
		//     acnum: acnum,
		// });
		next();
	};
	return (
		<form className='mx-4' onSubmit={handleSubmit}>
			<div>
				<h1 className='tracking-tighter font-black text-2xl text-gray-500 text-center'>
					ENTER DETAILS:
				</h1>
			</div>
			<div className='grid grid-cols-2 gap-8 mt-4'>
				<div className='col-span-2'>
					<h1 className='tracking-tighter font-black text-2xl text-gray-500 mr-6 my-auto'>
						NAME:
					</h1>
					<input
						type='text'
						placeholder='Enter the name of the donee'
						value={form.name}
						name='name'
						onChange={handleChange}
						className='input input-bordered w-full'
						required
					/>
				</div>
				<div className='col-span-2'>
					<h1 className='tracking-tighter font-black text-2xl text-gray-500 mr-6 my-auto'>
						CNIC:
					</h1>
					<input
						type='text'
						name='cnic'
						pattern='^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$'
						placeholder='e.g 35202-3156628-9'
						value={form.cnic}
						onChange={handleChange}
						className='input input-bordered w-full'
						required
					/>
				</div>
				<div className='col-span-2'>
					<div className='form-control'>
						<h1 className='tracking-tighter font-black text-2xl text-gray-500 mr-6 my-auto'>
							TARGET AMOUNT:
						</h1>
						<div>
							<label className='input-group w-86 '>
								<span>PKR</span>
								<input
									type='text'
									name='amount'
									value={form.amount}
									placeholder='e.g 1000'
									onChange={handleChange}
									className='input input-bordered w-full'
									required
								/>
							</label>
						</div>
					</div>
				</div>
				<div className='col-span-2'>
					<div className='grid grid-cols-2 gap-8'>
						<div className='col-span-2'>
							<h1 className='tracking-tighter font-black text-2xl text-gray-500 mr-6 my-auto'>
								ACCOUNT NUMBER:
							</h1>
							<input
								type='text'
								placeholder='Enter the name of recipient account'
								value={form.acountName}
								name='acountName'
								onChange={handleChange}
								className='input input-bordered w-full'
								required
							/>
						</div>
						<div className='col-span-2'>
							<h1 className='tracking-tighter font-black text-2xl text-gray-500 mr-6 my-auto '>
								IBAN:
							</h1>
							<input
								type='text'
								pattern='^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$'
								placeholder='e.g PK36SCBL0000001123456702'
								onChange={handleChange}
								value={form.acountNumber}
								name='acountNumber'
								className='input input-bordered w-full'
								required
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-center gap-20 py-8'>
				<div>
					<button
						onClick={prev}
						className='btn btn-square btn-info btn-lg'
					>
						<Image
							src={arrow}
							alt='Previous'
							className='rotate-180 w-8 h-auto'
						/>
					</button>
				</div>
				<div>
					<button
						type='submit'
						className='btn btn-square btn-success btn-lg'
					>
						<Image src={arrow} alt='Next' className='w-8 h-auto ' />
					</button>
				</div>
			</div>
		</form>
	);
};
export default Comp2;
