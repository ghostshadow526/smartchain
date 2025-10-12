'use client';

import Link from 'next/link';
import { Banknote } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from '@/context/AuthContext';
import { signOutUser } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOutUser();
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Banknote className="h-6 w-6" />
          <span className="font-bold">BlackVault</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/trade" className="text-foreground/60 transition-colors hover:text-foreground/80">
            Trade
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          {loading ? (
            <div className="h-8 w-20 animate-pulse rounded-md bg-muted" />
          ) : user ? (
            <>
              <span className="text-sm text-foreground/80 hidden sm:inline">{user.email}</span>
              <Button variant="secondary" size="sm" onClick={handleSignOut}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
