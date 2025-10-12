import { Button } from '@/components/ui/button';
import LivePrices from '@/components/LivePrices';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-24 py-16">
      <header className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">
          BlackVault Crypto
        </h1>
        <p className="text-lg md:text-xl text-foreground/80">
          Trade smart. Trade fast. Trade in style.
        </p>
        <div className="pt-4">
          <Button asChild size="lg">
            <Link href="/trade">Start Trading</Link>
          </Button>
        </div>
      </header>

      <section className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">About Our Platform</h2>
        <p className="text-foreground/80 leading-relaxed">
          Welcome to BlackVault — the next evolution in crypto trading. Built for speed, precision, and style, our platform offers real-time market insights and secure trading experiences that empower you to make smarter moves in the digital economy.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          Our mission is to simplify crypto investing by combining data-driven analysis, clean design, and professional-grade tools accessible to everyone. Here, your strategy meets clarity — with every click.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Live Market Prices (Half Displayed)</h2>
        <LivePrices />
      </section>
    </div>
  );
}
