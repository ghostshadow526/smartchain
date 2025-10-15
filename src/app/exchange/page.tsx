'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import LivePrices from "@/components/LivePrices";

export default function ExchangePage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">The ECNFOUNDATION Exchange</h1>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                    Our professional-grade trading platform for individuals and institutions. Deep liquidity, low fees, and a powerful API.
                </p>
                 <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/trade">Start Trading</Link>
                    </Button>
                </div>
            </div>

            <section>
                <LivePrices />
            </section>
        </div>
    );
}
