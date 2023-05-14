'use client';
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import GlobalContext from '../Contexts/GlobalContext';

const GlobalState = (props) => {
	const host = 'beautiful-red-drawers.cyclic.app';
	const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
	const [globalLogin, setGlobalLogin] = useState(false);

	useEffect(() => {
		console.log("I check if I'm logged in")
		if (localStorage.getItem('pocketbase_auth') == null) return;
		console.log("I passed through level one")

		setGlobalLogin(true);

		console.log("I passed through level two")

		pb.collection('users')
			.authRefresh()
			.then((res) => {
				console.log({ res });
				setGlobalLogin(pb.authStore.baseToken !== '');
			});
		console.log("I passed through level three")

		return () => console.log('unmounting useEffect1');
	}, []);


	return (
		<GlobalContext.Provider
			value={{
				host,
				globalLogin,
				setGlobalLogin,
				pb,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalState;
