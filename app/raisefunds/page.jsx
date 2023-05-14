'use client';
import { useEffect, useState, useContext } from 'react';
import Form1 from './Components/Form1.jsx';
import Form2 from './Components/Raisefund1.jsx';
import Form3 from './Components/Raisefund2.jsx';
import GlobalContext from '../Contexts/GlobalContext';
import Image from 'next/image';
import Logo from '../../assets/Black.svg'
import Next from '../../assets/next.png'
import Toast from '../nearbyDonations/components/Toast.jsx';

const RaiseFunds = () => {
	const [toast, setToast] = useState({
		show: false,
		text: '',
		color: null,
	});
	const [submitted, setSubmitted] = useState(false);
	const [stage, setStage] = useState(0);
	const [fullForm, setFullForm] = useState({
		reason: 'Emergencies',
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

	const globalContext = useContext(GlobalContext);
	const { pb, globalLogin } = globalContext;

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
	useEffect(() => {
		if (toast.show == true) {
			setTimeout(() => {
				setToast({ show: false, text: '', color: null });
			}, 3000);
		}
	}, [toast]);

	const submitForm = async () => {
		console.log(fullForm);
		const formData = new FormData();
		formData.append('title', fullForm.title);
		formData.append('caption', fullForm.description);
		formData.append('target', fullForm.amount);
		formData.append(
			'owner',
			// JSON.parse(localStorage.getItem('Login')).record.id
			pb.authStore.model.id
		);
		formData.append('coverPhoto', fullForm.image);
		formData.append('visibility', fullForm['radio-10']);
		formData.append('thumbnail', fullForm.imageThumbs);
		formData.append('category', fullForm.reason);
		formData.append('finalDate', '2025-12-1');
		console.log(fullForm)
	console.log({ formData })
		const data = {
			title: fullForm.title,
			caption: fullForm.description,
			target: fullForm.amount,
			owner: pb.authStore.model.id,
			coverPhoto: fullForm.image,
			visibility: fullForm['radio-10'],
			thumbnail: fullForm.imageThumbs,
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
				// url:`${host}/explore/`
			}),
		});
		const stripeId = await fetchStripe.json();
		console.log({ stripeId });
		if (stripeId.status) {
			data.stripeLink = stripeId.paymentLink.url;
			formData.append('link', stripeId.paymentLink.url);
		} else setToast({ show: true, text: 'Something went wrong with the network', color: 'bg-red-700' });
		const response = await pb.collection('fundraisers').create(formData);
		if (response.id) {
			setToast({ show: true, text: 'Form submitted successfully' });
			setSubmitted(true);
		}
		else setToast({ show: true, text: 'Form submission failed', color: 'bg-red-700' });

	};

	// useEffect(() => {
	//   updateForm({}).then((r) => console.log({ r }));
	// }, [stage]);

	if (!globalLogin) return <div>Please Login First</div>;
	return (
		<>
			{toast.show && <Toast text={toast.text} color={toast.color} />}
			<div className='w-full md:h-[90.85%] mt-0 justify-center items-center md:flex md:flex-row overflow-hidden bg-ten'>
				<div
					className={
						'flex bg-two mb-8 md:mb-0 md:w-2/6 h-full w-full md:h-full flex-col justify-center items-center rounded-b-3xl md:rounded-bl-none'
					}
				>
					<MessageComponent stage={stage} />
				</div>
				<div
					className={
						'flex flex-col md:w-4/6 w-full md:justify-center'
					}
				>
					<Form
						submitted={submitted}
						updateForm={updateForm}
						fullForm={fullForm}
						setStage={setStage}
						stage={stage}
						submitForm={submitForm}
					/>
				</div>
			</div>
		</>
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
			{/* <div className={'w-full md:h-full'}>
			</div> */}
			<div className='py-8 md:py-0 w-full h-full flex flex-col justify-center items-center mx-4 '>
				<div>
					<h2 className='text-3xl lg:text-4xl font-sans font-semi-bold text-center text-one tracking-tighter mb-5'>
						{messages[stage][0]}
					</h2>
					<h2 className='text-3xl lg:text-4xl text-center text-one tracking-tighter'>
						{messages[stage][1]}
					</h2>
				</div>
			</div>
		</>
	);
};

const Form = ({ submitted, stage, setStage, updateForm, fullForm, submitForm }) => {
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
			return <Finish submitted={submitted} submitForm={submitForm} />;
	}
};

const Finish = ({ submitted, submitForm }) => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<h1 className='text-center text-3xl font-medium  text-slate-700 sm:text-4xl mb-8 tracking-tighter'>
				Thank you for your contribution!
			</h1>
			<h1 className='text-center mx-12 text-3xl font-medium  text-slate-700 sm:text-4xl mb-8 tracking-tighter'>
				Your contribution will help someone in need.
			</h1>
			{submitted == false ? <button className='btn bg-two border-2 border-two btn-md hover:bg-opacity-10 hover:text-two' onClick={submitForm}>
				Click here to submit
			</button> : null}

		</div>
	);
};

const Welcome = ({ nextStage }) => {
	return (
		<>
			<div className='flex justify-center items-center mt-12 sm:mt-8 lg:mt-0 px-auto'>
				<div className='flex mx-auto'>
					<div className='flex justify-center items-center'>
						<h1 className='text-center text-2xl sm:text-3xl min-[1150px]:text-4xl font-medium  text-slate-700 mb-8 tracking-tighter md:text-2xl'>
							Start your fundraising journey here with
						</h1>
					</div>
					<div className='h-72 mt-36 sm:mt-28 lg:mt-24'>
						<div className="h-20 w-20 sm:h-24 sm:w-24 relative md:h-28 md:w-28 lg:h-32 lg:w-32">
							<Image src={Logo} fill alt='Altermae' />
						</div>
						<div className='ml-2 sm:ml-4 lg:ml-6 mt-16 flex border-2 border-slate-600 rounded-lg w-16 sm:w-20 justify-center hover:border-eleven hover:bg-slate-200 duration-300 active:translate-y-1'>
							<Image className='w-12 h-12 sm:w-16 sm:h-16' src={Next} alt='next' onClick={nextStage}>
							</Image>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};


export default RaiseFunds;
