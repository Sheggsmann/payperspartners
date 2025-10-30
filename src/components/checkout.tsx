"use client";

import { convertToSubCurrency } from "@/lib/utils";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface CustomerInfo {
  fullName: string;
  email: string;
  phone: string;
}

const CheckoutPage = ({
  amount,
  customerInfo,
}: {
  amount: number;
  customerInfo: CustomerInfo;
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: convertToSubCurrency(amount),
        customerInfo,
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount, customerInfo]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) return;

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
    }

    setLoading(false);
  };

  if (!elements || !clientSecret || !amount) {
    return (
      <div className="flex h-20 w-full items-center justify-center">
        <Loader2 size={20} color="white" className="animate-spin" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-2 bg-white">
      <div className="mb-4 p-3 bg-gray-100 rounded">
        <h3 className="font-semibold text-gray-800 mb-2">
          Customer Information
        </h3>
        <p className="text-sm text-gray-600">{customerInfo.fullName}</p>
        <p className="text-sm text-gray-600">{customerInfo.email}</p>
        <p className="text-sm text-gray-600">{customerInfo.phone}</p>
      </div>

      {clientSecret && (
        <PaymentElement
          options={{
            defaultValues: {
              billingDetails: {
                name: customerInfo.fullName,
                email: customerInfo.email,
                phone: customerInfo.phone,
              },
            },
          }}
        />
      )}
      {errorMessage && (
        <div className="text-red-500 text-sm my-2">{errorMessage}</div>
      )}
      <button
        disabled={!stripe || loading}
        className="bg-black w-full p-3 rounded-md font-bold text-white disabled:opacity-50 disabled:animate-pulse"
      >
        {!loading ? `Pay £${amount}` : "Processing..."}
      </button>
    </form>
  );
};

export default CheckoutPage;
