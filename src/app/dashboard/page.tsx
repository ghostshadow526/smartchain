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
import { Copy, Loader2, ShieldCheck, ShieldAlert, ArrowUp, ArrowDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { CoinDetails } from '@/lib/types';
import KYCForm from '@/components/KYCForm';
import Image from 'next/image';

const COINS_WITH_ADDRESSES = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', address: 'bc1qlactml4p0rqkma460hufayumpd39s79pexskdd' },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', address: '0x494Cc65Cc3aB9C246511B5A3360d6745Afb36fef' },
  { id: 'tether', name: 'USDT', symbol: 'USDT', address: '0x494Cc65Cc3aB9C246511B5A3360d6745Afb36fef' },
];

export default function DashboardPage() {
  const { user, userData, loading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [allCoins, setAllCoins] = useState<CoinDetails[] | null>(null);
  const [filteredCoins, setFilteredCoins] = useState<CoinDetails[] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedCoin, setSelectedCoin] = useState('');
  const [isDepositing, setIsDepositing] = useState(false);
  const [depositAddress, setDepositAddress] = useState('');
  const [isKycDialogOpen, setIsKycDialogOpen] = useState(false);
  const [isWithdrawDialogOpen, setIsWithdrawDialogOpen] = useState(false);


  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);
  
  useEffect(() => {
    async function fetchPrices() {
        try {
            const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`);
            const data: CoinDetails[] = await res.json();
            setAllCoins(data);
        } catch (error) {
            console.error("Failed to fetch prices", error);
        }
    }
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // every minute
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
    }, 1000);
  };
  
  const handleWithdraw = () => {
      // Basic check, more complex logic with gas fees would be needed
      const totalBalance = getPortfolioTotal();
      if(totalBalance <= 0) {
          toast({
              title: "Withdrawal Error",
              description: "You have no balance to withdraw.",
              variant: "destructive"
          })
          return;
      }
      toast({
          title: "Withdrawal Successful",
          description: "Your withdrawal request is being processed."
      })
      setIsWithdrawDialogOpen(false);
  }

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
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }
  
  const getPortfolioWithPrices = () => {
      if (!userData?.portfolio || !allCoins) return [];
      return userData.portfolio.map((coin: any) => {
          const details = allCoins.find(c => c.id === coin.id);
          return {
              ...coin,
              ...details,
              price: details?.current_price || 0,
          }
      });
  }

  const getPortfolioTotal = () => {
      if (!userData?.portfolio || !allCoins) return 0;
      const portfolioWithPrices = getPortfolioWithPrices();
      return portfolioWithPrices.reduce((acc: number, coin: any) => acc + (coin.amount * coin.price), 0);
  }

  const portfolioTotal = getPortfolioTotal();
  const portfolioWithPrices = getPortfolioWithPrices();
  const coinsToDisplay = filteredCoins || allCoins;


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
        <div className="flex gap-2">
            <Dialog onOpenChange={(open) => { if(!open) { setSelectedCoin(''); setDepositAddress(''); }}}>
              <DialogTrigger asChild>
                <Button>Deposit</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Deposit Crypto</DialogTitle>
                  <DialogDescription>
                    Select a currency to see your deposit address.
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

             <Dialog open={isWithdrawDialogOpen} onOpenChange={setIsWithdrawDialogOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline">Withdraw</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Withdraw Funds</DialogTitle>
                        <DialogDescription>Enter the amount and destination for your withdrawal. Gas fees will be calculated and deducted.</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <p className="text-sm">Your total balance is <strong>${portfolioTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></p>
                        <Input placeholder="Amount to withdraw" type="number" />
                        <Input placeholder="Withdrawal Address" />
                         <p className="text-xs text-muted-foreground">Estimated Gas Fee: 0.001 ETH ($3.50)</p>
                        <Button onClick={handleWithdraw} className="w-full">Confirm Withdrawal</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
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
                {userData.kycStatus !== 'verified' && userData.kycStatus !== 'pending' && (
                  <Dialog open={isKycDialogOpen} onOpenChange={setIsKycDialogOpen}>
                      <DialogTrigger asChild>
                          <Button className="w-full">Start KYC Verification</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-lg">
                           <DialogHeader>
                            <DialogTitle>KYC Verification</DialogTitle>
                            <DialogDescription>Upload the required documents to verify your identity. This will help secure your account.</DialogDescription>
                          </DialogHeader>
                          {/*<KYCForm onVerificationSubmit={() => setIsKycDialogOpen(false)} />*/}
                          <p className="text-sm text-center text-muted-foreground py-8">KYC document upload is temporarily disabled. Please check back later.</p>
                      </DialogContent>
                  </Dialog>
                )}
                 {userData.kycStatus === 'pending' && (
                    <p className="text-sm text-muted-foreground text-center pt-2">Your documents are under review. We will notify you once the process is complete.</p>
                )}
            </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Crypto Assets</CardTitle>
          <CardDescription>Browse and manage all available cryptocurrencies.</CardDescription>
           <div className="pt-4">
            <Input 
                placeholder="Search crypto..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
           </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Asset</TableHead>
                <TableHead>Current Price</TableHead>
                <TableHead>24h Change</TableHead>
                <TableHead>Your Balance</TableHead>
                <TableHead className="text-right">Value (USD)</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(coinsToDisplay && coinsToDisplay.length > 0) ? (
                coinsToDisplay.map((coin) => {
                    const userCoin = portfolioWithPrices.find(p => p.id === coin.id);
                    const balance = userCoin ? userCoin.amount : 0;
                    const value = userCoin ? userCoin.amount * coin.current_price : 0;
                    const priceChange = coin.price_change_percentage_24h;

                    return (
                        <TableRow key={coin.id}>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-2">
                                   {coin.image && <Image src={coin.image} alt={coin.name} width={24} height={24} />}
                                    <div>
                                        <div>{coin.name}</div>
                                        <div className="text-xs text-muted-foreground">{coin.symbol.toUpperCase()}</div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>${coin.current_price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 8 })}</TableCell>
                            <TableCell className={priceChange > 0 ? 'text-green-500' : 'text-red-500'}>
                                <div className="flex items-center gap-1">
                                    {priceChange > 0 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                                    {priceChange.toFixed(2)}%
                                </div>
                            </TableCell>
                            <TableCell>{balance.toFixed(6)}</TableCell>
                            <TableCell className="text-right">${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                            <TableCell className="text-right">
                                <Button size="sm" onClick={() => router.push(`/trade?coin=${coin.id}`)}>Buy</Button>
                            </TableCell>
                        </TableRow>
                    )
                })
              ) : (
                <TableRow>
                    <TableCell colSpan={6} className="text-center h-24">
                        {loading ? 'Loading coins...' : 'No coins found.'}
                    </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
