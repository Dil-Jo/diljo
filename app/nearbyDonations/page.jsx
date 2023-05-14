'use client';
import {
	GoogleMap,
	Marker,
	useLoadScript,
	CircleF,
} from '@react-google-maps/api';
import { useEffect, useRef, useState, useContext } from 'react';
import Modal from './components/Modal';
import PocketBase from 'pocketbase';
import Drive from './components/Drive';
import VolunteerModal from './components/VolunteerModal';
import GlobalContext from '../Contexts/GlobalContext';
import Toast from "./components/Toast";

const nearbyDonations = () => {
	const globalContext = useContext(GlobalContext);
	const { pb } = globalContext;
	const [numDrives, setNumDrives] = useState([]);
	const [shameekhMarkers, setShameekhMarkers] = useState([]);

	const [map, setMap] = useState(/**@type google.maps.Map */(null));
	const [lat, setLat] = useState();
	const [lng, setLng] = useState();
	const [loading, setLoading] = useState(true);
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
	});
	const openForm = (e) => {
		// ModalIsOpen(true);
		setLat(e.latLng.lat());
		setLng(e.latLng.lng());
		console.log({ modalRef });
		modalRef.current.className += ' modal-open ';
	};

	const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });

	const getLocation = () => {
		if (navigator.geolocation) {
			console.log('start get location');
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setCurrentLocation({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					});
				},
				(error) => console.error(error),
				{ enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
			);
		} else {
			console.error('Geolocation is not supported by this browser.');
		}
		console.log('end get location');
	};

	const getCollectionData = async () => {
		try {
			const currentDate = new Date(); // Get the current date
			
			const startingDateFilter = currentDate.toISOString().split('T')[0];
			const endingDateFilter = currentDate.toISOString().split('T')[0];
			
			const response = await pb.collection('volunteers').getList(1,200, {
				filter: `startingDate <= '${startingDateFilter}' && endingDate >= '${endingDateFilter}'`
			});
			let newArr = [...response.items];
			for await (const item of newArr) {
				const participationStatus = await pb
					.collection('user_volunteers')
					.getFullList({ filter: `users="${pb.authStore.model.id}"&&drives="${item.id}"` });
				item.participating = participationStatus.length !== 0;
			}
			// console.log({ newArr });
			setNumDrives(newArr);
			getMarkers(newArr);

			// return response.items
		} catch (error) {
			console.error('Failed to get collection data:', error);
		}
	};
	const getMarkers = async (prop) => {
		getLocation();
		let newArr = [];
		prop.map((data) => {
			const title = data.title;
			const latitude = data.latitude;
			const longitude = data.longitude;
			const start = data.startingDate;
			const end = data.endingDate;
			const category = String(data.category);
			const newMarker = {
				title: title,
				lat: latitude,
				lng: longitude,
				cat: category,
				end: end,
				start: start,
			};
			newArr.push(newMarker);
		});
		setShameekhMarkers(newArr);
		setLoading(false);
	};
	useEffect(() => {
		// getCollectionData(/).then((res) => getMarkers(res));
		getCollectionData();
	}, []);

	useEffect(() => {
		console.log({ shameekhMarkers }, [shameekhMarkers]);
	});

	const center = {
		lat: Number(currentLocation.lat),
		lng: Number(currentLocation.lng),
	};
	const modalRef = useRef(null);
	return (
		<>
			<div className='flex mb-4 border-4 border-solid border-slate-900'>
				<div className='drawer drawer-mobile -mt-2'>

					<input
						id='my-drawer-2'
						type='checkbox'
						className='drawer-toggle'
					/>
					<div className='drawer-content flex flex-col items-center justify-end'>
						<div className='relative App h-full w-full'>
							{!isLoaded ? (
								<h1>Loading...</h1>
							) : (
								<>
									<label
										htmlFor='my-drawer-2'
										className='drawer-overlay absolute btn btn-primary text-sm drawer-button lg:hidden z-10 top-4 right-4 mt-24'
									>
										Show Drives
									</label>
									<GoogleMap
										id='map'
										mapContainerClassName='map-container h-full w-full'
										center={center}
										options={{
											disableDefaultUI: true,
											zoomControl: true,
											fullscreenControl: false,
										}}
										zoom={14}
										onLoad={(map) => setMap(map)}
										onClick={(e) => openForm(e)}
									>
										<Marker
											position={{
												lat: Number(
													currentLocation.lat
												),
												lng: Number(
													currentLocation.lng
												),
											}}
										/>
										{shameekhMarkers.map((marker) => {
											var url;
											switch (marker.cat) {
												case 'food':
													// code block
													url = '/assets/food.png';
													break;
												case 'clothing':
													// code block
													url =
														'/assets/clothing.png';
													break;
												case 'blood':
													url = '/assets/blood.png';
													break;
												case 'books':
													url = '/assets/books.png';
													break;
												default:
													break;
											}
											return (
												<Marker
													title={`${marker.title
														}\nStarting on : ${String(
															marker.start
														).slice(
															0,
															10
														)}\nEnding on : ${String(
															marker.end
														).slice(0, 10)}`}
													key={marker.title}
													position={{
														lat: Number(marker.lat),
														lng: Number(marker.lng),
													}}
													icon={{
														url: url,
														scaledSize:
															new window.google.maps.Size(
																45,
																45
															),
														origin: new window.google.maps.Point(
															0,
															0
														),
														anchor: new window.google.maps.Point(
															15,
															15
														),
													}}
												/>
											);
										})}
										{[2000, 4000].map((radius, idx) => {
											return (
												<CircleF
													key={idx}
													onClick={(e) => openForm(e)}
													center={center}
													radius={radius}
													onLoad={() =>
														console.log(
															'Circle Load...'
														)
													}
													options={{
														fillColor:
															radius > 2000
																? 'red'
																: 'green',
														strokeColor:
															radius > 2000
																? 'red'
																: 'green',
														strokeOpacity: 0.4,
														fillOpacity: 0.2,
													}}
												/>
											);
										})}
									</GoogleMap>
								</>
							)}
						</div>
					</div>
					{!loading && (
						<div className='drawer-side'>
							<label
								htmlFor='my-drawer-2'
								className='drawer-overlay'
							></label>
							<div className={"h-[5.5rem]"}></div>
							<div className='flex justify-center py-4 bg-eleven sm:w-full md:w-[30rem]'>
								<h1 className='text-3xl text-white'>
									Nearby Donation Drives
								</h1>
							</div>
							<ul className='p-4 bg-base-100 text-base-content border-r-4 border-slate-900 w-full md:w-[30rem] overflow-y-auto'>
								{numDrives.map((drive) => {
									return (
										<label
											htmlFor='my-drawer-2'
											className='drawer-overlay'
										>
											<Drive
												title={drive.title}
												category={drive.category}
												lat={drive.latitude}
												lng={drive.longitude}
												stDate={drive.startingDate}
												endDate={drive.endingDate}
												map={map}
												id={drive.id}
												participating={drive.participating}
											/>
										</label>
									);
								})}
							</ul>
						</div>
					)}
				</div>
			</div>

			<AddDriveModal
				id={'alphabetical-gamma-tistan'}
				lat={lat}
				lng={lng}
				referer={modalRef}
			/>
		</>
	);
};

const AddDriveModal = ({ id, lat, lng, referer }) => {
	const closeModal = () => {
		referer.current.className = 'modal cursor-pointer';
	};

	const [formData, setFormData] = useState({
		title: '',
		category: '',
		startingDate: '',
		endingDate: '',
	});
	const [error, setError] = useState('');
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const globalContext = useContext(GlobalContext);
	const { pb } = globalContext;
	const [toast, setToast] = useState(false);

	const saveDataToPocketBase = async (e) => {
		e.preventDefault();
		console.log({ formData });
		if (!formData.title) {
			setError('Please enter a title.');
			return;
		}
		if (!formData.category) {
			formData.category = 'food';
		}
		if (!formData.startingDate) {
			setError('Please enter a starting date.');
			return;
		}
		if (!formData.endingDate) {
			setError('Please enter a ending date.');
			return;
		}
		const organizer = pb.authStore.model?.id;
		try {
			const response = await pb.collection('volunteers').create({
				title: formData.title,
				longitude: lng,
				latitude: lat,
				category: formData.category,
				startingDate: formData.startingDate,
				endingDate: formData.endingDate,
				organizer: organizer,
			});
			setToast(true);
			console.log('Data saved successfully:');
		} catch (error) {
			console.error('Failed to save data:', error);
		}
	};
	useEffect(() => {
		if (toast) {
			setTimeout(() => {
				setToast(false);
			}, 3000);
		}
	}, [toast]);
	return (
		<div onClick={(e) => e.stopPropagation()}>
			<input
				type='checkbox'
				id={`drive-modal-${id}`}
				className='modal-toggle'
			/>
			<div className='modal cursor-pointer' ref={referer}>
				<div className='modal-box relative w-full'>
					<label
						onClick={() => {
							closeModal();
							setError("")
						}}
						className='btn btn-sm btn-circle absolute right-2 top-2'
					>
						✕
					</label>
					<div className='model-content flex flex-col justify-center items-start my-5 w-full'>
						<h2 className='text-2xl font-bold tracking-tighter w-full justify-center flex'>
							{' '}
							Add Donation Drive
						</h2>
						<form
							id='addDrive'
							onSubmit={saveDataToPocketBase}
							className='text-slate-800 w-full'
						>
							{/* --------------------------- */}

							<label
								className='label text-lg font-normal'
								htmlFor='title'
							>
								Drive Title
							</label>
							<input
								type='text'
								placeholder='Title goes here'
								id='title'
								className='input input-bordered w-full'
								name='title'
								required
								value={formData.title}
								onChange={handleChange}
							/>
							<label
								className='label text-lg font-normal'

								htmlFor='category'
							>
								Drive Category
							</label>
							<select
								className='select select-bordered w-full'
								id='category'
								name='category'
								required
								value={formData.category}
								onChange={handleChange}
							>
								<option value='food' selected>Food Drive</option>
								<option value='clothing'>Clothing Drive</option>
								<option value='blood'>Blood Drive</option>
								<option value='books'>Books Drive</option>
							</select>
							{/* --------------------------- */}

							<label
								htmlFor='starting'
								className='label text-lg font-normal'
							>
								Start Date
							</label>
							<div className={''}>
								<div className='relative w-full'>
									<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
										<svg
											aria-hidden='true'
											className='w-5 h-5 text-gray-500 dark:text-gray-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
												clipRule='evenodd'
											></path>
										</svg>
									</div>
									<input
										type='date'
										name='startingDate'
										id='startingDate'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='Select date'
										value={formData.startingDate}
										onChange={handleChange}
									/>
								</div>
							</div>
							<label
								htmlFor='ending'
								className='label text-lg font-normal'
							>
								End Date
							</label>
							<div className='relative w-full'>

								<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
									<svg
										aria-hidden='true'
										className='w-5 h-5 text-gray-500 dark:text-gray-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
											clipRule='evenodd'
										></path>
									</svg>
								</div>
								<input
									type='date'
									name='endingDate'
									id='endingDate'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='Select date'
									value={formData.endingDate}
									onChange={handleChange}
								/>
							</div>
						</form>
					</div>
					<h1 className={"text-red-800 mb-2"}>{error}</h1>
					<div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
						<label className=' bg-red-800 px-6 py-2 rounded-md text-white border-2 border-red-800 font-bold text-lg transition-all duration-200 hover:bg-opacity-10 hover:text-red-800 flex justify-center items-center' onClick={closeModal}>
							Cancel
						</label>{
							pb.authStore.model?.id === undefined ?
								<label
									className='bg-eleven px-6 py-2 rounded-md text-white border-2 border-eleven font-bold text-md transition-all duration-200 hover:bg-opacity-10 hover:text-eleven flex justify-center items-center'
									htmlFor={"sign-in"}
									onClick={() => {
										setError("")
										closeModal();
									}}
								>Add Drive</label> :
								<label
									className='bg-eleven px-6 py-2 rounded-md text-white border-2 border-eleven font-bold text-md transition-all duration-200 hover:bg-opacity-10 hover:text-eleven flex justify-center items-center'
									form='addDrive'
									onClick={(e) => {
										setError("")
										saveDataToPocketBase(e);
									}}
								>
									Add Drive
								</label>
						}
					</div>
				</div>
			</div>
			{
				toast && (
					<Toast text={"You just enlisted a new volunteer drive!"} />)
			}
		</div>
	);
};

export default nearbyDonations;