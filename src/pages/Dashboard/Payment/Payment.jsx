import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);
const Payment = () => {
    return (
        <div className='w-full max-w-screen-md mx-auto my-12'>
            <Helmet>
                <title>Payment - Bistro Boss Resturant</title>
            </Helmet>
            <SectionTitle heading="Payment" subHeading="Please Provide"></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;