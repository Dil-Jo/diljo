import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');
// import Stripe from 'stripe';
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function GET(request) {
	// const { name, url } = await request.json();
	let status = false;
	try {
		// const transporter = nodemailer.createTransport({
		// 	host: 'smtp.mail.com',
		// 	secure: false,
		// 	auth: {
		// 		user: 'diljo@mail.com',
		// 		pass: 'cqEyU5MJ~:m5Dbq',
		// 	},
		// });

		// const mailOptions = {
		// 	from: 'diljo@mail.com',
		// 	to: 'shameekh2002@gamil.com',
		// 	subject: 'Sending Email using Node.js',
		// 	text: 'That was easy!',
		// };

		// transporter.sendMail(mailOptions, (error, info) => {
		// 	if (error) {
		// 		console.log({ error });
		// 	} else {
		// 		console.log('Email sent: ' + info.response);
		// 	}
		// });

		const transporter = nodemailer.createTransport({
			host: 'sandbox.smtp.mailtrap.io',
			port: 2525,
			auth: {
				user: '91b2f7ec2a7bde',
				pass: '5798a10a4ec3eb',
			},
		});

		const mailOptions = {
			from: 'diljo@mail.com',
			to: 'shameekh2002@gamil.com',
			subject: 'Sending Email using Node.js',
			text: 'That was easy!',
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log({ error });
			} else {
				console.log('Email sent: ' + info.response);
			}
		});

		status = true;
		return NextResponse.json({ status });
	} catch (error) {
		console.log({ error });
		return NextResponse.json({ status, error });
	}

	// return new Response('Hello, Next.js!')
}
