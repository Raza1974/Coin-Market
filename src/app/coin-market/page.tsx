"use client";
import { useState, useEffect } from "react";

interface CoinData {
  BTC: number;
  ETH: number;
  ADA: number;
  XRP: number;
  BNB: number;
}

export default function CoinMarket() {
  const API_KEY = "0ef3c866933e42e038801e9db36bd9e6"; // Place your actual API key here
  const [data, setData] = useState<CoinData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true); // Set loading to true when fetching data
    setError(null); // Clear any previous error
    try {
      const response = await fetch(`https://api.coinlayer.com/live?access_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonConverted = await response.json();
      setData(jsonConverted.rates);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load data");
    } finally {
      setLoading(false); // Set loading to false when fetch is complete
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen text-white py-10">
      <h1 className="text-3xl font-bold mb-5">Coin Market Prices</h1>
      {error ? (
        <p className="bg-red-600 text-white p-3 rounded-md">{error}</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 text-center">
          <p className="bg-blue-600 p-3 rounded-md">BTC: {data?.BTC ?? "Loading..."}</p>
          <p className="bg-green-600 p-3 rounded-md">ETH: {data?.ETH ?? "Loading..."}</p>
          <p className="bg-indigo-600 p-3 rounded-md">ADA: {data?.ADA ?? "Loading..."}</p>
          <p className="bg-yellow-600 p-3 rounded-md">XRP: {data?.XRP ?? "Loading..."}</p>
          <p className="bg-pink-600 p-3 rounded-md">BNB: {data?.BNB ?? "Loading..."}</p>
        </div>
      )}
      <button
        onClick={fetchData}
        disabled={loading} // Disable button while loading
        className={`mt-5 font-bold py-2 px-4 rounded-lg shadow-lg transition-colors duration-200 ${
          loading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-700 hover:bg-blue-900 text-white"
        }`}
      >
        {loading ? "Refreshing..." : "Refresh Prices"}
      </button>
    </div>
  );
}
