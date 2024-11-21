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
    // Add other currencies as needed
  };
}
 // Updated to use public environment variable

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1><button className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
      Coin Market CSR-main
      </button>
      <a className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75" href="#" title="hi">
      </a></h1>
      <br />
      <Button variant="secondary" size="lg">
        BTC: {data?.rates?.BTC?.toFixed(2) ?? "N/A"}
      </Button>
      <br />
      <Button variant="ghost" size="lg">
        BNB: {data?.rates?.BNB?.toFixed(2) ?? "N/A"}
      </Button>
      <br />
      <Button variant="link" size="lg">
        ETH: {data?.rates?.ETH?.toFixed(2) ?? "N/A"}
      </Button>
      <br />
      <Button variant="link" size="lg">
        ADA: {data?.rates?.ADA?.toFixed(2) ?? "N/A"}
      </Button>
     <br />
      <Button variant="link" size="lg">
        XPR: {data?.rates?.XPR?.toFixed(2) ?? "N/A"}
      </Button>
      <Link href="/">
        <Button >
          Go Back Home
        </Button>
      </Link>
    

    </>
  );
}
