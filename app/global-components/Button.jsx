import Link from 'next/link';
import React from 'react';

const Button = ({ type, text, link = '' }) => {
	const buttonColor = {
		primary: 'bg-blue-500 hover:bg-blue-600',
		secondary: 'bg-gray-500 hover:bg-gray-600',
		tertiary: 'bg-green-500 hover:bg-green-600',
		quaternary: 'bg-red-500 hover:bg-red-600',
		quinary: 'bg-yellow-500 hover:bg-yellow-600',
		senary: 'bg-pink-500 hover:bg-pink-600',
		septenary: 'bg-purple-500 hover:bg-purple-600',
	};
	const btnStyles = `rounded-lg border w-max px-4 py-1 text-sm font-semibold text-gray-800 hover:border-blue-600 hover:text-white ${buttonColor[type]}`;
	if (link !== '')
		return (
			<button className={btnStyles}>
				<Link href={link}>{text}</Link>
			</button>
		);
	else return <button className={btnStyles}>{text}</button>;
};

export default Button;
