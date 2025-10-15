'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  { name: 'Alex Johnson', role: 'CEO & Founder', avatar: '/avatars/01.png' },
  { name: 'Maria Garcia', role: 'Chief Technology Officer', avatar: '/avatars/02.png' },
  { name: 'James Smith', role: 'Head of Product', avatar: '/avatars/03.png' },
];

export default function AboutPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About ECNFOUNDATION</h1>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                    We are a team of builders, dreamers, and innovators passionate about creating a more open financial future for everyone.
                </p>
            </div>

            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
                <div className="max-w-4xl mx-auto space-y-4 text-muted-foreground">
                    <p>ECNFOUNDATION was founded in 2023 with a simple yet powerful idea: to make cryptocurrency accessible and easy to use for everyone. We saw the potential of blockchain technology to revolutionize finance, but also recognized the barriers that kept many people from participating. High fees, complex interfaces, and security concerns were major hurdles.</p>
                    <p>We set out to build a platform that would change that. A platform that is secure, intuitive, and built with the user in mind. From our humble beginnings, we have grown into a trusted name in the crypto space, serving millions of users worldwide. Our journey is one of continuous innovation, driven by our commitment to our users and our belief in the power of an open financial system.</p>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map(member => (
                        <Card key={member.name} className="text-center">
                            <CardContent className="pt-6">
                                <Avatar className="w-24 h-24 mx-auto mb-4">
                                    <AvatarImage src={`https://i.pravatar.cc/150?u=${member.name}`} />
                                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-muted-foreground">{member.role}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}
