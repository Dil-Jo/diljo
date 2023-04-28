import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import GlobalContext from '../Contexts/GlobalContext';

const GlobalState = (props) => {
	const host = 'beautiful-red-drawers.cyclic.app';

	return (
		<GlobalContext.Provider
			value={{
				host,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalState;
