'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Mail, Newspaper } from "lucide-react";

const pressReleases = [
  {
    title: 'ECNFOUNDATION Announces Partnership with Major Financial Institution',
    date: 'October 15, 2023',
    link: '#',
  },
  {
    title: 'New DeFi Features Launched on ECNFOUNDATION Platform',
    date: 'September 28, 2023',
    link: '#',
  },
  {
    title: 'ECNFOUNDATION Reaches 10 Million Users Worldwide',
    date: 'August 5, 2023',
    link: '#',
  },
];

export default function PressPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Press & Media</h1>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                    For all media inquiries, press releases, and information about ECNFOUNDATION.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <section>
                    <h2 className="text-3xl font-bold mb-6">Recent Press Releases</h2>
                    <div className="space-y-4">
                        {pressReleases.map((release, index) => (
                            <Card key={index}>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <div>
                                        <CardTitle className="text-lg">{release.title}</CardTitle>
                                        <p className="text-sm text-muted-foreground">{release.date}</p>
                                    </div>
                                    <Button asChild variant="outline" size="icon">
                                        <Link href={release.link}><Newspaper className="h-4 w-4" /></Link>
                                    </Button>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </section>

                <section>
                    <Card>
                        <CardHeader>
                            <CardTitle>Media Inquiries</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                If you are a member of the press and would like to get in touch, please contact our media relations team.
                            </p>
                            <Button asChild className="w-full">
                                <a href="mailto:press@ecnfoundation.com">
                                    <Mail className="mr-2 h-4 w-4" /> Email Us
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    );
}
