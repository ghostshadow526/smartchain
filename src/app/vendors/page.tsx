'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function VendorsPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Partner with Us</h1>
                <p className="text-lg md:text-xl text-muted-foreground mt-4">
                    ECNFOUNDATION is always looking to collaborate with innovative vendors and service providers who can help us enhance our platform and deliver exceptional value to our users. If you have a product or service that you believe would be a great fit, we would love to hear from you.
                </p>
            </div>

            <div className="max-w-xl mx-auto mt-12">
                <Card>
                    <CardHeader>
                        <CardTitle>Become a Vendor</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                            Please provide us with details about your company and your offerings. Our procurement team will review your submission and get in touch if there is a potential for collaboration. We look for partners who share our commitment to security, reliability, and innovation.
                        </p>
                        <Button asChild className="w-full">
                            <a href="mailto:vendors@ecnfoundation.com">
                                <Mail className="mr-2 h-4 w-4" /> Contact our Procurement Team
                            </a>
                        </Button>
                        <p className="text-xs text-muted-foreground pt-4">
                            Please note that submission of your information does not guarantee a partnership. We carefully evaluate all potential vendors to ensure alignment with our company values and strategic goals.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
