'use client';

import { Button } from "@/components/ui/button";
import { ToyBrick } from "lucide-react";

export default function OnchainKitPage() {
    return (
        <div className="container mx-auto py-16 px-4 text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
                <ToyBrick className="w-10 h-10 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">OnchainKit</h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                A collection of open-source React components and hooks for building amazing onchain apps. Spend less time on boilerplate and more time building your unique vision.
            </p>
             <div className="mt-8 flex justify-center gap-4">
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="outline">View on GitHub</Button>
            </div>
        </div>
    );
}
