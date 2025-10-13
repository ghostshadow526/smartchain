export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-6 text-center text-sm text-foreground/60">
        <p>&copy; {new Date().getFullYear()} ECNFOUNDATION. All rights reserved.</p>
        <p>Powered by CoinGecko API</p>
      </div>
    </footer>
  );
}
