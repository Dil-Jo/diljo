import { NextResponse } from 'next/server';
import Stripe from 'stripe';
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
	const { name, url } = await request.json();
	let status = false;
	try {
		const productId = await stripe.products.create({
			name,
		});
		const priceId = await stripe.prices.create({
			currency: 'pkr',
			custom_unit_amount: { enabled: true },
			product: productId.id,
		});
		const paymentLink = await stripe.paymentLinks.create({
			line_items: [
				{
					price: priceId.id,
					quantity: 1,
				},
			],
			after_completion: {
				type: "redirect",
				redirect: { url: `${process.env.HOST}/explore` },
			},
		});
		status = true;
		return NextResponse.json({ status, paymentLink });
	} catch (error) {
		console.log({ error });
		return NextResponse.json({ status, error });
	}
}
