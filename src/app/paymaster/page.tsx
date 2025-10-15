'use client';

import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export default function PaymasterPage() {
    return (
        <div className="container mx-auto py-16 px-4 text-center">
             <div className="flex justify-center items-center gap-3 mb-4">
                <Zap className="w-10 h-10 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Paymaster API</h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                Sponsor transactions for your users and create gasless experiences. With our Paymaster API, you can cover the gas fees for your users' onchain actions, making your dApp more accessible and user-friendly.
            </p>
             <div className="mt-8 flex justify-center gap-4">
                <Button size="lg">Read the Docs</Button>
            </div>
        </div>
    );
}
