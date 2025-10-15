'use client';

import { Button } from "@/components/ui/button";

export default function InternationalExchangeAPIPage() {
    return (
        <div className="container mx-auto py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">International Exchange API</h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                Access our international markets with a powerful, co-located API for low-latency trading. This API is designed for professional and institutional traders operating outside the United States.
            </p>
             <div className="mt-8 flex justify-center gap-4">
                <Button size="lg">Request API Access</Button>
            </div>
        </div>
    );
}
