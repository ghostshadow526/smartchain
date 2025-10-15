'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CreditCard, Landmark, DollarSign } from "lucide-react";

export default function PaymentMethodsPage() {
    return (
        <div className="container mx-auto py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Flexible Payment Methods</h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                Fund your account and start trading with ease. We support a variety of payment methods to make your crypto journey as smooth as possible.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="flex flex-col items-center">
                    <CreditCard className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold">Credit/Debit Card</h3>
                    <p className="text-muted-foreground mt-2">Instantly buy crypto with your Visa or Mastercard.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <Landmark className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold">Bank Transfer</h3>
                    <p className="text-muted-foreground mt-2">Fund your account directly from your bank account.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <DollarSign className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold">Crypto Deposits</h3>
                    <p className="text-muted-foreground mt-2">Transfer crypto from another wallet or exchange.</p>
                </div>
            </div>

             <div className="mt-12">
                <Button asChild size="lg">
                    <Link href="/dashboard">Add a Payment Method</Link>
                </Button>
            </div>
        </div>
    );
}
