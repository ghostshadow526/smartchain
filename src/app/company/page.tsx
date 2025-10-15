'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function CompanyPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold tracking-tight text-center mb-8">Our Company</h1>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                At ECNFOUNDATION, we are driven by the mission to create an open financial system for the world. We believe that cryptocurrency and blockchain technology are the future of finance, and we are dedicated to building the tools and infrastructure that will make this future a reality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">To increase economic freedom in the world. We believe that by providing accessible and secure financial tools, we can empower individuals and businesses to thrive.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">A world where the financial system is open, transparent, and accessible to everyone, regardless of their background or location. We envision a future built on trust and innovation.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Our Values</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">We operate on the principles of clear communication, continuous improvement, and a commitment to our users. Integrity and security are at the core of everything we do.</p>
                    </CardContent>
                </Card>
            </div>

            <div className="text-center mt-16">
                <h2 className="text-3xl font-bold mb-4">Learn More About Us</h2>
                <div className="flex justify-center gap-4">
                    <Link href="/about" className="text-primary hover:underline">About Us</Link>
                    <Link href="/careers" className="text-primary hover:underline">Careers</Link>
                    <Link href="/blog" className="text-primary hover:underline">Blog</Link>
                </div>
            </div>
        </div>
    );
}
