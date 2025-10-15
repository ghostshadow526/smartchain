'use client';

import { Button } from "@/components/ui/button";

export default function DerivativesAPIPage() {
    return (
        <div className="container mx-auto py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Derivatives API</h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                Access our regulated derivatives market programmatically. Trade futures and options on digital assets with a secure and compliant API. Available in eligible jurisdictions only.
            </p>
             <div className="mt-8 flex justify-center gap-4">
                <Button size="lg">Request Access</Button>
            </div>
        </div>
    );
}
