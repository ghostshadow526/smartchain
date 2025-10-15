'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import LivePrices from "@/components/LivePrices";

export default function InternationalExchangePage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">ECNFOUNDATION International Exchange</h1>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                    Access global crypto markets with our secure and regulated international exchange. Available to users outside of the United States.
                </p>
                 <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/trade">Visit the Exchange</Link>
                    </Button>
                </div>
            </div>

            <section>
                <h2 className="text-3xl font-bold text-center mb-8">Spot Markets</h2>
                <LivePrices />
            </section>
        </div>
    );
}
