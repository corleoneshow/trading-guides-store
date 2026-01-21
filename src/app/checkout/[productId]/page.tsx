"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { products } from "@/lib/products";
import Link from "next/link";

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const product = products.find((p) => p.id === params.productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link href="/" className="text-emerald-400 hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const handleCheckout = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch {
      setError("Failed to start checkout");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link href="/" className="text-xl font-bold">
            TradingGuides
          </Link>
        </div>
      </header>

      {/* Checkout */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-2">{product.title}</h2>
          <p className="text-zinc-400 mb-4">{product.description}</p>

          <ul className="mb-6 space-y-2">
            {product.features.map((feature, i) => (
              <li key={i} className="text-sm text-zinc-300 flex items-center gap-2">
                <span className="text-emerald-400">✓</span> {feature}
              </li>
            ))}
          </ul>

          <div className="border-t border-zinc-800 pt-4 flex justify-between items-center">
            <span className="text-zinc-400">Total</span>
            <span className="text-3xl font-bold">${product.price}</span>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processing...
            </>
          ) : (
            <>Pay ${product.price} with Stripe</>
          )}
        </button>

        <p className="text-center text-zinc-500 text-sm mt-4">
          Secure payment powered by Stripe
        </p>
      </div>
    </div>
  );
}
