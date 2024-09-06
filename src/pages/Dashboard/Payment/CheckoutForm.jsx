import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const CheckoutForm = ({totalPrice}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const token = localStorage.getItem('access-token');
    const {user} = useContext(AuthContext);

    useEffect(()=> {
        fetch(`http://localhost:8000/create-payment-intent`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${token}`
            },
            body: JSON.stringify({price: totalPrice})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setClientSecret(data.clientSecret);
        })
    },[token, totalPrice])

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
            card,
        })
        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('');
            console.log('payment method:', paymentMethod);
        }
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: card,
                billing_details: {
                    name: user?.displayName || "unknown",
                    email: user?.email || "annonymus",
                }
            }
        });
        if(confirmError){
            setCardError(confirmError);
        }
        console.log(paymentIntent);
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="my-16">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn bg-[#D1A054] btn-sm mt-5 text-white hover:bg-[#D1A054]" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-600 mt-5">{cardError}</p>
            }
        </>
    );
};

export default CheckoutForm;