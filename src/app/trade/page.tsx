'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import TradingChart from '@/components/trade/TradingChart';
import OrderBook from '@/components/trade/OrderBook';
import BuySellForm from '@/components/trade/BuySellForm';
import RecentTrades from '@/components/trade/RecentTrades';
import { Skeleton } from '@/components/ui/skeleton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from '@/components/ui/card';

const getBasePrice = (coinId: string) => {
    switch (coinId) {
        case 'bitcoin': return 60000;
        case 'ethereum': return 3000;
        case 'dogecoin': return 0.15;
        default: return 60000;
    }
};

const generateMockPrice = (coinId: string) => {
    const basePrice = getBasePrice(coinId);
    return basePrice + (Math.random() - 0.5) * (basePrice * 0.01);
}

export default function TradePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [currentPair, setCurrentPair] = useState('bitcoin');
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);
  const [priceChange, setPriceChange] = useState<number>(0);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);
  
  useEffect(() => {
    const updatePrice = () => {
      const newPrice = generateMockPrice(currentPair);
      setCurrentPrice(prevPrice => {
        if (prevPrice !== null) {
          setPriceChange(newPrice > prevPrice ? 1 : (newPrice < prevPrice ? -1 : 0));
        }
        return newPrice;
      });
    };
    
    updatePrice(); // Initial price
    const interval = setInterval(updatePrice, 2000); // Update price every 2 seconds
    return () => clearInterval(interval);
  }, [currentPair]);


  if (loading || !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="space-y-4 w-full p-4">
            <Skeleton className="h-12 w-full" />
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_300px] gap-4 h-[70vh]">
                <Skeleton className="h-full w-full" />
                <Skeleton className="h-full w-full" />
                <Skeleton className="h-full w-full" />
            </div>
        </div>
      </div>
    );
  }

  const priceColor = priceChange > 0 ? 'text-green-500' : priceChange < 0 ? 'text-red-500' : 'text-foreground';

  return (
    <div className="py-4 h-[calc(100vh-8rem)]">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_300px] gap-2 h-full">
        {/* Left Column */}
        <Card className="flex flex-col h-full overflow-hidden">
            <div className="p-4 border-b">
                <Select defaultValue={currentPair} onValueChange={setCurrentPair}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Pair" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="bitcoin">BTC/USD</SelectItem>
                        <SelectItem value="ethereum">ETH/USD</SelectItem>
                        <SelectItem value="dogecoin">DOGE/USD</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <OrderBook coinId={currentPair} />
        </Card>

        {/* Center Column */}
        <div className="flex flex-col gap-2 h-full">
            <Card>
                <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                        <div className={`text-3xl font-bold transition-colors duration-300 ${priceColor}`}>
                            {currentPrice ? `$${currentPrice.toLocaleString()}` : <Skeleton className="h-8 w-32" />}
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className="flex-grow h-0">
              <TradingChart coinId={currentPair} />
            </Card>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-2 h-full">
            <BuySellForm currentPrice={currentPrice} coinId={currentPair} />
            <RecentTrades />
        </div>
      </div>
    </div>
  );
}
