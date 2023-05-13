'use client';
import { useEffect } from 'react';
function page() {
	const doSomething = async () => {
		console.log('ido sdfghj');

		const response = await fetch('http://localhost:8080/api/signup', {
			method: 'POST',
			mode: 'cors', // no-cors, *cors, same-origin
			headers: {
				'Content-Type': 'application/json',
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify({ hello: 'shalala', bello: 'hahaha' }), // body data type must match "Content-Type" header
		});
		return response.json(); // parses JSON response into native JavaScript objects
	};
	useEffect(() => {
		doSomething().then((data) => {
			console.log('ido');
			console.log(data);
		});
	}, []);

	return <div>page</div>;
}

export default page;
