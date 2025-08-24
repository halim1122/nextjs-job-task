import ProductDetailsClient from "./ProductDetailsClient";

type Product = {
  _id: string;
  name: string;
  category: string;
  seller: string;
  price: number;
  stock: number;
  ratings: number;
  ratingsCount: number;
  img: string;
  shipping: number;
  quantity: number;
};

interface Props {
  params: { id: string };
}

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = params; // ⚠️ no need for await
console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/items/${id}`)
  try {
    // Server-side fetch
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/items/${id}`, {
      cache: "no-store", // always fetch fresh data
    });

    if (!res.ok) throw new Error("Failed to fetch product");

    const product: Product = await res.json();

    // Pass product to client component
    return <ProductDetailsClient product={product} />;
  } catch (err) {
    console.error("Failed to fetch product:", err);
    return (
      <div className="text-red-500 text-center mt-10">
        Failed to load product.
      </div>
    );
  }
}
