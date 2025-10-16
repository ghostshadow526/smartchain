'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function FaucetPage() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const handleRequestFunds = (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            toast({
                title: "Funds Sent",
                description: "0.5 ETH (Base Goerli) has been sent to your address.",
            });
        }, 2000);
    };

    return (
        <div className="container mx-auto py-16 px-4 flex justify-center">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle className="text-3xl">Base Goerli Faucet</CardTitle>
                    <CardDescription>Get testnet ETH to build and test your applications on the Base Goerli network. Funds are limited and are for development purposes only.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleRequestFunds} className="space-y-4">
                        <div>
                            <Label htmlFor="network">Network</Label>
                            <Select defaultValue="base-goerli">
                                <SelectTrigger id="network">
                                    <SelectValue placeholder="Select network" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="base-goerli">Base Goerli Testnet</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                             <Label htmlFor="address">Wallet Address</Label>
                             <Input id="address" placeholder="0x..." required />
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Request 0.5 ETH'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
