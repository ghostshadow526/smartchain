# **App Name**: BlackVault Crypto

## Core Features:

- Live Crypto Prices: Display real-time cryptocurrency prices fetched from the CoinGecko API. Each price will be divided by 2 before display.
- Trading Interface: A simulated trading environment featuring market data, order book, and buy/sell forms with live updates.
- User Authentication: Firebase authentication system allowing users to sign up, sign in, and sign out securely.
- Data persistence: Saving information about users to the Firebase Database
- Market Watchlist: Users can add coins to their watchlist and track their performance. Watchlist data stored in Firestore.
- Order Simulation: Generate dummy buy/sell orders to simulate real-time market activity for the trading interface, enhancing visual realism.

## Style Guidelines:

- Background color: Pure black (#000000) to provide a sleek, modern, and professional look.
- Text color: White (#FFFFFF) used across the entire page to ensure high contrast and readability against the black background.
- Subtle separators and card backgrounds: Gray tones (#222 to #444) used for creating visual separation and depth without distracting from the main content.
- Font: 'Poppins' sans-serif font to maintain a clean, contemporary, and readable aesthetic.
- Hero Section: Large site title and descriptive subtitle at the top, followed by a concise paragraph about the platform and a clear call to action.
- Live Prices Section: Dynamically updated crypto prices displayed in a neat, responsive grid layout using CSS Grid or Flexbox.
- Trading Grid: Three-column layout with Market & Order Book, Chart & Price, and Buy/Sell & Trades, collapsing to a stacked layout on mobile devices.
- Hover effects: Subtle glows or white outlines on buttons and price cards to provide feedback on interaction.