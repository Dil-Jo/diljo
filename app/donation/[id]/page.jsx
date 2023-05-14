'use client';
import React, { useEffect, useState, useContext } from 'react';
import GlobalContext from '../../Contexts/GlobalContext';
import { useParams, useRouter } from 'next/navigation';

async function getData(id, pb) {
	let records = await pb.collection('donations').getFullList({
		filter: `fundraiser = "${id}"`,
	});
	let total = 0;
	records.forEach((record) => {
		total += record.amount;
	});
	records = await pb.collection('fundraisers').getOne(id, {});
	if (records.visibility === true) {
		let temp = await pb.collection('users').getOne(records.owner, {});
		records.owner = temp.username;
	} else {
		records.owner = 'Anonymous';
	}
	records.raised = total;
	return records;
}

export default function () {
	const { pb } = useContext(GlobalContext);
	const { id } = useParams();
	const [record, setRecord] = useState({});
	useEffect(() => {
		getData(id, pb).then((res) => {
			setRecord(res);
			console.log(res);
		});
	}, [id]);

	return (
		<div className='flex flex-row xl:px-96 md:px-52 px-10 h-full w-full'>
			<div className='flex flex-col w-full border-2 border-gray-300 p-6 rounded-2xl'>
				<h1 className='text-4xl tracking-tighter my-5 font-bold'>
					{record.title}
				</h1>
				<div className='rounded-2xl border-2 border-gray-300 shadow-xl mb-6'>
					<img
						className='object-contain rounded-2xl w-full'
						src={pb.getFileUrl(record, record.thumbnail)}
						alt='Image'
					/>
				</div>

				<hr className={'my-2'}></hr>
				<h1 className={'font-black text-black text-xl'}>
					Fundraiser by{' '}
					<span className={'text-gray-500'}>{"@"}{record.owner}</span>
				</h1>
				<h1 className={"font-black text-gray-500 text-sm"}>
					{"#"}{record.id}
				</h1>
				<hr className={'my-2'}></hr>
				<h2 className='text-sm mt-2 text-start w-full text-gray-400'>
					<span className={'text-xl font-black text-black'}>
						{record.raised}{' '}
					</span>
					/ {record.target} raised
				</h2>
				<progress
					className='progress progress-error w-full mt-2 mb-5'
					value={record.raised}
					max={record.target}
				></progress>

				<div className={'flex flex-row justify-start'}>
					<a
						type='button'
						data-action="share/whatsapp/share"
						target={'_blank'}
						href ={`https://wa.me/?text=Checkout to this fundraiser!%20${window.location.href}`}
						className={"bg-blue-600 px-6 py-2 mr-2 rounded-md text-white border-2 border-blue-600 font-bold text-sm transition-all duration-200 hover:bg-opacity-10 hover:text-blue-600"}
					>
						Share
					</a>
					{pb.authStore?.model?.id === undefined ? (
							<label
								rel='noopener noreferrer'
								htmlFor={"sign-in"}
								className={"bg-two px-6 py-2 rounded-md text-white border-2 border-two font-bold text-sm transition-all duration-200 hover:bg-opacity-10 hover:text-two"}
							>
								Donate
							</label>
						)
						: record.complete ? (
								<button
									rel='noopener noreferrer'
									disabled
									className={"bg-black px-6 py-2 rounded-md text-white border-2 border-two font-bold text-sm"}
								>
									Donate
								</button>
							):
						(<a
						href={`${record.link}?client_reference_id=${pb.authStore.model.id}_${id}`}
						target='_blank'
						rel='noopener noreferrer'
						className={"bg-two px-6 py-2 rounded-md text-white border-2 border-two font-bold text-sm transition-all duration-200 hover:bg-opacity-10 hover:text-two"}
					>
						Donate
					</a>)}
				</div>
				<hr className={'my-2'}></hr>
				<h1 className='font-sans text-lg'>{record.caption}</h1>
			</div>
		</div>
	);
}
