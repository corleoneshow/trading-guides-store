export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  features: string[];
  popular?: boolean;
  downloadFile: string;
}

export const products: Product[] = [
  {
    id: "options-basics",
    title: "Options Trading Basics",
    description: "Learn the fundamentals of options trading. Perfect for beginners who want to understand calls, puts, and basic strategies.",
    price: 29,
    features: ["50+ page guide", "Real examples", "Strategy templates", "Lifetime updates"],
    downloadFile: "options-basics.pdf",
  },
  {
    id: "wheel-strategy",
    title: "The Wheel Strategy Guide",
    description: "Master the wheel strategy for consistent income. Step-by-step instructions for selling puts and covered calls.",
    price: 49,
    features: ["Complete strategy breakdown", "Entry/exit rules", "Risk management", "Trade journal template"],
    downloadFile: "wheel-strategy.pdf",
  },
  {
    id: "trading-bundle",
    title: "Complete Trading Bundle",
    description: "Everything you need to start trading options profitably. Includes all guides plus exclusive bonuses.",
    price: 79,
    features: ["All guides included", "Spreadsheet tools", "Video walkthroughs", "Email support"],
    popular: true,
    downloadFile: "trading-bundle.zip",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
