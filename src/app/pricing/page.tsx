"use client";

import { useState } from "react";
import PageHeader from "@/components/header";
import styles from "@/styles";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "@/components/checkout";
import { convertToSubCurrency } from "@/lib/utils";
import Link from "next/link";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

interface PaymentItem {
  id: number;
  title: string;
  price: number;
  term: string;
  description: string;
  isCustom: boolean;
}

const items: PaymentItem[] = [
  {
    id: 1,
    title: "Discovery session",
    price: 500,
    term: "One off",
    description:
      "60 – 90 min strategy consultation on partnerships, licensing, or GTM",
    isCustom: false,
  },
  {
    id: 2,
    title: "Growth Advisory",
    price: 2500,
    term: "Per month",
    description: "Monthly consulting for scaling fintechs and PSPs",
    isCustom: false,
  },
  {
    id: 3,
    title: "Expansion as a Service",
    price: 5000,
    term: "Per project",
    description: "End-to-end market entry & partner acquisition",
    isCustom: false,
  },
  {
    id: 4,
    title: "Custom Retainer",
    price: 0,
    term: "POA (Price on Application)",
    description: "Dedicated strategic advisory, compliance, or FX support",
    isCustom: true,
  },
];

export default function PricingPage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PaymentItem | null>(null);
  const [pay, setPay] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleGetStarted = (item: PaymentItem) => {
    setSelectedItem(item);
    setIsSheetOpen(true);
  };

  const handleSheetOpenChange = (open: boolean) => {
    setIsSheetOpen(open);
    if (!open) {
      setPay(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#000010]">
      <PageHeader
        title="Pricing"
        description="At Paypers Partners Limited, we connect global fintech innovation with local market execution. From compliance frameworks and licensing to merchant acquisition and FX advisory, we enable sustainable growth across regulated markets."
      />

      <div className={`${styles.boxWidth} mx-auto bg-[#000010]`}>
        <div className="px-6 md:px-0 py-12 md:py-20 grid md:grid-cols-4 gap-12">
          {items.map((item, index) => (
            <div key={`payment-item-${index}`}>
              <div className="p-2 border-b border-white/60">
                <h1 className="text-white font-bold text-lg">{item.title}</h1>
              </div>

              <div className="mt-4">
                <h1 className="font-bold text-3xl md:text-5xl text-white">
                  {item.isCustom ? "POA" : `£${item.price}`}
                </h1>
                <p className="text-white/70 text-sm mt-2">{item.term}</p>
                <div className="flex flex-row items-start gap-x-2 mt-4">
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM9.6875 5.625C9.87292 5.625 10.0542 5.67998 10.2084 5.783C10.3625 5.88601 10.4827 6.03243 10.5536 6.20373C10.6246 6.37504 10.6432 6.56354 10.607 6.7454C10.5708 6.92725 10.4815 7.0943 10.3504 7.22541C10.2193 7.35652 10.0523 7.44581 9.8704 7.48199C9.68854 7.51816 9.50004 7.49959 9.32874 7.42864C9.15743 7.35768 9.01101 7.23752 8.908 7.08335C8.80499 6.92918 8.75 6.74792 8.75 6.5625C8.75 6.31386 8.84878 6.0754 9.02459 5.89959C9.20041 5.72377 9.43886 5.625 9.6875 5.625ZM10.625 14.375C10.2935 14.375 9.97554 14.2433 9.74112 14.0089C9.5067 13.7745 9.375 13.4565 9.375 13.125V10C9.20924 10 9.05027 9.93415 8.93306 9.81694C8.81585 9.69973 8.75 9.54076 8.75 9.375C8.75 9.20924 8.81585 9.05027 8.93306 8.93306C9.05027 8.81585 9.20924 8.75 9.375 8.75C9.70652 8.75 10.0245 8.8817 10.2589 9.11612C10.4933 9.35054 10.625 9.66848 10.625 10V13.125C10.7908 13.125 10.9497 13.1908 11.0669 13.3081C11.1842 13.4253 11.25 13.5842 11.25 13.75C11.25 13.9158 11.1842 14.0747 11.0669 14.1919C10.9497 14.3092 10.7908 14.375 10.625 14.375Z"
                        fill="#ABABAB"
                      />
                    </svg>
                  </div>
                  <p className=" text-white">{item.description}</p>
                </div>

                <button
                  onClick={() => handleGetStarted(item)}
                  className="bg-white text-[#0075C4] rounded-full flex w-full py-3 items-center justify-center font-bold mt-4 cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checkout Sheet */}
      <Sheet open={isSheetOpen} onOpenChange={handleSheetOpenChange}>
        <SheetContent className="bg-black">
          <SheetHeader>
            <SheetTitle className="text-white font-bold text-lg">
              Checkout
            </SheetTitle>
          </SheetHeader>
          {pay ? (
            <div className="overflow-y-scroll">
              {selectedItem && (
                <Elements
                  stripe={stripePromise}
                  options={{
                    mode: "payment",
                    amount: convertToSubCurrency(selectedItem!.price),
                    currency: "gbp",
                  }}
                >
                  <CheckoutPage
                    amount={selectedItem!.price}
                    customerInfo={formData}
                  />
                </Elements>
              )}
            </div>
          ) : (
            <div className="mt-6 px-4 overflow-y-scroll">
              {selectedItem && (
                <div>
                  <div className="pb-4 border-b border-white/70">
                    <p className="text-white font-bold">{selectedItem.title}</p>
                  </div>

                  <div className="mt-6">
                    <h1 className="font-bold text-3xl md:text-5xl text-white">
                      ${selectedItem.price}
                    </h1>
                    <p className="text-white/70 text-sm mt-2">
                      {selectedItem.term}
                    </p>
                    <div className="flex flex-row items-start gap-x-2 mt-4 pb-4 border-b border-white/70">
                      <div>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM9.6875 5.625C9.87292 5.625 10.0542 5.67998 10.2084 5.783C10.3625 5.88601 10.4827 6.03243 10.5536 6.20373C10.6246 6.37504 10.6432 6.56354 10.607 6.7454C10.5708 6.92725 10.4815 7.0943 10.3504 7.22541C10.2193 7.35652 10.0523 7.44581 9.8704 7.48199C9.68854 7.51816 9.50004 7.49959 9.32874 7.42864C9.15743 7.35768 9.01101 7.23752 8.908 7.08335C8.80499 6.92918 8.75 6.74792 8.75 6.5625C8.75 6.31386 8.84878 6.0754 9.02459 5.89959C9.20041 5.72377 9.43886 5.625 9.6875 5.625ZM10.625 14.375C10.2935 14.375 9.97554 14.2433 9.74112 14.0089C9.5067 13.7745 9.375 13.4565 9.375 13.125V10C9.20924 10 9.05027 9.93415 8.93306 9.81694C8.81585 9.69973 8.75 9.54076 8.75 9.375C8.75 9.20924 8.81585 9.05027 8.93306 8.93306C9.05027 8.81585 9.20924 8.75 9.375 8.75C9.70652 8.75 10.0245 8.8817 10.2589 9.11612C10.4933 9.35054 10.625 9.66848 10.625 10V13.125C10.7908 13.125 10.9497 13.1908 11.0669 13.3081C11.1842 13.4253 11.25 13.5842 11.25 13.75C11.25 13.9158 11.1842 14.0747 11.0669 14.1919C10.9497 14.3092 10.7908 14.375 10.625 14.375Z"
                            fill="#ABABAB"
                          />
                        </svg>
                      </div>
                      <p className=" text-white">{selectedItem.description}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <form>
                      <h1 className="text-white pb-4">Personal information</h1>

                      <div className="bg-[#101010] w-full p-2 mb-4">
                        <p className="text-white font-semibold">
                          Your full name
                        </p>
                        <input
                          type="text"
                          className="w-full py-2 outline-none text-white"
                          placeholder="Eg. John Doe"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="bg-[#101010] w-full p-2 mb-4">
                        <p className="text-white font-semibold">
                          Email address
                        </p>
                        <input
                          type="text"
                          className="w-full py-2 outline-none text-white"
                          placeholder="Eg. ***@gmail.com"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="bg-[#101010] w-full p-2 mb-4">
                        <p className="text-white font-semibold">
                          Your phone number
                        </p>
                        <input
                          type="text"
                          className="w-full py-2 outline-none text-white"
                          placeholder="*********"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      {selectedItem?.isCustom ? (
                        <div className="text-center">
                          <p className="text-white mb-4">
                            Please contact us to discuss your custom
                            requirements and receive a tailored proposal.
                          </p>
                          <Link
                            href="/contact"
                            className="inline-block bg-[#0075C4] text-white py-2 px-6 rounded-full font-bold hover:bg-[#0066b0] transition-colors duration-300"
                          >
                            Contact Us for Custom Pricing
                          </Link>
                        </div>
                      ) : (
                        <button
                          type="submit"
                          className="text-[#0075C4] font-bold bg-white py-2 w-full rounded-full cursor-pointer"
                          onClick={() => setPay(true)}
                        >
                          Continue to Payment
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
