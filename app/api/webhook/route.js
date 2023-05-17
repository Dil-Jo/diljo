import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';
import PocketBase from 'pocketbase';
const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

// Final by shameekh

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const secretKey = process.env.STRIPE_WEBHOOK_SECRET;

const setCompleted = async (id, amount) => {
	console.log('set completed');
	const fundraiser = await pb.collection('fundraisers').getOne(id);
	const { target } = fundraiser;
	console.log({ fundraiser });

	if (amount >= target) {
		await pb.collection('fundraisers').update(id, { complete: true });
		console.log('fundraiser complete check1');
		return true;
	}
	const donations = await pb
		.collection('donations')
		.getFullList({ filter: `fundraiser='${id}'` });
	let total = 0;
	donations.forEach((donation) => {
		total += donation.amount;
	});
	console.log({ total, target });

	if (total >= target) {
		await pb.collection('fundraisers').update(id, { complete: true });
		console.log('fundraiser complete check 2.0');

		return true;
	}
};

export async function POST(request) {
	const body = await request.text();
	const signature = headers().get('stripe-signature');
	console.log('i start');

	let event;
	try {
		event = stripe.webhooks.constructEvent(body, signature, secretKey);
	} catch (err) {
		return NextResponse.json({ err });
	}
	switch (event.type) {
		case 'checkout.session.completed':
			const paymentIntent = event.data.object;
			const { client_reference_id, customer_details, payment_link } =
				paymentIntent;
			const amount = paymentIntent?.amount_total / 100;
			const [customerId, fundraiserId] = client_reference_id.split('_');
			const data = {
				amount,
				transactionId: paymentIntent.id,
				donor: customerId,
				fundraiser: fundraiserId,
			};
			try {
				const record = await pb.collection('donations').create(data);
				await setCompleted(fundraiserId, amount);
			} catch (error) {
				return NextResponse.json({ status: false, error });
			}
			break;
		default:
			console.log(`event type ${event.type}`);
	}

	return NextResponse.json({ status: true, received: true });
}
