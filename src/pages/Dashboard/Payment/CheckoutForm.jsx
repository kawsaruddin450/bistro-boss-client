import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');

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
                <button className="btn bg-[#D1A054] btn-sm mt-5 text-white hover:bg-[#D1A054]" type="submit" disabled={!stripe}>
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