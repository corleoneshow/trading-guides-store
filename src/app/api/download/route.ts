import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getProduct } from "@/lib/products";
import { readFile } from "fs/promises";
import path from "path";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

export async function GET(request: NextRequest) {
  try {
    const productId = request.nextUrl.searchParams.get("product");
    const sessionId = request.nextUrl.searchParams.get("session");

    if (!productId || !sessionId) {
      return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
    }

    // Verify the payment was successful
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Payment not verified" }, { status: 403 });
    }

    // Verify the product matches
    if (session.metadata?.productId !== productId) {
      return NextResponse.json({ error: "Product mismatch" }, { status: 403 });
    }

    const product = getProduct(productId);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Read the file from the public/downloads directory
    const filePath = path.join(process.cwd(), "public", "downloads", product.downloadFile);

    try {
      const fileBuffer = await readFile(filePath);

      // Determine content type
      const ext = path.extname(product.downloadFile).toLowerCase();
      const contentType = ext === ".pdf"
        ? "application/pdf"
        : ext === ".zip"
        ? "application/zip"
        : "application/octet-stream";

      return new NextResponse(fileBuffer, {
        headers: {
          "Content-Type": contentType,
          "Content-Disposition": `attachment; filename="${product.downloadFile}"`,
        },
      });
    } catch {
      // File not found - return a placeholder message
      return NextResponse.json(
        { error: "File not available yet. Please contact support." },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Download failed" },
      { status: 500 }
    );
  }
}
