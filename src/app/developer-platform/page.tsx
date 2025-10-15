'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Book, Rocket } from "lucide-react";
import Link from "next/link";

export default function DeveloperPlatformPage() {
    return (
        <div className="container mx-auto py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">ECNFOUNDATION Developer Platform</h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                Build the future of finance with our powerful and easy-to-use APIs. Everything you need to create innovative crypto applications.
            </p>
            <div className="mt-8 flex justify-center gap-4">
                <Button asChild size="lg">
                    <Link href="/prime-api">Get API Keys</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="/prime-api">Read the Docs</Link>
                </Button>
            </div>

            <div className="mt-20 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-3">
                            <Rocket className="w-6 h-6 text-primary" />
                            <CardTitle>Powerful APIs</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-muted-foreground">Access real-time market data, execute trades, and manage wallets with our comprehensive suite of APIs.</p></CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center gap-3">
                            <Book className="w-6 h-6 text-primary" />
                            <CardTitle>Clear Documentation</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-muted-foreground">Our detailed documentation and guides make it easy to get started and build your application quickly.</p></CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center gap-3">
                            <Code className="w-6 h-6 text-primary" />
                            <CardTitle>SDKs for Every Stack</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-muted-foreground">We provide SDKs in multiple languages, including Node.js, Python, and Go, to accelerate your development.</p></CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
