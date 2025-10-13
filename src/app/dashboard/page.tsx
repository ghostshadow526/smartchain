'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Copy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const COINS = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', address: 'bc1qlactml4p0rqkma460hufayumpd39s79pexskdd' },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', address: '0x494Cc65Cc3aB9C246511B5A3360d6745Afb36fef' },
  { id: 'tether', name: 'USDT', symbol: 'USDT', address: '0x494Cc65Cc3aB9C246511B5A3360d6745Afb36fef' },
  { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE' },
  { id: 'cardano', name: 'Cardano', symbol: 'ADA' },
  { id: 'solana', name: 'Solana', symbol: 'SOL' },
  { id: 'ripple', name: 'XRP', symbol: 'XRP' },
];

export default function DashboardPage() {
  const { user, userData, loading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const copyToClipboard = (text: string, coin: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Address Copied',
      description: `${coin} address has been copied to your clipboard.`,
    });
  };

  if (loading || !user) {
    return (
      <div className="space-y-6 py-8">
        <Skeleton className="h-24 w-1/3" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }
  
  const portfolioTotal = userData?.portfolio?.reduce((acc: number, coin: any) => acc + (coin.amount * coin.price), 0) || 0;

  return (
    <div className="py-8 space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome, {user.email}</h1>
          <p className="text-muted-foreground">Here's your crypto dashboard overview.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Buy Crypto</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Deposit Crypto</DialogTitle>
              <DialogDescription>
                You can deposit any crypto of your choice and convert to the one you want to trade.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              {COINS.filter(c => c.address).map(coin => (
                <div key={coin.id} className="space-y-2">
                  <label className="text-sm font-medium">{coin.name} ({coin.symbol}) Address</label>
                  <div className="flex items-center space-x-2">
                    <Input readOnly value={coin.address} className="truncate" />
                    <Button variant="outline" size="icon" onClick={() => copyToClipboard(coin.address!, coin.name)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Total Balance</CardTitle>
          <CardDescription>The total value of all your crypto assets.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">${portfolioTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Crypto Assets</CardTitle>
          <CardDescription>A list of cryptocurrencies in your portfolio.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Asset</TableHead>
                <TableHead>Symbol</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead className="text-right">Value (USD)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(userData?.portfolio && userData.portfolio.length > 0) ? (
                userData.portfolio.map((coin: any) => (
                  <TableRow key={coin.id}>
                    <TableCell className="font-medium">{coin.name}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{coin.symbol.toUpperCase()}</Badge>
                    </TableCell>
                    <TableCell>{coin.amount.toFixed(6)}</TableCell>
                    <TableCell className="text-right">${(coin.amount * coin.price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                  </TableRow>
                ))
              ) : (
                COINS.map(coin => (
                    <TableRow key={coin.id}>
                        <TableCell className="font-medium">{coin.name}</TableCell>
                        <TableCell>
                           <Badge variant="secondary">{coin.symbol.toUpperCase()}</Badge>
                        </TableCell>
                        <TableCell>0.000000</TableCell>
                        <TableCell className="text-right">$0.00</TableCell>
                    </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
