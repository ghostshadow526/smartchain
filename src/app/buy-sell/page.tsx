'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import LivePrices from "@/components/LivePrices";

export default function BuySellPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Buy & Sell Cryptocurrency Instantly</h1>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                    The simplest and most secure way to buy, sell, and manage your digital assets. Get started in minutes.
                </p>
            </div>
            
            <div className="max-w-md mx-auto mb-16">
                <Card>
                    <CardHeader>
                        <CardTitle>Start Trading Now</CardTitle>
                        <CardDescription>Create an account to access our full trading suite, or explore live market prices below.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                         <Button asChild size="lg">
                            <Link href="/signup">Create an Account</Link>
                        </Button>
                        <Button asChild variant="secondary" size="lg">
                            <Link href="/trade">Go to Trading Platform</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <section>
                <h2 className="text-3xl font-bold text-center mb-8">Live Market Prices</h2>
                <LivePrices />
            </section>
        </div>
    );
}
