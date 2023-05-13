import { NextResponse } from "next/server"
import Stripe from "stripe"
import { headers } from 'next/headers';

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// const secretKey = 'whsec_5f40b5485c3fb06defafe40b94a1fe445a2d70de84def33d0f4f0211acf28a43'
  

export async function POST(request) {
    const body = await request.text()
    console.log({body})
    const signature = headers().get("stripe-signature") 
    let event;
    try {
        console.log({signature})
       event = stripe.webhooks.constructEvent(body, signature, process.env.secretKey);
    }catch  (err) {
      console.log({err})
        return NextResponse.json({err});
    }   

    // const rawBody = await getRawBody(request);
    // const rawBody = await buffer(request);
    // console.log({rawBody})

//   Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      console.log('PaymentIntent was successful!');
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      // Then define and call a method to handle the successful attachment of a PaymentMethod.
      // handlePaymentMethodAttached(paymentMethod);
        console.log('PaymentMethod was attached to a Customer!');
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  return NextResponse.json({received: true});
   
    // return new Response('Hello, Next.js!')
}
