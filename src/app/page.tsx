"use client";
import CoinMarket from "./coin-market/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to the Coin Market</h1>
      <p className="mb-5 text-lg text-gray-300">Check the latest coin market prices</p>
      <div className="w-full max-w-md p-5 bg-gray-900 rounded-lg shadow-lg">
        <CoinMarket />
      </div>
    </div>
  );
}
