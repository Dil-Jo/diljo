'use client';
import GlobalState from '../Contexts/GlobalState';

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<GlobalState>
				<body>{children}</body>
			</GlobalState>
		</html>
	);
}
