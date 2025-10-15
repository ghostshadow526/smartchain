'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from 'next/image';

export default function CreditCardPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">The ECNFOUNDATION Card</h1>
                    <p className="text-lg md:text-xl text-muted-foreground mt-4">
                        Earn crypto rewards on every purchase. The simplest way to grow your portfolio, just by spending.
                    </p>
                    <ul className="space-y-2 mt-6">
                        <li className="flex items-center gap-2"><Check className="text-green-500" /> Up to 4% back in crypto rewards</li>
                        <li className="flex items-center gap-2"><Check className="text-green-500" /> No annual fee</li>
                        <li className="flex items-center gap-2"><Check className="text-green-500" /> Use it wherever Visa® is accepted</li>
                    </ul>
                    <Button size="lg" className="mt-8">Apply Now</Button>
                </div>
                <div>
                    <Image src="https://picsum.photos/seed/card/600/400" alt="ECNFOUNDATION Credit Card" width={600} height={400} className="rounded-xl shadow-2xl" />
                </div>
            </div>
        </div>
    );
}
