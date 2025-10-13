'use client';

import P2PTable from '@/components/p2p/P2PTable';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

export default function P2PPage() {
    const [countryFilter, setCountryFilter] = useState('all');
    const [paymentFilter, setPaymentFilter] = useState('');

    return (
        <div className="space-y-8 py-8">
            <header className="text-center space-y-2">
                <h1 className="text-4xl font-bold">P2P Trading</h1>
                <p className="text-muted-foreground">Buy and sell crypto directly with other users.</p>
            </header>

            <Card>
                <CardHeader>
                    <CardTitle>Filters</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="country-filter">Country</label>
                            <Select value={countryFilter} onValueChange={setCountryFilter}>
                                <SelectTrigger id="country-filter">
                                    <SelectValue placeholder="All Countries" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Countries</SelectItem>
                                    <SelectItem value="USA">United States</SelectItem>
                                    <SelectItem value="Canada">Canada</SelectItem>
                                    <SelectItem value="UK">United Kingdom</SelectItem>
                                    <SelectItem value="Nigeria">Nigeria</SelectItem>
                                    <SelectItem value="Australia">Australia</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="payment-filter">Payment Method</label>
                            <Input 
                                id="payment-filter" 
                                placeholder="e.g. Bank Transfer"
                                value={paymentFilter}
                                onChange={(e) => setPaymentFilter(e.target.value)}
                            />
                        </div>
                         <div className="flex items-end">
                            <Button className="w-full md:w-auto">Search</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <P2PTable countryFilter={countryFilter} paymentFilter={paymentFilter} />

        </div>
    );
}
