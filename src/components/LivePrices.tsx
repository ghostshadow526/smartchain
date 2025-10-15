'use client';

import { useState, useEffect } from 'react';
import CryptoPriceCard from './CryptoPriceCard';
import { Skeleton } from './ui/skeleton';
import type { CoinDetails } from '@/lib/types';
import { Input } from './ui/input';

export default function LivePrices() {
  const [allCoins, setAllCoins] = useState<CoinDetails[] | null>(null);
  const [filteredCoins, setFilteredCoins] = useState<CoinDetails[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchPrices = async () => {
    setError(null);
    try {
      // Fetching more coins, you can increase the per_page limit
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
      if (!res.ok) {
        throw new Error('Failed to fetch prices');
      }
      const data: CoinDetails[] = await res.json();
      setAllCoins(data);
    } catch (error) {
      console.error(error);
      setError('Failed to load prices. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // update every 60 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (allCoins) {
      const results = allCoins.filter(coin => 
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCoins(results);
    }
  }, [searchTerm, allCoins]);

  if (loading) {
    return (
      <div id="prices" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="p-6 border rounded-lg bg-card space-y-4">
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-8 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-destructive">{error}</div>;
  }
  
  const coinsToDisplay = filteredCoins || allCoins?.slice(0, 12) || [];

  return (
    <div className="space-y-6">
        <div className="max-w-md mx-auto">
            <Input 
                type="text"
                placeholder="Search for a cryptocurrency..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
            />
        </div>
        <div id="prices" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {coinsToDisplay.map((coin) => {
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
    </div>
  );
}
