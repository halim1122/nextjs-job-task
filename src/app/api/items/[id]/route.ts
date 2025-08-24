// app/api/items/[id]/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// ✅ সঠিক function signature (Next.js v15 অনুযায়ী)
export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // ⬇️ এখানে await করতে হবে
    const { id } = await context.params;

    const collection = await dbConnect("products");
    const product = await collection.findOne({ _id: new ObjectId(id) });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (err) {
    console.error("❌ API Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
