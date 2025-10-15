'use client';

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

export default function PrimePage() {
    return (
        <div className="bg-background text-foreground">
            <div className="container mx-auto py-20 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">ECNFOUNDATION Prime</h1>
                <p className="text-lg md:text-2xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                    The leading prime brokerage platform for digital assets.
                    Integrated solutions for institutions to trade, stake, and custody crypto.
                </p>
                <Button size="lg" className="mt-8">Request Access</Button>
            </div>
            
            <div className="container mx-auto py-16 px-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                         <h2 className="text-3xl font-bold mb-4">A Full-Service Platform</h2>
                         <p className="text-muted-foreground mb-6">ECNFOUNDATION Prime combines advanced trading, custody, and financing into a single, unified interface. We provide the tools and services institutions need to manage their digital assets with confidence.</p>
                         <ul className="space-y-3">
                            <li className="flex items-center gap-3"><Check className="text-primary w-5 h-5" /> Smart order routing for best price execution</li>
                            <li className="flex items-center gap-3"><Check className="text-primary w-5 h-5" /> Secure, regulated custody solution</li>
                            <li className="flex items-center gap-3"><Check className="text-primary w-5 h-5" /> Post-trade settlement and reporting</li>
                            <li className="flex items-center gap-3"><Check className="text-primary w-5 h-5" /> 24/7 dedicated client support</li>
                         </ul>
                    </div>
                    <div>
                         <Image src="https://picsum.photos/seed/prime/600/400" alt="Prime Dashboard" width={600} height={400} className="rounded-xl shadow-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}
