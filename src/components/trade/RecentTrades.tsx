'use client';

import { useState, useEffect } from 'react';
import type { Trade } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '../ui/scroll-area';

let tradeId = 0;
const generateTrade = (basePrice: number): Trade => {
  const type = Math.random() > 0.5 ? 'buy' : 'sell';
  const price = basePrice + (Math.random() - 0.5) * 50;
  const amount = Math.random() * 0.5;
  const time = new Date().toLocaleTimeString();
  tradeId += 1;
  return { id: tradeId, price, amount, time, type };
};

export default function RecentTrades() {
  const [trades, setTrades] = useState<Trade[]>([]);

  useEffect(() => {
    // Initial data
    const initialTrades = Array.from({ length: 30 }, () => generateTrade(60005));
    setTrades(initialTrades);

    const interval = setInterval(() => {
      setTrades(prev => [generateTrade(60005), ...prev.slice(0, 49)]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="flex-grow h-0 flex flex-col">
        <h3 className="text-sm font-semibold p-4 border-b">Recent Trades</h3>
        <ScrollArea className="flex-grow">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-xs">Time</TableHead>
                        <TableHead className="text-xs">Price (USD)</TableHead>
                        <TableHead className="text-right text-xs">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {trades.map((trade) => (
                        <TableRow key={trade.id}>
                            <TableCell className="text-xs py-1 px-4">{trade.time}</TableCell>
                            <TableCell className={`text-xs py-1 px-4 ${trade.type === 'buy' ? 'text-green-500' : 'text-red-500'}`}>
                                {trade.price.toFixed(2)}
                            </TableCell>
                            <TableCell className="text-right text-xs py-1 px-4">{trade.amount.toFixed(4)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </ScrollArea>
    </Card>
  );
}
