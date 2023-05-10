'use client'
import React, { useState, useEffect } from 'react';
import GlobalContext from '../Contexts/GlobalContext';

const GlobalState = (props) => {
	const host = 'beautiful-red-drawers.cyclic.app';
	const [login, setLogin] = useState(false)

	return (
		<GlobalContext.Provider
			value={{
				host,
				login,
				setLogin
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalState;
