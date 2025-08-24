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
    <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      {/* Image */}
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-gray-600 font-medium">{product.name}</p>
        <p className="text-gray-600 font-medium">{product.category}</p>
        <p className="text-orange-600 font-bold text-lg mt-1">${product.price}</p>

        {/* Button -> Always bottom */}
        <div className="mt-auto">
          <Link
            href={`/products/${product._id}`}
            className="w-full block px-4 py-2 text-center bg-orange-500 text-white rounded hover:bg-orange-600 transition"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  )
}
