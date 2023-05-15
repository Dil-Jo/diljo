import Image from 'next/image';
import { useEffect, useState, useContext, useRef } from 'react';
import GlobalContext from '../../Contexts/GlobalContext';
import Toast from './Toast';
import { setTimeout } from 'timers';

const Drive = ({
	title,
	category,
	lat,
	lng,
	stDate,
	endDate,
	map,
	id,
	participating,
}) => {
	const [stautsState, setStautsState] = useState(participating); //  false for not going

	return (
		<>
			<div
				className={`shadow-lg flex transition-all border-solid border-black border-2 rounded-xl mb-[1rem] active:bg-blue-900 ease-in active:text-white cursor-pointer
					${stautsState ? 'border-green-600' : ''}`}
				onClick={(e) => {
					map.panTo({ lat: Number(lat), lng: Number(lng) });
				}}
			>
				<div className='flex flex-col w-5/6'>
					<h3 className='text-[1.3rem] font-bold underline ml-4 mt-4'>
						{title}
					</h3>
					<div className='flex flex-row ml-4 mt-2'>
						<h3 className='text-[1.3rem] font-normal mb-3'>
							<span className={'font-semibold'}>For</span>{' '}
							{String(category).toUpperCase()}
						</h3>
						<h3 hidden>Start Date: {stDate}</h3>
						<h3 hidden>End Date: {endDate}</h3>
					</div>
				</div>
				<div className='flex flex-row'>
					<h3 hidden>Latitude: {lat}</h3>
					<h3 hidden>Longitude: {lng}</h3>
				</div>
				<div className='flex justify-evenly w-2/6 items-end my-auto px-2'>
					{!stautsState && (
						<label
							htmlFor={`volunteer-modal-${id}`}
							className='h-8 w-8 '
						>
							<img
								title='Volunteer for this drive'
								src='/assets/volunteer.png'
								className='bg-white rounded-full h-8 w-8'
								alt='volunteer-here'
							/>
						</label>
					)}

					<Image
						title='Open directions for this drive'
						alt='go-here'
						className='rounded-full bg-white'
						width={30}
						height={30}
						src={'/assets/arrow.png'}
					/>
				</div>
			</div>
			<Modal
				id={id}
				title={title}
				setStautsState={setStautsState}
				stDate={stDate}
				endDate={endDate}
			/>
		</>
	);
};

const Modal = ({ id, title, setStautsState, stDate, endDate }) => {
	const globalContext = useContext(GlobalContext);
	const { pb } = globalContext;
	const idLabel = useRef(null);
	const [error, setError] = useState('');

	const saveDataToPocketBase = async () => {
		const user = pb.authStore.model?.id;
		try {
			console.log(user, id);
			const response = await pb.collection('user_volunteers').create({
				users: user,
				drives: id,
			});
			fetch (`/api/send_mail`, {
				method: 'POST',
				body: JSON.stringify({
					user_id: user,
					drive_id: id,
				})
			})
			console.log(response);
			setToast(true);
			idLabel.current.click();
			console.log('Data saved successfully:', response);
			setStautsState(true);
		} catch (error) {
			console.error('Failed to save data:', error);
			setError('An Error Occurred, Please try again later.');
		}
	};
	const [toast, setToast] = useState(false);
	useEffect(() => {
		if (toast) {
			setTimeout(() => {
				setToast(false);
			}, 3000);
		}
	}, [toast]);

	return (
		<div>
			<input
				type='checkbox'
				id={`volunteer-modal-${id}`}
				className='modal-toggle'
			/>
			<div className='modal cursor-pointer'>
				<div className='modal-box relative'>
					<label
						htmlFor={`volunteer-modal-${id}`}
						onClick={() => {
							setError('');
						}}
						className='btn btn-sm btn-circle absolute right-2 top-2'
						ref={idLabel}
					>
						✕
					</label>
					<h3 className='text-lg font-bold'>
						Do you want to volunteer for {title}?
					</h3>
					<p className='py-4 pb-1 font-black text-gray-500'>
						Drive from{' '}
						{new Date(stDate).toISOString().split('T')[0]} -{' '}
						{new Date(endDate).getFullYear()}-
						{new Date(endDate).getUTCMonth()}-
						{new Date(endDate).getDate()}{' '}
					</p>
					<h1 className={'text-red-800 mb-1'}>{error}</h1>
					<div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
						<label
							htmlFor={`volunteer-modal-${id}`}
							onClick={() => {
								setError('');
							}}
							className=' bg-red-800 px-6 py-2 rounded-md text-white border-2 border-red-800 font-bold text-lg transition-all duration-200 hover:bg-opacity-10 hover:text-red-800 flex justify-center items-center'
						>
							I'll pass!
						</label>
						{pb.authStore.model?.id === undefined ? (
							<label
								className='bg-eleven px-6 py-2 rounded-md text-white border-2 border-eleven font-bold text-md transition-all duration-200 hover:bg-opacity-10 hover:text-eleven flex justify-center items-center'
								htmlFor={'sign-in'}
								onClick={() => {
									idLabel.current.click();
								}}
							>
								Count me In
							</label>
						) : (
							<label
								className='bg-eleven px-6 py-2 rounded-md text-white border-2 border-eleven font-bold text-md transition-all duration-200 hover:bg-opacity-10 hover:text-eleven flex justify-center items-center'
								onClick={() => {
									saveDataToPocketBase();
									setError('');
								}}
							>
								Count me In
							</label>
						)}
					</div>
				</div>
			</div>
			{toast && (
				<Toast text={'You just volunteered for a donation drive!'} />
			)}
		</div>
	);
};

export default Drive;
