'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function EthereumPricePage() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/trade?coin=ethereum');
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center text-center py-16 h-[calc(100vh-12rem)]">
            <h1 className="text-2xl font-bold tracking-tight">Redirecting to the Ethereum trade page...</h1>
        </div>
    );
}
