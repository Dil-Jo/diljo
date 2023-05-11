'use client'
import React, { useState, useEffect } from 'react';
import PocketBase from "pocketbase";
import GlobalContext from '../Contexts/GlobalContext';

const GlobalState = (props) => {
	const host = 'beautiful-red-drawers.cyclic.app';
	const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
	const [login, setLogin] = useState(false)

	return (
		<GlobalContext.Provider
			value={{
				host,
				login,
				setLogin,
				pb
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalState;
