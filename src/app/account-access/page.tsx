'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AccountAccessPage() {
    return (
        <div className="container mx-auto py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Account Access Help</h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                Having trouble accessing your account? We're here to help you get back in.
            </p>

             <div className="mt-12 max-w-lg mx-auto space-y-4">
                <Button asChild className="w-full" size="lg">
                    <Link href="#">Forgot Your Password?</Link>
                </Button>
                <Button asChild className="w-full" size="lg" variant="outline">
                    <Link href="#">Trouble with 2-Factor Authentication?</Link>
                </Button>
                <Button asChild className="w-full" size="lg" variant="secondary">
                     <Link href="/contact-us">Contact Support</Link>
                </Button>
            </div>
        </div>
    );
}
