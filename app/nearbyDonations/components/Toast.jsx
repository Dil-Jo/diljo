export default function (props) {
	// let classes = ""
	// if (props.color == null) classes = 'bg-two';
	// else classes = `${props.color}`;
	return (
		<>
			<div className='toast'>
				<div
					// className={`rounded-3xl py-2 px-4 alert alert-info ${
					className={`alert alert-info font-semibold${
						props.color == null ? 'bg-two' : props.color
					}`}
				>
					<div>
						<span className={'text-white'}>{props.text}</span>
					</div>
				</div>
			</div>
		</>
	);
}
