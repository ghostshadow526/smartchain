'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function BaseAppPage() {
    return (
        <div className="container mx-auto py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">ECNFOUNDATION Base App</h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                Your portal to the onchain world. Discover the easiest way to explore decentralized apps, manage your digital assets, and more.
            </p>
            
            <div className="flex justify-center mt-8">
                 <Image src="https://picsum.photos/seed/app/800/600" alt="Base App Preview" width={800} height={600} className="rounded-lg shadow-2xl" />
            </div>

            <div className="mt-16 max-w-4xl mx-auto">
                 <h2 className="text-3xl font-bold mb-8">Features</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card>
                        <CardHeader><CardTitle>Explore dApps</CardTitle></CardHeader>
                        <CardContent><p className="text-muted-foreground">Access a curated list of the best decentralized applications on the Base network.</p></CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Smart Wallet</CardTitle></CardHeader>
                        <CardContent><p className="text-muted-foreground">Enjoy gasless transactions and simplified onchain interactions with your smart wallet.</p></CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Secure & Simple</CardTitle></CardHeader>
                        <CardContent><p className="text-muted-foreground">Built on the security of ECNFOUNDATION, the Base App makes going onchain safe and easy.</p></CardContent>
                    </Card>
                 </div>
            </div>

            <div className="mt-12">
                <Button size="lg">Download the App</Button>
            </div>
        </div>
    );
}
