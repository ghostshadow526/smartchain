'use client';

import { useState, useEffect } from 'react';
import type { Order } from '@/lib/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';

const generateOrder = (basePrice: number, isBid: boolean): Order => {
  const price = basePrice + (Math.random() - 0.5) * (basePrice * 0.01);
  const amount = Math.random() * 5;
  return {
    price,
    amount,
    total: price * amount,
  };
};

const getBasePrice = (coinId: string) => {
    switch (coinId) {
        case 'bitcoin':
            return 60000;
        case 'ethereum':
            return 3000;
        case 'dogecoin':
            return 0.15;
        default:
            return 60000;
    }
}

export default function OrderBook({ coinId }: { coinId: string }) {
  const [bids, setBids] = useState<Order[]>([]);
  const [asks, setAsks] = useState<Order[]>([]);
  const basePrice = getBasePrice(coinId);
  const coinSymbol = coinId === 'bitcoin' ? 'BTC' : coinId === 'ethereum' ? 'ETH' : 'DOGE';
  
  useEffect(() => {
    const newBasePrice = getBasePrice(coinId);
    const initialBids = Array.from({ length: 20 }, () => generateOrder(newBasePrice, true)).sort((a, b) => b.price - a.price);
    const initialAsks = Array.from({ length: 20 }, () => generateOrder(newBasePrice + (newBasePrice * 0.001) , false)).sort((a, b) => a.price - b.price);
    setBids(initialBids);
    setAsks(initialAsks);

    const interval = setInterval(() => {
        const currentBasePrice = getBasePrice(coinId);
        setBids(prev => [...prev.slice(1), generateOrder(currentBasePrice, true)].sort((a, b) => b.price - a.price));
        setAsks(prev => [...prev.slice(1), generateOrder(currentBasePrice + (currentBasePrice * 0.001), false)].sort((a, b) => a.price - b.price));
    }, 2000);

    return () => clearInterval(interval);
  }, [coinId]);

  return (
    <div className="flex-grow h-0 flex flex-col">
        <h3 className="text-sm font-semibold p-4 border-b">Order Book</h3>
        <ScrollArea className="flex-grow">
            <div className="grid grid-cols-1">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-xs">Price (USD)</TableHead>
                            <TableHead className="text-xs">Amount ({coinSymbol})</TableHead>
                            <TableHead className="text-right text-xs">Total (USD)</TableHead>
                        </TableRow>
                    </TableHeader>
                </Table>
                <div className="overflow-y-auto">
                    <Table>
                        <TableBody>
                            {asks.slice().reverse().map((order, index) => (
                                <TableRow key={index} className="relative">
                                    <TableCell className="text-red-500 text-xs py-1 px-4">{order.price.toFixed(2)}</TableCell>
                                    <TableCell className="text-xs py-1 px-4">{order.amount.toFixed(4)}</TableCell>
                                    <TableCell className="text-right text-xs py-1 px-4">{order.total.toFixed(2)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="py-2 px-4 border-t border-b text-lg font-bold">
                     {asks.length > 0 && bids.length > 0 ? (
                        <span>${((asks[0].price + bids[0].price) / 2).toFixed(2)}</span>
                    ) : null}
                </div>
                 <div className="overflow-y-auto">
                    <Table>
                        <TableBody>
                            {bids.map((order, index) => (
                                <TableRow key={index} className="relative">
                                    <TableCell className="text-green-500 text-xs py-1 px-4">{order.price.toFixed(2)}</TableCell>
                                    <TableCell className="text-xs py-1 px-4">{order.amount.toFixed(4)}</TableCell>
                                    <TableCell className="text-right text-xs py-1 px-4">{order.total.toFixed(2)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </ScrollArea>
    </div>
  );
}
