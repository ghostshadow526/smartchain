'use client';

import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

export default function TradeAPIPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Trade API</h1>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                    Build your own trading application with our powerful and reliable Trade API. Access real-time market data, manage orders, and execute trades programmatically.
                </p>
            </div>

            <div className="max-w-4xl mx-auto p-8 border rounded-lg">
                <div className="flex items-center mb-4">
                    <Terminal className="w-5 h-5 mr-2" />
                    <h3 className="text-lg font-mono text-muted-foreground">POST /v1/orders</h3>
                </div>
                <pre className="bg-card p-4 rounded-md text-sm overflow-x-auto">
                    <code>
{`{
  "client_order_id": "your-unique-id-123",
  "product_id": "BTC-USD",
  "side": "BUY",
  "order_type": "LIMIT",
  "price": "60000.00",
  "size": "0.01"
}`}
                    </code>
                </pre>
                <div className="mt-8 text-center">
                    <Button>Get Your API Key</Button>
                </div>
            </div>
        </div>
    );
}
