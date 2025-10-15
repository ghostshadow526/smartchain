'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShieldCheck } from "lucide-react";

const pools = [
  { name: 'ETH/USDC', tvl: '$150.2M', apr: '12.5%', volume: '$50.1M' },
  { name: 'WBTC/ETH', tvl: '$88.7M', apr: '8.2%', volume: '$22.3M' },
  { name: 'SOL/USDT', tvl: '$65.1M', apr: '15.8%', volume: '$31.9M' },
  { name: 'MATIC/USDC', tvl: '$42.5M', apr: '18.1%', volume: '$18.4M' },
];

export default function VerifiedPoolsPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                 <div className="flex justify-center items-center gap-3 mb-4">
                    <ShieldCheck className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Verified Liquidity Pools</h1>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                    Explore and provide liquidity to pools that have been verified by the ECNFOUNDATION team. Earn fees and rewards with confidence.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Available Pools</CardTitle>
                    <CardDescription>Browse our list of verified liquidity pools. All pools have undergone a security and smart contract audit.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Pool</TableHead>
                                <TableHead>Total Value Locked (TVL)</TableHead>
                                <TableHead>APR (24h)</TableHead>
                                <TableHead>Volume (24h)</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {pools.map(pool => (
                                <TableRow key={pool.name}>
                                    <TableCell className="font-medium">{pool.name}</TableCell>
                                    <TableCell>{pool.tvl}</TableCell>
                                    <TableCell className="text-green-500">{pool.apr}</TableCell>
                                    <TableCell>{pool.volume}</TableCell>
                                    <TableCell className="text-right">
                                        <Button size="sm">Add Liquidity</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
