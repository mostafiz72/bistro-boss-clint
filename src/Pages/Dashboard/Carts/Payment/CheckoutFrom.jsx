import React, { useEffect, useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useCart from '../../../../Hooks/useCart';
import useAuth from '../../../../Hooks/useAuth/useAuth';

export default function CheckoutFrom() {

     const [error, setError] = useState("")
     const [clintSecret, setClintSecret] = useState("")
     const [transaction, setTransaction] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [cart] = useCart();
    const totalPrice = cart.reduce( ( total, item ) => total + item.price, 0 );
    console.log(totalPrice)

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then (res => {
            console.log(res.data.clientSecret);
            
            setClintSecret(res.data.clientSecret)
        })
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error)
        }
        else {
            console.log('payment success', paymentMethod)
        }

        //// colnfirm payment --------------
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clintSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'anonymous'
                }
            }
        })

        if(error){
            console.log('confirm error', error);
        }
        else{
            console.log('payment intent', paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                setTransaction(paymentIntent.id)
                console.log('transaction id', paymentIntent.id);
            }
        }

    }


    return (
        <>
            <form className=' w-[700px] h-screen flex flex-col justify-center' onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#fff',
                                    fontFamily: 'Arial, sans-serif',
                                    '::placeholder': {
                                        color: '#fff',
                                    },
                                },
                                invalid: {
                                    color: '#9e2141',
                                },
                            },
                        }}
                    >

                    </CardElement>
                <button type='submit' disabled={!stripe || !clintSecret} className="btn btn-accent w-20 mt-10">Pay</button>
                {transaction && <p className=' text-green-500 font-semibold'>Payment has been successfull. Your transaction id: {transaction}</p>}
            </form>
        </>
    )
}
