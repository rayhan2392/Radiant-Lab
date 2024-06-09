/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({ test }) => {
  const {user}=useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { price } = test;

  const axiosSecure = useAxiosSecure();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price: price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, price]);

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
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: test.email,
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log(paymentIntent.id);
        setTransactionId(paymentIntent.id);
        const testInfo = {
          name: test.test_name,
          date: test.date,
          details: test.details,
          status: "pending",
          image: test.image,
          price: test.price,
          email: user.email,
          Bill:'paid',
          transactionId:paymentIntent.id
        };
        const res =await  axiosSecure.post("/bookings", testInfo)
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            title: "Your transaction is successful",
            text: "You are redirected to home page",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
          navigate('/')
        }
        

      }
    }
  };


  const handleBookTest = async() => {
    // navigate('/')
   if(transactionId){
    const testInfo = {
      name: test.test_name,
      date: test.date,
      details: test.details,
      status: "pending",
      image: test.image,
      price: test.price,
      email: user.email,
      Bill:'paid',
      transactionId:transactionId
    };
    console.log(testInfo);
    //post booking data to the server
     const res =await  axiosSecure.post("/bookings", testInfo)
     console.log(res.data)
      // .then((res) => console.log(res.data));
   }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
         onClick={handleBookTest}
          className="btn"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-700">{error}</p>
      </form>
    </div>
  );
};

export default CheckoutForm;
