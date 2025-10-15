'use client';

import { Button } from "@/components/ui/button";
import { Database } from "lucide-react";

export default function DataAPIPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <div className="text-center mb-12">
                <div className="flex justify-center items-center gap-3 mb-4">
                    <Database className="w-8 h-8 text-primary" />
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Data API</h1>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                    Access comprehensive, real-time, and historical cryptocurrency market data. Our Data API provides the information you need to build powerful analytics, trading bots, and research tools.
                </p>
            </div>

            <div className="max-w-4xl mx-auto p-8 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Example: Get Historical Price Data</h3>
                 <pre className="bg-card p-4 rounded-md text-sm overflow-x-auto">
                    <code>
{`GET https://api.ecnfoundation.com/v3/products/BTC-USD/candles?granularity=86400`}
                    </code>
                </pre>
                 <div className="mt-8 text-center">
                    <Button>Explore Data API</Button>
                </div>
            </div>
        </div>
    );
}
