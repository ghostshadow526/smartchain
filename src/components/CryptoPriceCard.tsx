import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface CryptoPriceCardProps {
  coinName: string;
  coinImage: string;
  actualPrice: number;
  displayedPrice: string;
}

export default function CryptoPriceCard({ coinName, coinImage, actualPrice, displayedPrice }: CryptoPriceCardProps) {
  return (
    <Card className="bg-card border-border hover:border-accent hover:-translate-y-1 transition-all duration-300">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0">
        {coinImage && <Image src={coinImage} alt={coinName} width={32} height={32} />}
        <CardTitle className="text-xl capitalize">{coinName}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-sm text-foreground/70">
          Actual Price: ${actualPrice.toLocaleString()}
        </div>
        <div className="text-2xl font-bold">
          Promotional Price: <strong>${displayedPrice}</strong>
        </div>
      </CardContent>
    </Card>
  );
}
