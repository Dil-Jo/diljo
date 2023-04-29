'use client';
import { useEffect, useContext } from 'react';
import PocketBase from 'pocketbase';
import GlobalContext from '../Contexts/GlobalContext';
import Donate from '../Components/Donate'
// import { GlobalContext } from 'GlobalContext';

export const metadata = {
	title: 'Test Page',
	description: 'metatag',
};

const TestPage = () => {
	const pb = new PocketBase('http://127.0.0.1:8090');
	const contextProps = useContext(GlobalContext);

	useEffect(() => {
		console.log('First useEffect');
		console.log(contextProps.host);
		return () => {
			console.log('First useEffect cleanup');
		};
	}, []);

	const addUser = async () => {
		const user = {
			username: 'Shameekh2',
			email: 'shameek2@sfa.com',
			name: 'Shameekh2',
			password: '123456789A',
			passwordConfirm: '123456789A',
		};
		try {
			// const record = await pb.collection('users').create(user);
			const record = 'Goog';
			console.log({ record });
			return record;
		} catch (error) {
			console.log({ error });
			return { error: error.message };
		}
	};
	return (
		<div>
			{/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt,
			aperiam aliquam! Dolorem recusandae qui id dolor atque consequatur
			dolore suscipit animi magni possimus, dicta, laboriosam deleniti
			nisi enim necessitatibus incidunt!
			<button className='bg-slate-500 p-20 text-white' onClick={addUser}>
				Click me
			</button> */}
			<Donate />
		</div>
	);
};

export default TestPage;
