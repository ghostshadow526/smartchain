'use client';

import { Button } from "@/components/ui/button";

export default function PrimeAPIPage() {
    return (
        <div className="container mx-auto py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Prime API</h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                A dedicated API for our institutional clients. Access advanced trading, custody, and financing services to manage your digital assets at scale.
            </p>
             <div className="mt-8 flex justify-center gap-4">
                <Button size="lg">Contact Sales</Button>
                 <Button size="lg" variant="outline">View Documentation</Button>
            </div>
        </div>
    );
}
