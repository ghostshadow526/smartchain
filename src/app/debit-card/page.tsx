'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Check } from "lucide-react";

export default function DebitCardPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <Image src="https://picsum.photos/seed/debit/600/400" alt="ECNFOUNDATION Debit Card" width={600} height={400} className="rounded-xl shadow-2xl" />
                </div>
                <div className="order-1 md:order-2">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Spend Crypto, Earn Rewards</h1>
                    <p className="text-lg md:text-xl text-muted-foreground mt-4">
                        The ECNFOUNDATION Debit Card makes it easy to spend your crypto balance anywhere, and earn rewards on every purchase.
                    </p>
                    <ul className="space-y-2 mt-6">
                        <li className="flex items-center gap-2"><Check className="text-green-500" /> Spend crypto or USD anywhere Visa® is accepted</li>
                        <li className="flex items-center gap-2"><Check className="text-green-500" /> No annual fees or sign-up fees</li>
                        <li className="flex items-center gap-2"><Check className="text-green-500" /> Earn crypto rewards on every purchase</li>
                    </ul>
                    <Button size="lg" className="mt-8">Get Your Card</Button>
                </div>
            </div>
        </div>
    );
}
