'use client';

import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

export default function X402Page() {
    return (
        <div className="container mx-auto py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-mono tracking-tight">x402</h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                The standard for onchain, per-use API payments. Monetize your APIs and services with micropayments, powered by the blockchain.
            </p>
             <div className="mt-8">
                <Button size="lg">
                    <Code className="mr-2" />
                    View the Specification
                </Button>
            </div>
        </div>
    );
}
