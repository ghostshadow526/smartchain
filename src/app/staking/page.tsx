'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const stakingAssets = [
  { name: 'Ethereum', symbol: 'ETH', apy: '4.5%', image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png' },
  { name: 'Solana', symbol: 'SOL', apy: '7.2%', image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png' },
  { name: 'Cardano', symbol: 'ADA', apy: '3.8%', image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png' },
  { name: 'Polkadot', symbol: 'DOT', apy: '12.1%', image: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png' },
];

export default function StakingPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Stake Your Crypto, Earn Rewards</h1>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                    Put your crypto to work and earn rewards by helping to secure the network. It's that simple.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stakingAssets.map((asset) => (
                    <Card key={asset.symbol}>
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <Image src={asset.image} alt={asset.name} width={40} height={40} />
                                <div>
                                    <CardTitle>{asset.name}</CardTitle>
                                    <CardDescription>{asset.symbol}</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-sm text-muted-foreground">Estimated APY</div>
                            <div className="text-3xl font-bold text-green-500">{asset.apy}</div>
                            <Button className="w-full mt-4">Stake Now</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-16 text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">What is Staking?</h2>
                <p className="text-muted-foreground">
                    Staking is the process of participating in a proof-of-stake (PoS) blockchain by holding funds in a cryptocurrency wallet to support the security and operations of the network. In return for their contribution, stakers receive rewards.
                </p>
            </div>
        </div>
    );
}
