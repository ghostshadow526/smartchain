'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EmbeddedWalletsPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Embedded Wallets for Your App</h1>
                    <p className="text-lg md:text-xl text-muted-foreground mt-4">
                        Onboard your users to web3 in seconds with just an email. Our Embedded Wallets are non-custodial, secure, and easy to integrate, providing a seamless experience for your users.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <Button size="lg">Get Started</Button>
                        <Button size="lg" variant="outline">View Demo</Button>
                    </div>
                </div>
                <div>
                    <Image src="https://picsum.photos/seed/embedded/600/500" alt="Embedded Wallet UI" width={600} height={500} className="rounded-xl shadow-2xl" />
                </div>
            </div>
        </div>
    );
}
