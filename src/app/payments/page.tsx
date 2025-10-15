'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function PaymentsPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Crypto Payments for Everyone</h1>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                    Enable your business to accept cryptocurrency payments from anyone, anywhere in the world. Simple, secure, and instant.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                     <h2 className="text-3xl font-bold mb-4">Why Accept Crypto?</h2>
                     <ul className="space-y-4 text-muted-foreground">
                        <li className="flex items-start gap-3">
                            <ArrowRight className="text-primary mt-1 flex-shrink-0" />
                            <span><strong>Global Reach:</strong> Access a global customer base without worrying about cross-border transaction fees or currency conversions.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <ArrowRight className="text-primary mt-1 flex-shrink-0" />
                            <span><strong>Lower Fees:</strong> Enjoy significantly lower transaction fees compared to traditional payment methods.</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <ArrowRight className="text-primary mt-1 flex-shrink-0" />
                            <span><strong>No Chargebacks:</strong> Crypto payments are final, eliminating the risk of fraudulent chargebacks.</span>
                        </li>
                     </ul>
                     <Button size="lg" className="mt-8">Get Started</Button>
                </div>
                <div>
                     <Image src="https://picsum.photos/seed/payments/600/400" alt="Payments Flow" width={600} height={400} className="rounded-xl shadow-2xl" />
                </div>
            </div>
        </div>
    );
}
