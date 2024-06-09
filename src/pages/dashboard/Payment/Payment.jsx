/* eslint-disable react/prop-types */
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const Payment = ({test}) => {
    const {price} =test; 
    console.log(price)
    return (
        <div>
            <div>
                <Elements stripe={stripePromise} >
                    <CheckoutForm test={test}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;