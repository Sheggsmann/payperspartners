import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`);

export async function POST(request: NextRequest) {
  try {
    const { amount, customerInfo } = await request.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "gbp",
      automatic_payment_methods: { enabled: true },
      shipping: customerInfo
        ? {
            name: customerInfo?.fullName,
            phone: customerInfo?.phone,
            address: {
              line1: "N/A",
              city: "N/A",
              country: "GB",
              postal_code: "N/A",
            },
          }
        : undefined,
      metadata: {
        customer_name: customerInfo?.fullName || "",
        customer_email: customerInfo?.email || "",
        customer_phone: customerInfo?.phone || "",
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
