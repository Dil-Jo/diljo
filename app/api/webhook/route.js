import { NextResponse } from "next/server"
// import { buffer } from "micro";
import Stripe from "stripe"
// import { headers } from 'next/headers';
// import { Readable } from 'node:stream';

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// export const config = {
//     api: {
//       bodyParser: false,
//     },
//   };

//   async function getRawBody(readable) {
//     const chunks = [];
//     for await (const chunk of readable) {
//       chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
//     }
//     return Buffer.concat(chunks);
//   }
  

export async function POST(request) {
    const event = await request.json();
    // const headersList = headers();
    // const signature = headersList.get('stripe-signature');
    // try {
    //     console.log({signature})
    //     stripe.webhooks.constructEvent(event.body, signature, secretKey);
    // }catch  (err) {
    //     return NextResponse.json({err});
    // }   

    // const rawBody = await getRawBody(request);
    // const rawBody = await buffer(request);
    // console.log({rawBody})

//   Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
    //   console.log('PaymentIntent was successful!');
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      // Then define and call a method to handle the successful attachment of a PaymentMethod.
      // handlePaymentMethodAttached(paymentMethod);
        console.log('PaymentMethod was attached to a Customer!');
      break;
    // ... handle other event types
    default:
    //   console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  return NextResponse.json({received: true});
   
    // return new Response('Hello, Next.js!')
}
