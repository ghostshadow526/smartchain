'use client';

import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

export default function ExchangeAPIPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Exchange API</h1>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                    Programmatically access all the features of the ECNFOUNDATION Exchange. Build sophisticated trading strategies, manage your account, and get real-time market data.
                </p>
            </div>

            <div className="max-w-4xl mx-auto p-8 border rounded-lg">
                <div className="flex items-center mb-4">
                    <Terminal className="w-5 h-5 mr-2" />
                    <h3 className="text-lg font-mono text-muted-foreground">GET /products/BTC-USD/book?level=2</h3>
                </div>
                <pre className="bg-card p-4 rounded-md text-sm max-h-80 overflow-y-auto">
                    <code>
{`{
  "bids": [
    ["60000.10", "0.5", 1],
    ["60000.00", "1.2", 2]
  ],
  "asks": [
    ["60001.50", "0.8", 1],
    ["60002.00", "2.1", 3]
  ],
  "sequence": 123456789,
  "time": "2023-10-26T12:00:00.000Z"
}`}
                    </code>
                </pre>
                <div className="mt-8 text-center">
                    <Button>Read API Documentation</Button>
                </div>
            </div>
        </div>
    );
}
