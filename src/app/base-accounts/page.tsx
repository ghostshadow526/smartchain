'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Repeat } from "lucide-react";

export default function BaseAccountsPage() {
    return (
        <div className="container mx-auto py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Base Accounts: The Smart Wallet</h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                Base Accounts, powered by account abstraction, make interacting with the blockchain easier, safer, and more flexible than ever before.
            </p>

            <div className="mt-16 max-w-5xl mx-auto">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-3">
                            <Zap className="w-6 h-6 text-primary" />
                            <CardTitle>Gasless Transactions</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-muted-foreground">Sponsor transactions for your users, removing the need for them to hold the native token for gas fees.</p></CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center gap-3">
                            <Shield className="w-6 h-6 text-primary" />
                            <CardTitle>Social Recovery</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-muted-foreground">Users can recover their accounts through trusted contacts, eliminating the risk of lost seed phrases.</p></CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center gap-3">
                            <Repeat className="w-6 h-6 text-primary" />
                            <CardTitle>Batched Transactions</CardTitle>
                        </CardHeader>
                        <CardContent><p className="text-muted-foreground">Combine multiple operations into a single transaction, saving on fees and improving user experience.</p></CardContent>
                    </Card>
                </div>
            </div>
             <div className="mt-12">
                <Button size="lg">Learn More</Button>
            </div>
        </div>
    );
}
