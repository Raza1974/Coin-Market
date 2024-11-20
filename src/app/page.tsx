"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to the Coin Market</h1>
      <p className="mb-5 text-lg text-gray-300">Check the latest coin market prices</p>
      <div className="w-full max-w-md p-5 bg-gray-900 rounded-lg shadow-lg flex flex-col items-center gap-4">
        <Link
          href="/coin-market/coin-csr"
          className="px-6 py-3 w-full text-center text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        >
          Go to Coin Market CSR
        </Link>
        <Link
          href="/coin-market/coin-isr"
          className="px-6 py-3 w-full text-center text-lg font-semibold bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
        >
          Go to Coin Market ISR
        </Link>
        <Link
          href="/coin-market/coin-ssg"
          className="px-6 py-3 w-full text-center text-lg font-semibold bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition"
        >
          Go to Coin Market SSG
        </Link>
        <Link
          href="/coin-market/coin-ssr"
          className="px-6 py-3 w-full text-center text-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
        >
          Go to Coin Market SSR
        </Link>
        <Link
          href="/coin-market/coin-ssr-2"
          className="px-6 py-3 w-full text-center text-lg font-semibold bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
        >
          Go to Coin Market SSR-2
        </Link>
      </div>
    </div>
  );
}
