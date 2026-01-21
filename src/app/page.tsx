import Link from "next/link";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">TradingGuides</h1>
          <nav className="flex gap-6">
            <a href="#products" className="text-zinc-400 hover:text-white transition">Products</a>
            <a href="#about" className="text-zinc-400 hover:text-white transition">About</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Learn Options Trading<br />
          <span className="text-emerald-400">The Right Way</span>
        </h2>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
          Practical guides that teach you real strategies. No fluff, no hype — just actionable knowledge to help you trade smarter.
        </p>
        <a
          href="#products"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-lg transition"
        >
          View Products
        </a>
      </section>

      {/* Products */}
      <section id="products" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Products</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative bg-zinc-900 border rounded-xl p-6 flex flex-col ${
                product.popular ? "border-emerald-500" : "border-zinc-800"
              }`}
            >
              {product.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-sm font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h4 className="text-xl font-bold mb-2">{product.title}</h4>
              <p className="text-zinc-400 mb-4 flex-grow">{product.description}</p>
              <ul className="mb-6 space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="text-sm text-zinc-300 flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <p className="text-3xl font-bold mb-4">${product.price}</p>
                <Link
                  href={`/checkout/${product.id}`}
                  className="block w-full bg-emerald-500 hover:bg-emerald-600 text-center text-white font-semibold py-3 rounded-lg transition"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-6">Why These Guides?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-emerald-400 font-semibold mb-2">No Fluff</h4>
              <p className="text-zinc-400">Straight to the point. Every page is packed with actionable information you can use immediately.</p>
            </div>
            <div>
              <h4 className="text-emerald-400 font-semibold mb-2">Real Strategies</h4>
              <p className="text-zinc-400">Battle-tested approaches that work in real markets. Not theoretical — practical.</p>
            </div>
            <div>
              <h4 className="text-emerald-400 font-semibold mb-2">Lifetime Updates</h4>
              <p className="text-zinc-400">Buy once, get updates forever. As markets evolve, so do the guides.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-zinc-500">
          <p>© 2025 TradingGuides. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
