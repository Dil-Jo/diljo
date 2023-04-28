export default function Card(props) {
	let progressbar = (raised, goal) => {
		return { width: `${(raised / goal) * 100}%` };
	};
	let resolveImage = (url) => {
		return { backgroundImage: `url("${url}")` };
	};

	return (
		<div className='mx-auto group w-full shadow-xl max-w-md pb-8 rounded transform duration-500 hover:-translate-y-1 cursor-pointer mt-10 z-0'>
			<div
				className='content bg-cover bg-center rounded-b-xl h-64 rounded'
				style={resolveImage(props.image)}
			>
				<div className='flex items-end w-full h-full bg-black bg-opacity-20 text-white text-sm font-bold  p-4 rounded rounded-b-xl'>
					<div className='w-1/2 flex items-center'>
						<span>#{props.id}</span>
					</div>
				</div>
			</div>
			<div className='mt-8 px-4'>
				<p className='mt-2 text-2xl text-gray-700'>{props.caption}</p>
				<h2 className='mt-4  font-small text-gray-400'>
					{props.description}
				</h2>
				{/* <h2 className=""></h2> */}

				<div className='w-full mt-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
					<div
						className='bg-blue-600 h-2.5 rounded-full'
						style={progressbar(props.raised, props.goal)}
					></div>
				</div>
				<h2 className='mt-2 text-end font-small text-gray-400'>
					{props.raised} / {props.goal} raised
				</h2>
				<div className='flex flex-col items-center justify-center'>
					<button
						type='button'
						className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
					>
						Donate
					</button>
				</div>
			</div>
		</div>
	);
}
