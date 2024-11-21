/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { Button } from "@/app/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";

interface CoinData {
  rates: {
    BTC: number;
    BNB: number;
    ETH: number;
    ADA: number;
    XPR: number;
    DOGE: number;
    SOL: number;
    DOT: number;
    LTC: number;
    AVAX: number;
    [key: string]: number; // To allow dynamic coin additions
  };
}

export default function CoinMarketCSR() {
  const API_KEY = "ac1b737a30fffa42ead92558b389096d";
  const [data, setData] = useState<CoinData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!API_KEY) {
      console.error("API Key is missing!");
      setError("API Key is missing!");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coinlayer.com/live?access_key=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result as CoinData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_KEY]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-blue-600 animate-pulse">
          Loading data, please wait...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-red-500">
          Error: {error}. Please try again later.
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Coin Market CSR
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {Object.entries(data?.rates || {}).map(([coin, rate]) => (
            <div
              key={coin}
              className="flex justify-between items-center bg-gradient-to-r from-blue-400 to-green-400 text-white rounded-lg p-4 shadow-md"
            >
              <span className="font-semibold">{coin}</span>
              <span className="text-lg font-bold">
                {rate?.toFixed(2) ?? "N/A"}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/">
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg"
              size="lg"
            >
              Go Back Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
