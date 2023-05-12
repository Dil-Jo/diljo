'use client'
import React, { useState, useEffect } from 'react';
import PocketBase from "pocketbase";
import GlobalContext from '../Contexts/GlobalContext';

const GlobalState = (props) => {
	const host = 'beautiful-red-drawers.cyclic.app';
	const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
	const [globalLogin, setGlobalLogin] = useState(false)

	return (
		<GlobalContext.Provider
			value={{
				host,
				globalLogin,
				setGlobalLogin,
				pb
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalState;
