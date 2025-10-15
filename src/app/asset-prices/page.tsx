'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AssetPricesPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/supported-crypto');
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center text-center py-16 h-[calc(100vh-12rem)]">
            <h1 className="text-2xl font-bold tracking-tight">Redirecting to Supported Crypto...</h1>
        </div>
    );
}
