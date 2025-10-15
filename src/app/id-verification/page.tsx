'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function IDVerificationPage() {
    return (
        <div className="container mx-auto py-16 px-4 text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
                <ShieldCheck className="w-10 h-10 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">ID Verification</h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                To comply with financial regulations and keep our platform secure, we require users to verify their identity. This process helps prevent fraud and protects your account.
            </p>
             <div className="mt-8 flex justify-center gap-4">
                <Button asChild size="lg">
                    <Link href="/dashboard">Start Verification in Dashboard</Link>
                </Button>
            </div>
        </div>
    );
}
