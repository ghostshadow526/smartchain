'use client';

export default function DigitalAssetDisclosuresPage() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Digital Asset Disclosures</h1>
            <p className="text-muted-foreground text-sm mb-8">Last Updated: October 26, 2023</p>

            <div className="space-y-6 text-muted-foreground">
                <p>
                    Trading digital assets is speculative and comes with significant risks. It is not suitable for all investors, and you should make sure you understand the risks before trading. This disclosure provides a summary of some of the key risks associated with digital assets.
                </p>

                <h2 className="text-2xl font-semibold text-foreground pt-4">1. Price Volatility</h2>
                <p>
                    The price of digital assets can be highly volatile. Prices can fluctuate significantly over short periods, and you may lose a substantial portion or all of your investment. Past performance is not an indicator of future results.
                </p>

                <h2 className="text-2xl font-semibold text-foreground pt-4">2. Regulatory Risk</h2>
                <p>
                    The legal and regulatory landscape for digital assets is still developing. Changes in laws and regulations could adversely affect the use, transfer, exchange, and value of digital assets.
                </p>
                
                <h2 className="text-2xl font-semibold text-foreground pt-4">3. Security Risk</h2>
                <p>
                    Digital assets are stored in digital wallets and are susceptible to theft, loss, and destruction. While ECNFOUNDATION employs industry-leading security measures, no system is entirely immune from attack. You are responsible for maintaining the security of your own account credentials.
                </p>

                <h2 className="text-2xl font-semibold text-foreground pt-4">4. Market and Liquidity Risk</h2>
                <p>
                    Some digital assets may have limited liquidity, which can make it difficult to buy or sell them at your desired price. Markets can be illiquid and may experience rapid price movements.
                </p>
                
                <p className="font-semibold text-foreground pt-6">
                    This is not an exhaustive list of all risks. You should conduct your own research and consult with a financial advisor before investing in digital assets. By using our platform, you acknowledge and accept these risks.
                </p>
            </div>
        </div>
    );
}
