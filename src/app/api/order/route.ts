import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getProduct } from "@/lib/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json({ error: "Session ID required" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Payment not completed" }, { status: 400 });
    }

    const productId = session.metadata?.productId;
    const product = productId ? getProduct(productId) : null;

    // Generate a simple download URL (in production, use signed URLs or a proper file delivery system)
    const downloadUrl = product
      ? `/api/download?product=${productId}&session=${sessionId}`
      : null;

    return NextResponse.json({
      productTitle: product?.title || "Unknown Product",
      email: session.customer_details?.email || "Unknown",
      downloadUrl,
    });
  } catch (error) {
    console.error("Order fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch order details" },
      { status: 500 }
    );
  }
}
