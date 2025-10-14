'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface BuySellFormProps {
    currentPrice: number | null;
    coinId: string;
    user: any;
}

function OrderForm({ type, price, coinId, user }: { type: 'buy' | 'sell', price: number | null, user: any }) {
  const { toast } = useToast();
  const buttonColor = type === 'buy' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700';
  const [amount, setAmount] = useState('');
  const [total, setTotal] = useState('');

  const portfolio = user?.portfolio;
  const balance = user?.balance;

  useEffect(() => {
    if (price && amount) {
      setTotal((parseFloat(amount) * price).toFixed(2));
    } else {
      setTotal('');
    }
  }, [amount, price]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
        setAmount(value);
    }
  }

  const handleTotalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value) && price) {
        setTotal(value);
        setAmount((parseFloat(value)/price).toFixed(8))
    }
  }

  const handleTrade = () => {
    const numericAmount = parseFloat(amount);
    const numericTotal = parseFloat(total);

    if (!numericAmount || numericAmount <= 0) {
        toast({
            title: "Invalid Amount",
            description: "Please enter a valid amount to trade.",
            variant: "destructive"
        });
        return;
    }

    if (type === 'buy') {
        if (!numericTotal || numericTotal <= 0 || numericTotal > balance) {
            toast({
              title: "Insufficient USD Balance",
              description: `You do not have enough USD to complete this purchase. Please deposit funds.`,
              variant: "destructive",
            });
            return;
        }
    }

    if (type === 'sell') {
      const coinInPortfolio = portfolio?.find((c: any) => c.id === coinId);
      const coinBalance = coinInPortfolio ? coinInPortfolio.amount : 0;
      if (numericAmount > coinBalance) {
        toast({
          title: "Insufficient Balance",
          description: `You do not have enough ${coinId.toUpperCase()} to complete this trade. Please buy some first.`,
          variant: "destructive",
        });
        return;
      }
    }

    // Placeholder for actual trade execution
    toast({
        title: "Order Placed",
        description: `Your ${type} order for ${amount} ${coinId.toUpperCase()} has been placed.`,
    })
  }


  return (
    <Tabs defaultValue="market" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="limit">Limit</TabsTrigger>
        <TabsTrigger value="market">Market</TabsTrigger>
      </TabsList>
      <TabsContent value="limit" className="space-y-4 pt-2">
        <div className="space-y-2">
          <Label htmlFor="price">Price (USD)</Label>
          <Input id="price" placeholder="60000.00" type="number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="amount">Amount ({coinId.toUpperCase()})</Label>
          <Input id="amount" placeholder="0.1" value={amount} onChange={handleAmountChange} type="text" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="total">Total (USD)</Label>
          <Input id="total" placeholder="6000.00" value={total} onChange={handleTotalChange} type="text" />
        </div>
        <Button className={`w-full capitalize ${buttonColor}`} onClick={handleTrade}>{type}</Button>
      </TabsContent>
      <TabsContent value="market" className="space-y-4 pt-2">
        <div className="space-y-2">
            <div className='flex justify-between items-center'>
                 <Label htmlFor="amount-market">Amount ({coinId.toUpperCase()})</Label>
                 { type === 'sell' && <span className="text-xs text-muted-foreground">Balance: {portfolio?.find((c:any) => c.id === coinId)?.amount?.toFixed(6) || '0.00'}</span> }
            </div>
          <Input id="amount-market" placeholder="0.1" value={amount} onChange={handleAmountChange} type="text" />
        </div>
        <div className="space-y-2">
            <div className='flex justify-between items-center'>
                 <Label htmlFor="total-market">Total (USD)</Label>
                 { type === 'buy' && <span className="text-xs text-muted-foreground">Balance: ${balance?.toLocaleString() || '0.00'}</span> }
            </div>
          <Input id="total-market" value={total} onChange={handleTotalChange} type="text" placeholder="6000.00" />
        </div>
        <Button className={`w-full capitalize ${buttonColor}`} onClick={handleTrade}>{type}</Button>
      </TabsContent>
    </Tabs>
  );
}

function DirectBuyForm({ currentPrice }: { currentPrice: number | null }) {
    const [amount, setAmount] = useState('');
    const [coin, setCoin] = useState('bitcoin');
    const [received, setReceived] = useState('');

    useEffect(() => {
        if(currentPrice && amount) {
            const get = parseFloat(amount) / currentPrice;
            setReceived(get.toFixed(8));
        } else {
            setReceived('');
        }
    }, [amount, currentPrice, coin]);


    return (
        <div className="space-y-4 pt-2">
            <div className="space-y-2">
                <Label>Coin</Label>
                <Select value={coin} onValueChange={setCoin}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Coin" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="bitcoin">Bitcoin (BTC)</SelectItem>
                        <SelectItem value="ethereum">Ethereum (ETH)</SelectItem>
                        <SelectItem value="tether">Tether (USDT)</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="buy-amount">Amount to spend (USD)</Label>
                <Input id="buy-amount" placeholder="100.00" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="buy-get">You will get</Label>
                <Input id="buy-get" readOnly value={received ? `${received} ${coin.toUpperCase()}` : ''} />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Buy Crypto</Button>
        </div>
    )
}

export default function BuySellForm({ currentPrice, coinId, user }: BuySellFormProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <Tabs defaultValue="buy-sell" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="buy-sell">Buy/Sell</TabsTrigger>
            <TabsTrigger value="direct-buy">Direct Buy</TabsTrigger>
          </TabsList>
          <TabsContent value="buy-sell">
             <Tabs defaultValue="buy" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mt-2">
                    <TabsTrigger value="buy">Buy</TabsTrigger>
                    <TabsTrigger value="sell">Sell</TabsTrigger>
                </TabsList>
                <TabsContent value="buy">
                    <OrderForm type="buy" price={currentPrice} coinId={coinId} user={user} />
                </TabsContent>
                <TabsContent value="sell">
                    <OrderForm type="sell" price={currentPrice} coinId={coinId} user={user} />
                </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="direct-buy">
            <DirectBuyForm currentPrice={currentPrice} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
