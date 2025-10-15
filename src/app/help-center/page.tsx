'use client';

import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LifeBuoy } from "lucide-react";
import Link from "next/link";

export default function HelpCenterPage() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-4xl">
            <div className="text-center mb-12">
                 <div className="flex justify-center items-center gap-3 mb-4">
                    <LifeBuoy className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Help Center</h1>
                </div>
                <p className="text-lg text-muted-foreground">How can we help you?</p>
                <div className="mt-4 max-w-lg mx-auto">
                    <Input placeholder="Search for answers..." />
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>How do I create an account?</AccordionTrigger>
                    <AccordionContent>
                        You can create an account by visiting our <Link href="/signup" className="text-primary hover:underline">Sign Up</Link> page. You'll need to provide an email address and create a password.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How do I secure my account?</AccordionTrigger>
                    <AccordionContent>
                        We highly recommend enabling Two-Factor Authentication (2FA) on your account for an extra layer of security. You can do this in your account settings.
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-3">
                    <AccordionTrigger>What are the trading fees?</AccordionTrigger>
                    <AccordionContent>
                        Our fees vary depending on your trading volume. You can find a detailed breakdown of our fee structure on our fees page.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            
            <div className="text-center mt-12">
                <p className="text-muted-foreground">Can't find what you're looking for?</p>
                <Link href="/contact-us" className="text-primary font-semibold hover:underline">Contact our support team</Link>
            </div>
        </div>
    );
}
