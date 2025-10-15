'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SolanaPricePage() {
    const router = useRouter();

    useEffect(() => {
        // Assuming 'solana' is a valid coinId on your trade page
        router.replace('/trade?coin=solana');
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center text-center py-16 h-[calc(100vh-12rem)]">
            <h1 className="text-2xl font-bold tracking-tight">Redirecting to the Solana trade page...</h1>
        </div>
    );
}
