'use client';
import PocketBase from 'pocketbase';

export default function page() {
	const sendMail = () => {
		const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
		pb.NewMailClient.sendMail();
	};
	return (
		<div>
			page
			<button className='btn btn-primary' onClick={sendMail}>
				Send
			</button>
		</div>
	);
}
