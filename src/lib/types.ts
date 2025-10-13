export interface CryptoPriceResponse {
  [coin: string]: {
    usd: number;
  };
}

export type OHLCEntry = [number, number, number, number, number]; // [timestamp, open, high, low, close]

// for mock data
export interface Order {
  price: number;
  amount: number;
  total: number;
}

export interface Trade {
  id: number;
  price: number;
  amount: number;
  time: string;
  type: 'buy' | 'sell';
}

export interface P2POffer {
    id: string;
    user: string;
    coin: string;
    amount: number;
    price: number;
    paymentMethods: string[];
    country: string;
}
