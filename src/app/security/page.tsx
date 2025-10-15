'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Lock, Fingerprint } from "lucide-react";

const securityFeatures = [
    {
        icon: Lock,
        title: "Cold Storage",
        description: "The vast majority of our digital assets are held in our secure offline storage system, protecting them from online threats."
    },
    {
        icon: ShieldCheck,
        title: "Platform Security",
        description: "Our platform is built with industry-leading security practices, including regular penetration testing and vulnerability scanning to protect against attacks."
    },
    {
        icon: Fingerprint,
        title: "Two-Factor Authentication (2FA)",
        description: "Secure your account with 2FA using an authenticator app or security key. This adds an extra layer of protection to your login process."
    },
]

export default function SecurityPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Commitment to Security</h1>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                    At ECNFOUNDATION, the security of your assets and personal information is our highest priority. We employ a multi-layered security strategy to ensure your account remains safe.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {securityFeatures.map((feature, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <feature.icon className="w-8 h-8 text-primary" />
                                <CardTitle>{feature.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-16 text-center max-w-3xl mx-auto">
                 <h2 className="text-3xl font-bold mb-4">Proactive Protection</h2>
                 <p className="text-muted-foreground">
                    Our dedicated security team works around the clock to monitor for suspicious activity and potential threats. We use advanced machine learning models to detect and prevent unauthorized access to your account. Your trust is our most valuable asset, and we are committed to protecting it.
                 </p>
            </div>
        </div>
    );
}
