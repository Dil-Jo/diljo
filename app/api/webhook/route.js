import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';
import PocketBase from 'pocketbase';
// console.log({ pbb: process.env.POCKET_BASE_KEY });
const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const secretKey =
	'whsec_5f40b5485c3fb06defafe40b94a1fe445a2d70de84def33d0f4f0211acf28a43';


const setCompleted = async (id, amount) => {

	const fundraiser = await pb.collection("fundraisers").getOne(id);
	const { target } = fundraiser;
	console.log({ target, amount });

	if (amount >= target) {
		await pb.collection("fundraisers").update(id, { complete: true });
		// console.log("updated")
		return true;
	}
	const donations = await pb.collection("donations").getFullList({ filter: `fundraiser='${id}'` });
	let total = 0;
	donations.forEach((donation) => {
		total += donation.amount;
	})

	if (total >= target) {
		await pb.collection("fundraisers").update(id, { complete: true });
		// console.log("updated 2.99")
		return true;
	}

}

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

	switch (event.type) {
		case 'checkout.session.completed':
			// console.log({ data: event.data });
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
				// customer_details,
			};

			try {
				const record = await pb.collection('donations').create(data);
				setCompleted(fundraiserId, amount);
			} catch (error) {
				console.log({ error })
				return NextResponse.json({ stuaus: false, error });
			}
			console.log('checkout sessions was successful!');
			break;

		default:
			console.log(`event type ${event.type}`);
	}

	return NextResponse.json({ status: true, received: true });
}
