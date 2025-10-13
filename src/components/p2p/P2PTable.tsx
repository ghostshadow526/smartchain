'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { P2POffer } from '@/lib/types';
import { useEffect, useState } from 'react';

const mockOffers: P2POffer[] = [
  { id: '1', user: 'CryptoKing', coin: 'BTC', amount: 0.5, price: 61000, paymentMethods: ['Bank Transfer', 'PayPal'], country: 'USA' },
  { id: '2', user: 'SatoshiNext', coin: 'BTC', amount: 0.2, price: 61250, paymentMethods: ['Wise'], country: 'Canada' },
  { id: '3', user: 'EtherGoddess', coin: 'ETH', amount: 10, price: 3100, paymentMethods: ['Skrill', 'Bank Transfer'], country: 'UK' },
  { id: '4', user: 'NaijaTrader', coin: 'USDT', amount: 5000, price: 1.01, paymentMethods: ['Chipper Cash'], country: 'Nigeria' },
  { id: '5', user: 'DogeMaster', coin: 'DOGE', amount: 100000, price: 0.16, paymentMethods: ['PayPal'], country: 'USA' },
  { id: '6', user: 'AussieCrypto', coin: 'BTC', amount: 0.1, price: 60800, paymentMethods: ['PayID'], country: 'Australia' },
  { id: '7', user: 'UKBitcoin', coin: 'BTC', amount: 1, price: 61500, paymentMethods: ['Bank Transfer'], country: 'UK' },
  { id: '8', user: 'CADTrader', coin: 'ETH', amount: 5, price: 3150, paymentMethods: ['Interac e-Transfer'], country: 'Canada' },
];

interface P2PTableProps {
    countryFilter: string;
    paymentFilter: string;
}

export default function P2PTable({ countryFilter, paymentFilter }: P2PTableProps) {
    const [filteredOffers, setFilteredOffers] = useState<P2POffer[]>(mockOffers);

    useEffect(() => {
        let offers = mockOffers;
        if (countryFilter !== 'all') {
            offers = offers.filter(offer => offer.country === countryFilter);
        }
        if (paymentFilter) {
            offers = offers.filter(offer => offer.paymentMethods.some(pm => pm.toLowerCase().includes(paymentFilter.toLowerCase())));
        }
        setFilteredOffers(offers);
    }, [countryFilter, paymentFilter]);


  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Coin</TableHead>
          <TableHead>Amount Available</TableHead>
          <TableHead>Price per Coin (USD)</TableHead>
          <TableHead>Payment Methods</TableHead>
          <TableHead>Country</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredOffers.map((offer) => (
          <TableRow key={offer.id}>
            <TableCell className="font-medium">{offer.user}</TableCell>
            <TableCell>{offer.coin}</TableCell>
            <TableCell>{offer.amount}</TableCell>
            <TableCell>${offer.price.toLocaleString()}</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-1">
                {offer.paymentMethods.map((method) => (
                  <Badge key={method} variant="secondary">
                    {method}
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell>{offer.country}</TableCell>
            <TableCell className="text-right">
              <Button size="sm">Buy {offer.coin}</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
