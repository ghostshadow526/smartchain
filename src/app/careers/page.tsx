'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const jobOpenings = [
  { title: 'Senior Blockchain Engineer', location: 'Remote', department: 'Engineering' },
  { title: 'Product Manager, DeFi', location: 'New York, NY', department: 'Product' },
  { title: 'Head of Marketing', location: 'Remote', department: 'Marketing' },
  { title: 'Security Analyst', location: 'London, UK', department: 'Security' },
];

export default function CareersPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Join Our Mission</h1>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                    We are building the future of finance and are looking for talented individuals to join our team. If you are passionate about crypto and want to make an impact, we'd love to hear from you.
                </p>
            </div>

            <section>
                <h2 className="text-3xl font-bold mb-8">Current Openings</h2>
                <div className="space-y-4">
                    {jobOpenings.map((job, index) => (
                        <Card key={index}>
                            <CardHeader className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center">
                                <div>
                                    <CardTitle>{job.title}</CardTitle>
                                    <CardDescription>{job.department} &middot; {job.location}</CardDescription>
                                </div>
                                <Button>Apply Now</Button>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </section>

             <section className="mt-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">Innovate and Grow</h3>
                        <p className="text-muted-foreground">Work on cutting-edge technology and solve challenging problems in a fast-growing industry.</p>
                    </div>
                     <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">Flexible Work</h3>
                        <p className="text-muted-foreground">We offer remote and flexible work options to help you achieve a healthy work-life balance.</p>
                    </div>
                     <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">Great Benefits</h3>
                        <p className="text-muted-foreground">Competitive salary, health benefits, and a generous token package. Your success is our success.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
