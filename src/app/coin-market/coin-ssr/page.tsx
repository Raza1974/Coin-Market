import { Button } from "@/app/components/ui/button";
import Link from "next/link";
export default async function CoinMarketSSR() {
   const API_KEY = process.env.NEXT_PUBLIC_COIN_LAYER_API_KEY; // Updated to use public environment variable

  const response = await fetch(
    `https://api.coinlayer.com/live?access_key=${API_KEY}`,
    {
      cache: "no-store", // Ensures fresh data
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return (
    <>
      <h1><button className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white">
      Coin Market SSR
      </button>
      <a className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75" href="#" title="hi">
      </a></h1>
      <br />
      <Button variant="secondary" size="lg">
        BTC: {data?.rates?.BTC ?? "N/A"}
      </Button>
      <br />
      <Button variant="ghost" size="lg">
        BNB: {data?.rates?.BNB ?? "N/A"}
      </Button>
      <br />
      <Button variant="link" size="lg">
       ETH: {data?.rates?.ETH ?? "N/A"}
      </Button>
      <br />
      <Button variant="link" size="lg">
       ADA: {data?.rates?.ADA ?? "N/A"}
      </Button>
      <br />
      <Button variant="link" size="lg">
       XPR: {data?.rates?.XPR ?? "N/A"}
      </Button>
      <Link href="/">
        <Button >
          Go Back Home
        </Button>
      </Link>
    </>
  );
}
