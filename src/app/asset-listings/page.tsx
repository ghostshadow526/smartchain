'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function AssetListingsPage() {
    return (
        <div className="container mx-auto py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">List Your Asset on ECNFOUNDATION</h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                Join the growing ecosystem of digital assets on one of the world's most trusted and secure crypto platforms.
            </p>

            <div className="mt-16 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Why List with Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <Card>
                        <CardHeader><CardTitle>Broad Exposure</CardTitle></CardHeader>
                        <CardContent><p className="text-muted-foreground">Reach millions of users across the globe and increase the visibility of your project.</p></CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Trusted Platform</CardTitle></CardHeader>
                        <CardContent><p className="text-muted-foreground">Benefit from our industry-leading security and compliance standards, giving your users confidence.</p></CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Seamless Integration</CardTitle></CardHeader>
                        <CardContent><p className="text-muted-foreground">Our expert team provides a streamlined process for listing and integrating your asset.</p></CardContent>
                    </Card>
                </div>
            </div>

            <div className="mt-12 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Our Listing Criteria</h3>
                <p className="text-muted-foreground mb-6">To ensure a safe and high-quality ecosystem, all assets must undergo a rigorous review process. We evaluate projects based on criteria such as security, compliance, team, and technology.</p>
                <Button size="lg">Start Your Application</Button>
            </div>
        </div>
    );
}
