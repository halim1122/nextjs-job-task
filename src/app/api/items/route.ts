import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// GET all products
export async function GET() {
  try {
    const collection = await dbConnect("products"); // ✅ await করা
    const data = await collection.find({}).toArray();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

// POST new product
export async function POST(req: Request) {
  try {
    const postedData = await req.json();
    const collection = await dbConnect("products"); // ✅ await করা
    const result = await collection.insertOne(postedData);

    // Revalidate products page after new product
    revalidatePath("/products");

    return NextResponse.json(result);
  } catch (err) {
    console.error("Failed to add product:", err);
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  }
}
