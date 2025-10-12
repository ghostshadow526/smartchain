import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CryptoPriceCardProps {
  coinName: string;
  actualPrice: number;
  displayedPrice: string;
}

export default function CryptoPriceCard({ coinName, actualPrice, displayedPrice }: CryptoPriceCardProps) {
  return (
    <Card className="bg-card border-border hover:border-accent hover:-translate-y-1 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-xl capitalize">{coinName}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-sm text-foreground/70">
          Actual: ${actualPrice.toLocaleString()}
        </div>
        <div className="text-2xl font-bold">
          Displayed: <strong>${displayedPrice}</strong>
        </div>
      </CardContent>
    </Card>
  );
}
