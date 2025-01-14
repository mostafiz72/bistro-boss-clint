import React from 'react'
import SectionTitle from '../../../HomePage/Categorys/SectionTitle'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutFrom from './CheckOutFrom';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
export default function Payment() {

    return (
        <>
            <SectionTitle heading={"Payment"} subHeading={"Please pay to eat"} />
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutFrom></CheckoutFrom>
                </Elements>
            </div>
        </>
    )
}
