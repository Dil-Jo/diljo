'use client';
import { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';
import Form1 from './Components/Form1.jsx';
import Form2 from './Components/Raisefund1.jsx';
import Form3 from './Components/Raisefund2.jsx';
import Image from 'next/image';

const RaiseFunds = () => {
	const [stage, setStage] = useState(0);
	const [fullForm, setFullForm] = useState({
		reason: 'Emergency',
		'radio-10': 'visible',
		title: '',
		description: '',
		image: '',
		name: '',
		cnic: '',
		amount: '',
		acountName: '',
		acountNumber: '',
		imageThumb: '',
	});

	// useEffect(() => {
	//   document.querySelector("main").style.padding = "0";
	//   document.querySelector("main").style.height = "100%";
	//   document.querySelector("body").style.height = "100vh";
	// }, []);

	const updateForm = async (form) => {
		console.log({ formHere: form });
		setFullForm({ ...fullForm, ...form });
		console.log({ stage });
		// if (stage === 4) {
		//   const formData = new FormData();
		//   formData.append("title", fullForm.title);
		//   formData.append("caption", fullForm.description);
		//   formData.append("target", fullForm.amount);
		//   formData.append(
		//     "owner",
		//     JSON.parse(localStorage.getItem("Login")).record.id
		//   );
		//   formData.append("coverPhoto", fullForm.image);
		//   formData.append("anonanonymityStatus", fullForm["radio-10"]);
		//   formData.append("thumbnail", fullForm.image);
		//   formData.append("category", fullForm.reason);
		//   formData.append("finalDate", "2025-12-1");

		//   const data = {
		//     title: fullForm.title,
		//     caption: fullForm.description,
		//     target: fullForm.amount,
		//     owner: JSON.parse(localStorage.getItem("Login")).record.id,
		//     coverPhoto: fullForm.image,
		//     anonanonymityStatus: fullForm["radio-10"],
		//     thumbnail: fullForm.image,
		//     category: fullForm.reason,
		//     finalDate: "2025-12-1",
		//   };
		//   console.log({ formData });

		//   const fetchStripe = await fetch("/api/add_product", {
		//     method: "POST",
		//     headers: {
		//       "Content-Type": "multipart/form-data",
		//     },
		//     body: JSON.stringify({
		//       name: fullForm.title,
		//     }),
		//   });
		//   const stripeId = await fetchStripe.json();
		//   console.log({ stripeId });
		//   if (stripeId.status) {
		//     data.stripeLink = stripeId.paymentLink.url;
		//     formData.append("stripeLink", stripeId.paymentLink.url);
		//   } else return alert("Something went wrong with stripe");

		//   const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
		//   const response = await pb.collection("fundraisers").create(formData);

		//   if (response.id) alert("Form submitted successfully");
		//   else alert("Form submission failed");
		// }
	};

	const submitForm = async () => {
		const formData = new FormData();
		formData.append('title', fullForm.title);
		formData.append('caption', fullForm.description);
		formData.append('target', fullForm.amount);
		formData.append(
			'owner',
			JSON.parse(localStorage.getItem('Login')).record.id
		);
		formData.append('coverPhoto', fullForm.image);
		formData.append('anonanonymityStatus', fullForm['radio-10']);
		formData.append('thumbnail', fullForm.imageThumb);
		formData.append('category', fullForm.reason);
		formData.append('finalDate', '2025-12-1');

		const data = {
			title: fullForm.title,
			caption: fullForm.description,
			target: fullForm.amount,
			owner: JSON.parse(localStorage.getItem('Login')).record.id,
			coverPhoto: fullForm.image,
			anonanonymityStatus: fullForm['radio-10'],
			thumbnail: fullForm.imageThumb,
			category: fullForm.reason,
			finalDate: '2025-12-1',
		};
		console.log({ formData });

		const fetchStripe = await fetch('/api/add_product', {
			method: 'POST',
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			body: JSON.stringify({
				name: fullForm.title,
			}),
		});
		const stripeId = await fetchStripe.json();
		console.log({ stripeId });
		if (stripeId.status) {
			data.stripeLink = stripeId.paymentLink.url;
			formData.append('link', stripeId.paymentLink.url);
		} else return alert('Something went wrong with stripe');

		const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
		const response = await pb.collection('fundraisers').create(formData);

		if (response.id) alert('Form submitted successfully');
		else alert('Form submission failed');
	};

	// useEffect(() => {
	//   updateForm({}).then((r) => console.log({ r }));
	// }, [stage]);

	if (localStorage.getItem('Login') == null)
		return <div>Please Login First</div>;
	return (
		<div className='w-full md:h-screen h-full md:flex md:flex-row overflow-auto'>
			<div
				className={
					'flex md:h-full h-3/6 bg-slate-400 md:w-2/6 w-full flex-col justify-center items-center rounded-b-3xl md:rounded-bl-none p-5'
				}
			>
				<MessageComponent stage={stage} />
			</div>
			<div
				className={
					'flex  flex-col md:w-4/6 w-full md:justify-center my-10'
				}
			>
				<Form
					updateForm={updateForm}
					fullForm={fullForm}
					setStage={setStage}
					stage={stage}
					submitForm={submitForm}
				/>
			</div>
		</div>
	);
};

const MessageComponent = ({ stage }) => {
	const messages = [
		["Let's lend a hand to someone,", 'who really needs it.'],
		["Let's lend a hand to someone,", 'who really needs it.'],
		["Let's lend a hand to someone,", 'who really needs it.'],
		['We make a living by what we get.', 'We make a life by what we give.'],
	];
	if (stage > 3) stage = 3;
	return (
		<>
			<div className={'w-full md:h-full'}>
				{/* <div className={"mx-5 mt-5 flex flex-col"}>
          <h1>Logo here</h1>

        </div> */}
			</div>
			<div className='w-full h-full flex flex-col justify-center md:justify-start'>
				<h2 className='text-3xl font-semi-bold text-center text-blue-900 tracking-tighter mb-5'>
					{messages[stage][0]}
				</h2>
				<h2 className='text-2xl text-center text-slate-700 tracking-tighter'>
					{messages[stage][1]}
				</h2>
			</div>
		</>
	);
};

const Form = ({ stage, setStage, updateForm, fullForm, submitForm }) => {
	const nextStage = () => setStage(stage + 1);
	const prevStage = () => setStage(stage - 1);
	switch (stage) {
		case 0:
			return <Welcome nextStage={nextStage} />;
		case 1:
			return (
				<Form1
					next={nextStage}
					fullForm={fullForm}
					updateForm={updateForm}
					prev={prevStage}
				/>
			);
		case 2:
			return (
				<Form2
					next={nextStage}
					fullForm={fullForm}
					updateForm={updateForm}
					prev={prevStage}
				/>
			);
		case 3:
			return (
				<Form3
					next={nextStage}
					fullForm={fullForm}
					updateForm={updateForm}
					prev={prevStage}
				/>
			);
		case 4:
			return <Finish submitForm={submitForm} />;
	}
};

const Finish = ({ submitForm }) => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<button className='btn btn-accent btn-lg' onClick={submitForm}>
				Click here to submit
			</button>
			<h1 className='text-3xl font-medium  text-slate-700 sm:text-4xl mb-8 tracking-tighter'>
				Thank you for your contribution!
			</h1>
			<h1 className='text-3xl font-medium  text-slate-700 sm:text-4xl mb-8 tracking-tighter'>
				Your contribution will help someone in need.
			</h1>
		</div>
	);
};

const Welcome = ({ nextStage }) => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<h1 className='text-3xl font-medium  text-slate-700 sm:text-4xl mb-8 tracking-tighter'>
				Welcome to Raise Funds
			</h1>
			<h1 className='text-3xl font-medium  text-slate-700 sm:text-4xl mb-8 tracking-tighter'>
				Let's lend a hand to someone, who really needs it.
			</h1>
			<button className='btn btn-accent btn-lg' onClick={nextStage}>
				Start
			</button>
		</div>
	);
};

export default RaiseFunds;
