'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export default function ContactUsPage() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Message Sent",
            description: "Thank you for contacting us. Our team will get back to you shortly.",
        });
    };

    return (
        <div className="container mx-auto py-12 px-4 max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-center mb-8">Contact Us</h1>
            <p className="text-lg text-muted-foreground text-center mb-12">
                Have a question or need assistance? Fill out the form below or email us directly at <a href="mailto:contact@ecnfoundationsngo.com" className="text-primary underline">contact@ecnfoundationsngo.com</a>. We'll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" required />
                    </div>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="category">Topic</Label>
                    <Select>
                        <SelectTrigger id="category">
                            <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="account">Account Support</SelectItem>
                            <SelectItem value="trading">Trading &amp; Fees</SelectItem>
                            <SelectItem value="security">Security Concern</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" required rows={6} />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
            </form>
        </div>
    );
}
