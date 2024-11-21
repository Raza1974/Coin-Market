import { Button } from "@/app/components/ui/button";
import Link from "next/link";

interface CoinLayerResponse {
  success: boolean;
  timestamp: number;
  target: string;
  rates: {
    [currency: string]: number;
  };
}

export default async function CoinMarketSSR2() {
  const API_KEY = "ac1b737a30fffa42ead92558b389096d";

  const response = await fetch(
    `http://api.coinlayer.com/live?access_key=${API_KEY}`,
    { cache: "no-store" } // Ensures fresh data on every request
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const convertedData: CoinLayerResponse = await response.json();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          <button className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
            Coin Market SSR-2
          </button>
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.entries(convertedData?.rates || {}).map(([coin, rate]) => (
            <div
              key={coin}
              className="flex flex-col justify-center items-center bg-gradient-to-r from-indigo-400 to-purple-400 text-white rounded-lg p-4 shadow-md"
            >
              <span className="font-semibold text-lg">{coin}</span>
              <span className="text-xl font-bold">
                {rate?.toFixed(2) ?? "N/A"}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/">
            <Button
              className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg"
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
