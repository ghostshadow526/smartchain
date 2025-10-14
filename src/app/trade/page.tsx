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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  const { user, userData, loading } = useAuth();
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
    <div className="py-4 h-full md:h-[calc(100vh-8rem)]">
      {/* Desktop View */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-[300px_1fr_300px] gap-2 h-full">
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

        <div className="flex flex-col gap-2 h-full">
            <BuySellForm currentPrice={currentPrice} coinId={currentPair} user={userData} />
            <RecentTrades />
        </div>
      </div>
      
      {/* Mobile View */}
      <div className="lg:hidden flex flex-col gap-2 h-full">
        <Card>
            <CardContent className="p-4 space-y-4">
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
                <div className={`text-3xl font-bold transition-colors duration-300 ${priceColor}`}>
                    {currentPrice ? `$${currentPrice.toLocaleString()}` : <Skeleton className="h-8 w-32" />}
                </div>
            </CardContent>
        </Card>
        <Tabs defaultValue="chart" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="chart">Chart</TabsTrigger>
            <TabsTrigger value="trade">Trade</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="chart">
            <Card>
                <div className="h-[400px] w-full">
                    <TradingChart coinId={currentPair} />
                </div>
            </Card>
          </TabsContent>
          <TabsContent value="trade">
            <BuySellForm currentPrice={currentPrice} coinId={currentPair} user={userData} />
          </TabsContent>
          <TabsContent value="orders">
             <Card className="h-[400px]">
                <OrderBook coinId={currentPair} />
             </Card>
          </TabsContent>
          <TabsContent value="history">
             <Card className="h-[400px]">
                <RecentTrades />
             </Card>
          </TabsContent>
        </Tabs>
      </div>

    </div>
  );
}
