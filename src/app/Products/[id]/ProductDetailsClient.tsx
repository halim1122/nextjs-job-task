/* eslint-disable @next/next/no-img-element */
// app/products/[id]/ProductDetailsClient.tsx
"use client"
import { useState, useEffect } from "react"

type Product = {
  _id: string
  name: string
  category: string
  seller: string
  price: number
  stock: number
  ratings: number
  ratingsCount: number
  img: string
  shipping: number
  quantity: number
}

interface Props {
  product?: Product
  productId?: string
}

export default function ProductDetailsClient({ product: initialProduct, productId }: Props) {
  const [product, setProduct] = useState<Product | null>(initialProduct || null)
  const [loading, setLoading] = useState(!initialProduct)
  const [qty, setQty] = useState(1)

  useEffect(() => {
    if (!initialProduct && productId) {
      const fetchProduct = async () => {
        try {
          const res = await fetch(`https://my-app-server-coral.vercel.app/products/${productId}`)
          if (!res.ok) throw new Error("Failed to fetch product")
          const data: Product = await res.json()
          setProduct(data)
        } catch (err) {
          console.error(err)
        } finally {
          setLoading(false)
        }
      }
      fetchProduct()
    }
  }, [initialProduct, productId])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  if (!product) return <div className="text-center mt-20">Product not found</div>

  const handleAddToCart = () => {
    alert(`Added ${qty} x ${product.name} to cart!`)
  }

  return (
    <div className="min-h-screen mt-20">
      <div className="max-w-7xl mx-auto p-5 flex flex-col lg:flex-row gap-10">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-3">{product.name}</h1>
            <p className="text-gray-600 mb-1">Category: {product.category}</p>
            <p className="text-gray-600 mb-1">Seller: {product.seller}</p>
            <p className="text-orange-600 font-bold text-2xl mb-1">${product.price}</p>
            <p className="text-gray-500 text-sm mb-1">
              Ratings: {product.ratings} ⭐ ({product.ratingsCount} reviews)
            </p>
            <p className="text-gray-500 text-sm mb-1">Stock: {product.stock}</p>
            <p className="text-gray-500 text-sm mb-1">Shipping: ${product.shipping}</p>
          </div>

          {/* Quantity + Buttons */}
          <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center border rounded px-3">
              <button
                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300 transition"
              >
                -
              </button>
              <span className="px-4">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300 transition"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={() => alert("Sorry this product Out of Stock!")}
              className="border border-orange-500 text-orange-500 px-6 py-2 rounded hover:bg-orange-50 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
