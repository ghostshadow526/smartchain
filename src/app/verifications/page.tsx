'use client';

import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";

export default function VerificationsPage() {
    return (
        <div className="container mx-auto py-16 px-4 text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
                <BadgeCheck className="w-10 h-10 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Verifications API</h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                Verify onchain identity and ownership. Our Verifications API allows you to confirm wallet addresses, social profiles, and more, building a foundation of trust for your application.
            </p>
             <div className="mt-8 flex justify-center gap-4">
                <Button size="lg">Read the Docs</Button>
            </div>
        </div>
    );
}
