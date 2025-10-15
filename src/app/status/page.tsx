'use client';

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, Construction } from "lucide-react";

const services = [
  { name: 'Website and Trading', status: 'Operational', icon: CheckCircle2, color: 'text-green-500' },
  { name: 'API Services', status: 'Operational', icon: CheckCircle2, color: 'text-green-500' },
  { name: 'Crypto Deposits & Withdrawals', status: 'Degraded Performance', icon: AlertTriangle, color: 'text-yellow-500' },
  { name: 'Fiat Deposits & Withdrawals', status: 'Operational', icon: CheckCircle2, color: 'text-green-500' },
  { name: 'Customer Support', status: 'Operational', icon: CheckCircle2, color: 'text-green-500' },
  { name: 'Mobile App', status: 'Under Maintenance', icon: Construction, color: 'text-orange-500' },
];

export default function StatusPage() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-center mb-2">System Status</h1>
            <p className="text-center text-green-400 font-semibold mb-8">All Systems Operational</p>

            <div className="space-y-4">
                {services.map(service => {
                    const Icon = service.icon;
                    return (
                        <Card key={service.name}>
                            <CardContent className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Icon className={`w-6 h-6 ${service.color}`} />
                                    <span className="font-semibold">{service.name}</span>
                                </div>
                                <Badge className={`${service.color} bg-opacity-20 border-opacity-30 border ${service.color.replace('text', 'border')}`}>
                                    {service.status}
                                </Badge>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <div className="mt-12 text-center">
                 <h2 className="text-2xl font-bold mb-4">Incident History</h2>
                 <p className="text-muted-foreground">No incidents reported in the last 90 days.</p>
            </div>
        </div>
    );
}
