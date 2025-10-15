'use client';

import LivePrices from "@/components/LivePrices";

export default function SupportedCryptoPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Supported Cryptocurrencies</h1>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                    Explore the wide range of digital assets available for trading on ECNFOUNDATION. We are constantly reviewing and adding new assets to our platform.
                </p>
            </div>
            
            <LivePrices />
        </div>
    );
}
