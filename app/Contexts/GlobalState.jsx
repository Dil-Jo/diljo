'use client';
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import GlobalContext from '../Contexts/GlobalContext';

const GlobalState = (props) => {
	const host = 'beautiful-red-drawers.cyclic.app';
	const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
	const [globalLogin, setGlobalLogin] = useState(false);

	useEffect(() => {
		// const localStoragePB = localStorage.getItem('pb')
		// if (localStoragePB == null) return
		// const pB = JSON.parse(localStoragePB)
		// if (pB.authStore.baseToken == '') return
		// const authData = pB.collection('users').authRefresh();
		// if (!(authData.tokken == undefined)) {
		// 	pb = pB;
		// 	setGlobalLogin(true);
		// }
		pb.collection('users')
			.authRefresh()
			.then((res) => {
				console.log({ res });
				setGlobalLogin(pb.authStore.baseToken !== '');
			});
		return () => console.log('unmounting useEffect1');
	}, []);

	// useEffect(() => {
	// 	// if (globalLogin) localStorage.setItem('pb', pb)

	// 	return () =>
	// 		console.log('unmounting useEffect2')

	// }, [globalLogin])

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
