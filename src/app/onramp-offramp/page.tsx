'use client';

import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";

export default function OnrampOfframpPage() {
    return (
        <div className="container mx-auto py-16 px-4 text-center">
             <div className="flex justify-center items-center gap-3 mb-4">
                <ArrowLeftRight className="w-10 h-10 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Fiat-to-Crypto Onramp & Offramp</h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                Seamlessly convert between fiat currency and crypto. Our robust infrastructure makes it easy for your users to move between the traditional financial system and the world of digital assets.
            </p>
             <div className="mt-8 flex justify-center gap-4">
                <Button size="lg">Integrate Onramp</Button>
                <Button size="lg" variant="outline">Learn More</Button>
            </div>
        </div>
    );
}
