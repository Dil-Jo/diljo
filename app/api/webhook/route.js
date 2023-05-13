import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';
import PocketBase from 'pocketbase';
// console.log({ pbb: process.env.POCKET_BASE_KEY });
const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const secretKey =
	'whsec_5f40b5485c3fb06defafe40b94a1fe445a2d70de84def33d0f4f0211acf28a43';

export async function POST(request) {
	const body = await request.text();
	const signature = headers().get('stripe-signature');

	// console.log({ pb });
	let event;
	try {
		event = stripe.webhooks.constructEvent(body, signature, secretKey);
	} catch (err) {
		console.log({ err });
		return NextResponse.json({ err });
	}

	// const rawBody = await getRawBody(request);
	// const rawBody = await buffer(request);
	// console.log({rawBody})

	//   Handle the event
	switch (event.type) {
		// case 'payment_intent.succeeded':
		// console.log({ data: event });
		// const paymentIntent = event.data.object;
		// const amount = paymentIntent.amount / 100;
		// const { name, email } =
		// 	paymentIntent.charges.data[0].billing_details;
		// const receipt = paymentIntent.charges.data[0].receipt_url;
		// Then define and call a method to handle the successful payment intent.
		// handlePaymentIntentSucceeded(paymentIntent);
		// console.log('PaymentIntent was successful!');
		// // break;
		case 'checkout.session.completed':
			// console.log({ data: event.data });
			const paymentIntent = event.data.object;
			const { client_reference_id, customer_details, payment_link } =
				paymentIntent;
			const amount = paymentIntent?.amount_total / 100;
			const [customerId, fundraiserId] = client_reference_id.split('_');
			console.log({
				amount,
				client_reference_id,
				customer_details,
				payment_link,
				customerId,
				fundraiserId,
			});
			const data = {
				amount,
				transactionId: paymentIntent.id,
				donor: customerId,
				fundraiser: fundraiserId,
				// customer_details,
			};

			const record = await pb.collection('donations').create(data);
			// const { name, email } =
			// 	paymentIntent?.charges?.data[0]?.billing_details;
			// const receipt = paymentIntent?.charges?.data[0].receipt_url;
			// Then define and call a method to handle the successful payment intent.
			// handlePaymentIntentSucceeded(paymentIntent);
			console.log('checkout sessions was successful!');
			break;

		default:
			console.log(`event type ${event.type}`);
		// console.log({ data: event.data });
	}

	// Return a response to acknowledge receipt of the event
	return NextResponse.json({ received: true });

	// return new Response('Hello, Next.js!')
}
