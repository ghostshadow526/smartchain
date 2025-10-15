'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export default function LegalPrivacyPage() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-center mb-8">Legal & Privacy Center</h1>
            <p className="text-lg text-muted-foreground text-center mb-12">
                Welcome to the ECNFOUNDATION Legal & Privacy Center. Here you can find important information about our policies, terms of service, and our commitment to protecting your privacy.
            </p>

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>User Agreement</AccordionTrigger>
                    <AccordionContent>
                        Our User Agreement outlines the terms and conditions for using our services. It covers your rights and responsibilities as a user, as well as our commitments to you. We encourage you to read it carefully to understand how our platform works. For full details, please visit our <Link href="/cookie-policy" className="text-primary hover:underline">Terms of Service</Link> page.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Privacy Policy</AccordionTrigger>
                    <AccordionContent>
                        Your privacy is critically important to us. Our Privacy Policy explains what information we collect, how we use it, and the choices you have about your data. We are committed to transparency and protecting your personal information. Read the full <Link href="/cookie-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Cookie Policy</AccordionTrigger>
                    <AccordionContent>
                        We use cookies to improve your experience on our site. Our Cookie Policy details what cookies are, how we use them, and how you can manage your preferences. Learn more on our <Link href="/cookie-policy".tsx" className="text-primary hover:underline">Cookie Policy</Link> page.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Law Enforcement</AccordionTrigger>
                    <AccordionContent>
                        ECNFOUNDATION is committed to cooperating with law enforcement agencies while respecting user privacy. Our policy for law enforcement requests outlines the legal process required to request user data and how we respond to such requests.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
