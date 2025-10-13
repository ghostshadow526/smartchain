'use client';

import { useState, useEffect } from 'react';
import CryptoPriceCard from './CryptoPriceCard';
import { Skeleton } from './ui/skeleton';
import type { CryptoPriceResponse } from '@/lib/types';

const COIN_IDS = 'bitcoin,ethereum,dogecoin,cardano,solana,ripple,polkadot,chainlink,litecoin,bitcoin-cash,stellar,binancecoin,tether,usd-coin';

export default function LivePrices() {
  const [prices, setPrices] = useState<CryptoPriceResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchPrices = async () => {
    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${COIN_IDS}&vs_currencies=usd`);
      if (!res.ok) {
        throw new Error('Failed to fetch prices');
      }
      const data: CryptoPriceResponse = await res.json();
      setPrices(data);
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

  if (!prices) {
    return <div className="text-center text-destructive">Failed to load prices. Please try again later.</div>;
  }

  return (
    <div id="prices" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Object.entries(prices).map(([coin, data]) => {
        const fullPrice = data.usd;
        const halfPrice = (fullPrice / 2).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
        return (
          <CryptoPriceCard
            key={coin}
            coinName={coin}
            actualPrice={fullPrice}
            displayedPrice={halfPrice}
          />
        );
      })}
    </div>
  );
}
