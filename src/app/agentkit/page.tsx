'use client';

import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export default function AgentKitPage() {
    return (
        <div className="container mx-auto py-16 px-4 text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
                <Bot className="w-10 h-10 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">AgentKit</h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                Build and deploy autonomous onchain agents. AgentKit provides the tools and infrastructure to create intelligent agents that can interact with smart contracts and execute tasks on the blockchain.
            </p>
             <div className="mt-8 flex justify-center gap-4">
                <Button size="lg">Start Building Agents</Button>
            </div>
        </div>
    );
}
