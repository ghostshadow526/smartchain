'use client';

import { Button } from "@/components/ui/button";
import { Server } from "lucide-react";

export default function NodePage() {
    return (
        <div className="container mx-auto py-16 px-4 text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
                <Server className="w-10 h-10 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Node API</h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                Connect your application to the blockchain with our reliable and high-performance node infrastructure. Get fast, secure, and scalable access to Ethereum, Base, and other networks.
            </p>
             <div className="mt-8 flex justify-center gap-4">
                <Button size="lg">Get Node Access</Button>
            </div>
        </div>
    );
}
