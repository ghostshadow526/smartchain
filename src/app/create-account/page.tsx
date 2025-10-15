'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateAccountPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/signup');
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center text-center py-16 h-[calc(100vh-12rem)]">
            <h1 className="text-2xl font-bold tracking-tight">Redirecting to Sign Up...</h1>
        </div>
    );
}
