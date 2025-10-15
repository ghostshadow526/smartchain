'use client';

import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

export default function ServerWalletsPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Server Wallets</h1>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                    A powerful, self-custodied wallet infrastructure for developers. Build custom crypto experiences for your users with our secure and scalable server wallet solution.
                </p>
            </div>

            <div className="max-w-4xl mx-auto p-8 border rounded-lg">
                <div className="flex items-center mb-4">
                    <Terminal className="w-5 h-5 mr-2" />
                    <h3 className="text-lg font-mono text-muted-foreground">POST /v1/wallets/create</h3>
                </div>
                <pre className="bg-card p-4 rounded-md text-sm overflow-x-auto">
                    <code>
{`{
  "chain": "ethereum",
  "name": "My First Wallet",
  "metadata": {
    "userId": "user-12345"
  }
}`}
                    </code>
                </pre>
                 <div className="flex items-center mt-8 mb-4">
                    <h3 className="text-lg font-mono text-muted-foreground">RESPONSE 200 OK</h3>
                </div>
                 <pre className="bg-card p-4 rounded-md text-sm overflow-x-auto">
                    <code>
{`{
  "id": "w_abc123def456",
  "address": "0x1234...abcd",
  "chain": "ethereum",
  "name": "My First Wallet",
  "createdAt": "2023-10-26T10:00:00Z"
}`}
                    </code>
                </pre>
                <div className="mt-8 text-center">
                    <Button>Read the API Docs</Button>
                </div>
            </div>
        </div>
    );
}
