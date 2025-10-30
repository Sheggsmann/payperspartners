"use client";

import Link from "next/link";

import { useSearchParams } from "next/navigation";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();

  const amount = searchParams.get("amount");

  console.log(amount);

  return (
    <main className="max-w-6xl min-h-[84vh] mx-auto p-10 text-white bg-black text-center flex items-center justify-center">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Thank You!</h1>
        <h2 className="text-2xl">You successfully sent</h2>
        <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
          £{amount}
        </div>

        <div className="mt-4">
          <Link href="/" className="text-white underline">
            go back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
