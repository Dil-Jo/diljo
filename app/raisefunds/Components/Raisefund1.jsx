'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import upload from '../../../assets/upload.png';
import Next from '../../../assets/next.png'
import Back from '../../../assets/back.png'

const Comp1 = ({ next, updateForm, prev, fullForm }) => {
	const [form, setForm] = useState({
		title: fullForm.title,
		description: fullForm.description,
		// imageThumb: fullForm.imageThumb,
		// image: fullForm.image,
		// image: '',
	});

	function onimg(e) {
		const bg = document.getElementById('imgbg');
		bg.style.backgroundSize = 'cover';
		bg.style.backgroundImage = `url(${URL.createObjectURL(
			e.target.files[0]
		)})`;
		console.log({ wee: e.target });
		// setForm({ ...form, image: e.target.files[0] });
		setForm({ ...form, imageThumbs: e.target.files[0] });
		console.log('done');
	}

	useEffect(() => {
		console.log({ form });
	}, [form]);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ form });
		if (form.title === '' || form.description === '')
			return alert('Please fill all the fields');

		updateForm(form);
		next();
	};

	return (
		<form className='flex items-center w-full h-3/5 flex-col m-2 min-[530px]:mx-4' onSubmit={handleSubmit}>
			<div className='flex flex-col md:w-full lg:w-5/6 h-full'>
				<div className='flex h-full justify-between md:justify-center md:gap-20 lg:justify-between flex-col min-[530px]:flex-row md:flex-row w-full'>
					<div className='w-1/2 flex flex-col'>
						<div className='flex md:flex-row flex-col'>
							<h1 className='tracking-tighter font-black text-xl md:text-2xl text-slate-800 mr-6 md:my-auto my-2'>
								TITLE:
							</h1>
							<input
								type='text'
								placeholder='Title goes here'
								name='title'
								value={form.title}
								className=' input input-bordered w-52 min-[530px]:w-full max-w-xs pb-3 px-4 pr-9 md:mt-0 mt-5 border-2 border-slate-300 rounded-md sm:text-md md:text-lg sm:p-5 my-auto'
								onChange={handleChange}
								required
							/>
						</div>
						<div className='mt-11 h-full flex flex-col'>
							<h1 className='tracking-tighter font-black text-xl md:text-2xl text-slate-800 mr-6 my-auto'>
								DESCRIPTION:
							</h1>
							<textarea
								type='text'
								value={form.description}
								placeholder='Description goes here'
								className='mt-5 pr-10 pb-10 pt-2 input input-bordered h-[8rem] min-[530px]:h-[12rem] w-72 min-[530px]:w-full resize-none border-2 border-slate-300 rounded-md sm:text-md md:text-lg sm:p-5 my-auto'
								name='description'
								onChange={handleChange}
								required
							></textarea>
						</div>
					</div>
					{/* <div className="w-1/3 my-5 "> */}
					{/* <div className="flex flex-col h-full w-full "> */}
					<div className='h-60 md:h-60 rounded-md  lg:w-1/4 xl:w-1/5 transition-all'>
						<h1 className='mt-8 min-[530px]:mt-0 min-[530px]:text-center sm:whitespace-nowrap md:whitespace-pre-wrap tracking-tighter font-black text-xl min-[1508px]:text-2xl text-slate-800 my-auto mb-5'>
							UPLOAD IMAGE
						</h1>
						<div
							id='imgbg'
							className='h-[85%] flex justify-center items-end bg-white border-2 border-slate-300 w-52 min-[530px]:w-full rounded-md'
						>
							<input
								// value={form.imageThumbs}
								type='file'
								accept='image/*'
								className='inputfile hidden w-full h-full'
								id='embedpollfileinput'
								onChange={(e) => onimg(e)}
							/>
							<label
								htmlFor='embedpollfileinput'
								className='flex flex-col items-center justify-center mb-4 cursor-pointer md:block'
							>
								<Image
									src={upload}
									alt='Upload sign'
									className='h-16 w-16 hover:-translate-y-2 duration-200 relative mx-auto '
								/>
							</label>
						</div>
					</div>

					{/* </div> */}
				</div>
				<div>
					<div className='flex justify-between gap-20 py-8 mb-12'>
						<div>
							<button
								onClick={prev}
								className='mt-16 flex border-2 border-slate-600 rounded-lg w-18 justify-center hover:border-eleven hover:bg-slate-200 duration-300 active:translate-y-1'
							>
								<Image
									src={Back}
									alt='Previous'
									className='w-16 h-16'
								/>
							</button>
						</div>
						<div>
							<button
								type='submit'
								className='mt-16 flex border-2 border-slate-600 rounded-lg w-18 justify-center hover:border-eleven hover:bg-slate-200 duration-300 active:translate-y-1'
							>
								<Image src={Next} alt='Next' className='w-16 h-16 ' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};
export default Comp1;
