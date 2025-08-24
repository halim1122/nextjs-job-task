"use client"
import { useState, useEffect } from "react"
import Swal from "sweetalert2"

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
}

export default function ProductDetailsClient({ product: initialProduct }: Props) {
  const [product, setProduct] = useState<Product | null>(initialProduct || null)
  const [loading, setLoading] = useState(!initialProduct)
  const [qty, setQty] = useState(1)

  useEffect(() => {
    // যদি Server fetch থাকে, loading কে false করে দাও
    if (initialProduct) {
      setLoading(false)
    }
  }, [initialProduct])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-b-4 border-gray-200"></div>
      </div>
    )
  }

  if (!product) return <div className="text-center mt-20">Product not found</div>

   const handleAddToCart = () => {
    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      text: `✅ Added ${qty} x ${product.name} to cart!`,
      timer: 2000,
      showConfirmButton: false,
    });
  };

  const handleOutOfStock = () => {
    Swal.fire({
      icon: "error",
      title: "Out of Stock",
      text: "Sorry, this product is out of stock!",
      timer: 2000,
      showConfirmButton: false,
    });
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="max-w-7xl mx-auto p-5 flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <img src={product.img} alt={product.name} className="w-full h-96 object-cover rounded-lg shadow-lg" />
        </div>
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
          <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center border rounded px-3">
              <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)} className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300 transition">-</button>
              <span className="px-4">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300 transition">+</button>
            </div>
           <button
        onClick={handleAddToCart}
        className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
      >
        Add to Cart
      </button>

      <button
        onClick={handleOutOfStock}
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
