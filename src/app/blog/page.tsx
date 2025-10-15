'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import Link from "next/link";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: 'The Rise of Decentralized Finance (DeFi)',
    description: 'An in-depth look at the DeFi ecosystem and its potential to reshape the financial landscape.',
    imageUrl: 'https://picsum.photos/seed/blog1/600/400',
    author: 'Jane Doe',
    date: 'October 26, 2023',
    link: '#',
  },
  {
    title: 'Understanding Layer 2 Scaling Solutions',
    description: 'How technologies like optimistic rollups and ZK-rollups are helping Ethereum scale.',
    imageUrl: 'https://picsum.photos/seed/blog2/600/400',
    author: 'John Smith',
    date: 'October 22, 2023',
    link: '#',
  },
  {
    title: 'A Guide to Crypto Security: Protecting Your Assets',
    description: 'Best practices for securing your cryptocurrency, from hardware wallets to avoiding scams.',
    imageUrl: 'https://picsum.photos/seed/blog3/600/400',
    author: 'Emily White',
    date: 'October 18, 2023',
    link: '#',
  },
];

export default function BlogPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">From the Blog</h1>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                    Insights, news, and updates from the world of cryptocurrency and the ECNFOUNDATION team.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader>
                            <Image src={post.imageUrl} alt={post.title} width={600} height={400} className="rounded-t-lg" />
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                            <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                            <CardDescription className="flex-grow">{post.description}</CardDescription>
                            <div className="text-sm text-muted-foreground mt-4">
                                By {post.author} on {post.date}
                            </div>
                            <Button asChild className="mt-4 w-full">
                                <Link href={post.link}>Read More</Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
