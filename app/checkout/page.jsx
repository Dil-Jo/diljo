'use client'
import React, { useState, useEffect } from "react";

export default function App() {
    const [message, setMessage] = useState("");

    const checkout = async () => {
        const response = await fetch('http://localhost:5000/create-checkout-session', { method: 'POST' });
        const data = await response.json();
        console.log(data);
        return data;
    }


    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation.");
        }

        if (query.get("canceled")) {
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, []);

    return message ? (
        <section>
            <p>{message}</p>
        </section>
    ) : (
        <section>
            <div className="product">
                <img
                    src="https://i.imgur.com/EHyR2nP.png"
                    alt="The cover of Stubborn Attachments"
                />
                <div className="description">
                    <h3>Stubborn Attachments</h3>
                    <h5>$20.00</h5>
                </div>
            </div>
            <div>
                {/* <button onClick={checkout}>
                    Checkout
                </button> */}
                <button><a href="https://buy.stripe.com/test_bIY4k76Hs9WI9lS8ww">Less Goo!</a></button>
            </div>
        </section>
    );
}