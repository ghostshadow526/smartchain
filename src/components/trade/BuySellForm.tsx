'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function OrderForm({ type }: { type: 'buy' | 'sell' }) {
  const buttonColor = type === 'buy' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700';
  return (
    <Tabs defaultValue="limit" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="limit">Limit</TabsTrigger>
        <TabsTrigger value="market">Market</TabsTrigger>
      </TabsList>
      <TabsContent value="limit" className="space-y-4 pt-2">
        <div className="space-y-2">
          <Label htmlFor="price">Price (USD)</Label>
          <Input id="price" placeholder="60000.00" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="amount">Amount (BTC)</Label>
          <Input id="amount" placeholder="0.1" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="total">Total (USD)</Label>
          <Input id="total" placeholder="6000.00" readOnly />
        </div>
        <Button className={`w-full capitalize ${buttonColor}`}>{type}</Button>
      </TabsContent>
      <TabsContent value="market" className="space-y-4 pt-2">
        <div className="space-y-2">
          <Label htmlFor="amount-market">Amount (BTC)</Label>
          <Input id="amount-market" placeholder="0.1" />
        </div>
        <Button className={`w-full capitalize ${buttonColor}`}>{type}</Button>
      </TabsContent>
    </Tabs>
  );
}

export default function BuySellForm() {
  return (
    <Card>
      <CardContent className="p-4">
        <Tabs defaultValue="buy" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="buy">Buy</TabsTrigger>
            <TabsTrigger value="sell">Sell</TabsTrigger>
          </TabsList>
          <TabsContent value="buy">
            <OrderForm type="buy" />
          </TabsContent>
          <TabsContent value="sell">
            <OrderForm type="sell" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
