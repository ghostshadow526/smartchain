'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function BasePage() {
    return (
        <div className="container mx-auto py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Welcome to Base</h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                Base is a secure, low-cost, builder-friendly Ethereum L2 built to bring the next billion users onchain. It's incubated by ECNFOUNDATION and built on the open-source OP Stack.
            </p>
            <div className="mt-8 flex justify-center gap-4">
                <Button asChild size="lg">
                    <Link href="#">Start Building</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="#">Explore the Ecosystem</Link>
                </Button>
            </div>

            <div className="mt-16 flex justify-center">
                <Image src="https://picsum.photos/seed/base/1024/300" alt="Base Network" width={1024} height={300} className="rounded-lg shadow-2xl" />
            </div>
        </div>
    );
}
