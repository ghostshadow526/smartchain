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
import { Copy, Loader2, ShieldCheck, ShieldAlert } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { CryptoPriceResponse } from '@/lib/types';


const COINS_WITH_ADDRESSES = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', address: 'bc1qlactml4p0rqkma460hufayumpd39s79pexskdd' },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', address: '0x494Cc65Cc3aB9C246511B5A3360d6745Afb36fef' },
  { id: 'tether', name: 'USDT', symbol: 'USDT', address: '0x494Cc65Cc3aB9C246511B5A3360d6745Afb36fef' },
];

const ALL_COINS = 'bitcoin,ethereum,tether,dogecoin,cardano,solana,ripple,polkadot,chainlink,litecoin';


export default function DashboardPage() {
  const { user, userData, loading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [prices, setPrices] = useState<CryptoPriceResponse | null>(null);

  const [selectedCoin, setSelectedCoin] = useState('');
  const [isDepositing, setIsDepositing] = useState(false);
  const [depositAddress, setDepositAddress] = useState('');


  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);
  
  useEffect(() => {
    async function fetchPrices() {
        try {
            const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ALL_COINS}&vs_currencies=usd`);
            const data: CryptoPriceResponse = await res.json();
            setPrices(data);
        } catch (error) {
            console.error("Failed to fetch prices", error);
            // Don't show a toast for this, as it might be too noisy
        }
    }
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // every minute
    return () => clearInterval(interval);
  }, []);

  const handleDeposit = () => {
    if (!selectedCoin) {
        toast({
            title: 'No Coin Selected',
            description: 'Please select a cryptocurrency to deposit.',
            variant: 'destructive',
        });
        return;
    }
    setIsDepositing(true);
    setTimeout(() => {
        const coinData = COINS_WITH_ADDRESSES.find(c => c.id === selectedCoin);
        if (coinData) {
            setDepositAddress(coinData.address);
        }
        setIsDepositing(false);
    }, 3000);
  };

  const copyToClipboard = (text: string, coin: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Address Copied',
      description: `${coin} address has been copied to your clipboard.`,
    });
  };

  if (loading || !user || !userData) {
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
  
  const getPortfolioWithPrices = () => {
      if (!userData?.portfolio || !prices) return [];
      return userData.portfolio.map((coin: any) => ({
          ...coin,
          price: prices[coin.id]?.usd || 0,
      }));
  }

  const portfolioWithPrices = getPortfolioWithPrices();
  const portfolioTotal = portfolioWithPrices.reduce((acc: number, coin: any) => acc + (coin.amount * coin.price), 0);

  const getCoinPrice = (coinId: string) => prices?.[coinId]?.usd || 0;

  const KycStatus = () => {
    switch (userData.kycStatus) {
        case 'verified':
            return <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30"><ShieldCheck className="mr-1 h-3 w-3" />Verified</Badge>;
        case 'pending':
            return <Badge variant="secondary" className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30"><ShieldAlert className="mr-1 h-3 w-3" />Pending</Badge>;
        default:
            return <Badge variant="destructive"><ShieldAlert className="mr-1 h-3 w-3" />Not Verified</Badge>;
    }
  }

  return (
    <div className="py-8 space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome, {userData.username}</h1>
          <p className="text-muted-foreground">Here's your crypto dashboard overview.</p>
        </div>
        <Dialog onOpenChange={(open) => { if(!open) { setSelectedCoin(''); setDepositAddress(''); }}}>
          <DialogTrigger asChild>
            <Button>Buy Crypto</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Deposit Crypto</DialogTitle>
              <DialogDescription>
                You can deposit any crypto of your choice and convert to the one you want to trade.
              </DialogDescription>
            </DialogHeader>
             {!depositAddress ? (
                <div className="space-y-4 py-4">
                    <Select onValueChange={setSelectedCoin} value={selectedCoin}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select crypto to deposit" />
                        </SelectTrigger>
                        <SelectContent>
                            {COINS_WITH_ADDRESSES.map(c => <SelectItem key={c.id} value={c.id}>{c.name} ({c.symbol})</SelectItem>)}
                        </SelectContent>
                    </Select>
                    <Button onClick={handleDeposit} disabled={isDepositing || !selectedCoin} className="w-full">
                        {isDepositing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Get Deposit Address
                    </Button>
                </div>
            ) : (
                <Card className="mt-4 bg-card">
                    <CardContent className="p-4 space-y-3">
                        <div className="text-center font-medium">
                           Deposit {COINS_WITH_ADDRESSES.find(c => c.id === selectedCoin)?.name} Address
                        </div>
                         <div className="flex items-center space-x-2">
                            <Input readOnly value={depositAddress} className="truncate text-xs" />
                            <Button variant="outline" size="icon" onClick={() => copyToClipboard(depositAddress, COINS_WITH_ADDRESSES.find(c => c.id === selectedCoin)?.name || '')}>
                                <Copy className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1fr_350px]">
        <Card className="bg-white text-black">
          <CardHeader>
            <CardTitle className="text-muted-foreground font-medium">Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold">${portfolioTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Account Status</CardTitle>
                <CardDescription>Your KYC verification status.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                    <span>KYC Status</span>
                    <KycStatus />
                </div>
                {userData.kycStatus !== 'verified' && (
                    <Button className="w-full">Start KYC Verification</Button>
                )}
            </CardContent>
        </Card>
      </div>


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
                <TableHead>Current Price</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead className="text-right">Value (USD)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(portfolioWithPrices && portfolioWithPrices.length > 0) ? (
                portfolioWithPrices.map((coin: any) => (
                  <TableRow key={coin.id}>
                    <TableCell className="font-medium">{coin.name}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{coin.symbol.toUpperCase()}</Badge>
                    </TableCell>
                    <TableCell>${(coin.price || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                    <TableCell>{coin.amount.toFixed(6)}</TableCell>
                    <TableCell className="text-right">${(coin.amount * coin.price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                  </TableRow>
                ))
              ) : (
                ALL_COINS.split(',').map(coinId => {
                    const coinInfo = { id: coinId, name: coinId.charAt(0).toUpperCase() + coinId.slice(1), symbol: coinId.toUpperCase() };
                    const price = getCoinPrice(coinId);
                    return (
                        <TableRow key={coinInfo.id}>
                            <TableCell className="font-medium">{coinInfo.name}</TableCell>
                            <TableCell>
                               <Badge variant="secondary">{coinInfo.symbol}</Badge>
                            </TableCell>
                             <TableCell>${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                            <TableCell>0.000000</TableCell>
                            <TableCell className="text-right">$0.00</TableCell>
                        </TableRow>
                    )
                })
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
