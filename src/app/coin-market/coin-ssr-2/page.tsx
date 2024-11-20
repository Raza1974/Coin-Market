import { Button } from "@/app/components/ui/button";
import Link from "next/link";
export default async function CoinMarketSSR2() {
  
  
  const API_KEY = process.env.NEXT_PUBLIC_COIN_LAYER_API_KEY; // Updated to use public environment variable

    const response = await fetch(
    `http://api.coinlayer.com/live?access_key=${API_KEY}`,
    {
      cache: "no-store", // Ensures fresh data on every request
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }


const convertedData: CoinLayerResponse = await response.json();

interface CoinLayerResponse {
  success: boolean;
  timestamp: number;
  target: string;
  rates: {
    [currency: string]: number;
  };
}

  return (
    <>
      <h1><button className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
      Coin Market SSR-2
      </button>
      <a className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75" href="#" title="hi">
      </a></h1>
      <br />
      <Button variant="secondary" size="lg">
        BTC: {convertedData?.rates?.BTC ?? "Loading..."}
      </Button>
      <br />
      <Button variant="ghost" size="lg">
        BNB: {convertedData?.rates?.BNB ?? "Loading..."}
      </Button>
      <br />
      <Button variant="link" size="lg">
        ETH: {convertedData?.rates?.ETH ?? "Loading..."}
      </Button>
      <br />
      <Button variant="link" size="lg">
        ADA: {convertedData?.rates?.ADA ?? "Loading..."}
      </Button>
      <br />
      <Button variant="link" size="lg">
        XPR: {convertedData?.rates?.XPR ?? "Loading..."}
      </Button>
      <Link href="/">
        <Button >
          Go Back Home
        </Button>
      </Link>
    </>
  );
}
