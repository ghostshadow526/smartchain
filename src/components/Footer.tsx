import Link from 'next/link';

const footerSections = [
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '/press' },
      { name: 'Security', href: '/security' },
      { name: 'Vendors', href: '/vendors' },
      { name: 'Legal & privacy', href: '/legal-privacy' },
      { name: 'Cookie policy', href: '/cookie-policy' },
      { name: 'Cookie preferences', href: '/cookie-preferences' },
      { name: 'Do Not Share', href: '/do-not-share' },
      { name: 'Digital Asset Disclosures', href: '/digital-asset-disclosures' },
      { name: 'UK Modern Slavery Statement', href: '/uk-modern-slavery-statement' },
    ],
  },
  {
    title: 'Individuals',
    links: [
      { name: 'Buy & sell', href: '/buy-sell' },
      { name: 'Base App', href: '/base-app' },
      { name: 'Credit Card', href: '/credit-card' },
      { name: 'Debit Card', href: '/debit-card' },
    ],
  },
  {
    title: 'Businesses',
    links: [
      { name: 'Asset Listings', href: '/asset-listings' },
      { name: 'Payments', href: '/payments' },
      { name: 'Commerce', href: '/commerce' },
    ],
  },
  {
    title: 'Institutions',
    links: [
      { name: 'Prime', href: '/prime' },
      { name: 'Staking', href: '/staking' },
      { name: 'Exchange', href: '/exchange' },
      { name: 'International Exchange', href: '/international-exchange' },
      { name: 'Verified Pools', href: '/verified-pools' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { name: 'Developer Platform', href: '/developer-platform' },
      { name: 'Base', href: '/base' },
      { name: 'Server Wallets', href: '/server-wallets' },
      { name: 'Embedded Wallets', href: '/embedded-wallets' },
      { name: 'Base Accounts', href: '/base-accounts' },
      { name: 'Onramp & Offramp', href: '/onramp-offramp' },
      { name: 'x402', href: '/x402' },
      { name: 'Trade API', href: '/trade-api' },
      { name: 'Paymaster', href: '/paymaster' },
      { name: 'OnchainKit', href: '/onchainkit' },
      { name: 'Data API', href: '/data-api' },
      { name: 'Verifications', href: '/verifications' },
      { name: 'Node', href: '/node' },
      { name: 'AgentKit', href: '/agentkit' },
      { name: 'Faucet', href: '/faucet' },
      { name: 'Exchange API', href: '/exchange-api' },
      { name: 'International Exchange API', href: '/international-exchange-api' },
      { name: 'Prime API', href: '/prime-api' },
      { name: 'Derivatives API', href: '/derivatives-api' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Help center', href: '/help-center' },
      { name: 'Contact us', href: '/contact-us' },
      { name: 'Create account', href: '/create-account' },
      { name: 'ID verification', href: '/id-verification' },
      { name: 'Account information', href: '/account-information' },
      { name: 'Payment methods', href: '/payment-methods' },
      { name: 'Account access', href: '/account-access' },
      { name: 'Supported crypto', href: '/supported-crypto' },
      { name: 'Status', href: '/status' },
    ],
  },
  {
    title: 'Asset prices',
    links: [
      { name: 'Asset prices', href: '/asset-prices' },
      { name: 'Bitcoin price', href: '/bitcoin-price' },
      { name: 'Ethereum price', href: '/ethereum-price' },
      { name: 'Solana price', href: '/solana-price' },
      { name: 'XRP price', href: '/xrp-price' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-foreground/60 hover:text-foreground/80 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} ECNFOUNDATION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
