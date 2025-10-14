import { Button } from '@/components/ui/button';
import LivePrices from '@/components/LivePrices';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="space-y-16 py-16">
      <header className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">
          ECNFOUNDATION
        </h1>
        <p className="text-lg md:text-xl text-foreground/80">
          Your Gateway to the Future of Digital Assets.
        </p>
        <div className="pt-4">
          <Button asChild size="lg">
            <Link href="/trade">Start Trading</Link>
          </Button>
        </div>
      </header>

      <section className="flex justify-center">
        <Image 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_geO7ls_Xaw-q_hlswEhunkIRe2HHv1MXw&s"
          alt="Crypto Animation"
          width={800}
          height={450}
          className="rounded-lg shadow-2xl"
        />
      </section>

      <section className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">About Our Platform</h2>
        <p className="text-foreground/80 leading-relaxed">
          Welcome to ECNFOUNDATION — the next evolution in crypto trading. Built for speed, precision, and style, our platform offers real-time market insights and secure trading experiences that empower you to make smarter moves in the digital economy. We provide you with the tools and data to navigate the complexities of the cryptocurrency markets with confidence.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          Our mission is to simplify crypto investing by combining data-driven analysis, clean design, and professional-grade tools accessible to everyone. Whether you are a seasoned trader or just starting, ECNFOUNDATION offers a seamless and intuitive experience. Here, your strategy meets clarity — with every click. Join us and become part of a community dedicated to financial innovation.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">New User Promotional Prices</h2>
        <LivePrices />
      </section>
    </div>
  );
}
