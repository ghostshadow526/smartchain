'use client';

import { useState, useEffect } from 'react';
import CryptoPriceCard from './CryptoPriceCard';
import { Skeleton } from './ui/skeleton';
import type { CoinDetails } from '@/lib/types';

const COIN_IDS = 'bitcoin,ethereum,dogecoin,cardano,solana,ripple,polkadot,chainlink,litecoin,bitcoin-cash,stellar,binancecoin,tether,usd-coin';

export default function LivePrices() {
  const [coins, setCoins] = useState<CoinDetails[] | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchPrices = async () => {
    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${COIN_IDS}`);
      if (!res.ok) {
        throw new Error('Failed to fetch prices');
      }
      const data: CoinDetails[] = await res.json();
      setCoins(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 30000); // update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div id="prices" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="p-6 border rounded-lg bg-card space-y-4">
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-8 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (!coins) {
    return <div className="text-center text-destructive">Failed to load prices. Please try again later.</div>;
  }

  return (
    <div id="prices" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {coins.map((coin) => {
        const fullPrice = coin.current_price;
        const halfPrice = (fullPrice / 2).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
        return (
          <CryptoPriceCard
            key={coin.id}
            coinName={coin.name}
            coinImage={coin.image}
            actualPrice={fullPrice}
            displayedPrice={halfPrice}
          />
        );
      })}
    </div>
  );
}
