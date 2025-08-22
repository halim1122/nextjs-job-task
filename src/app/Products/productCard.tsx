/* eslint-disable @next/next/no-img-element */
// app/products/ProductCard.tsx
"use client"

import Link from "next/link"

type Product = {
  _id: string
  name: string
  category: string
  price: number
  img: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col items-center">
        <p className="text-gray-600 font-medium">{product.category}</p>
        <p className="text-orange-600 font-bold text-lg mt-1">${product.price}</p>
        <Link href={`/products/${product._id}`}
          className="mt-3 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
          See Details
        </Link>
      </div>
    </div>
  )
}
