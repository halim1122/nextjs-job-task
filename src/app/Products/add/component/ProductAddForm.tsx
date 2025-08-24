"use client"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import Swal from "sweetalert2"

type ProductFormData = {
  name: string
  category: string
  seller: string
  price: number
  stock: number
  ratings: number
  ratingsCount: number
  shipping: number
  img: FileList
}

export default function AddProduct() {
  const { register, handleSubmit, reset } = useForm<ProductFormData>()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: ProductFormData) => {
    setLoading(true)
    try {
      let imageUrl = ""
      if (data.img && data.img.length > 0) {
        const formData = new FormData()
        formData.append("image", data.img[0])
        const imgbbApiKey = "d159af39e747e9e3982c7d53bbbc6f36" // replace with your key
        const res = await axios.post(
          `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
          formData
        )
        imageUrl = res.data.data.url
      }

      // Prepare final product object
      const product = {
        name: data.name,
        category: data.category,
        seller: data.seller,
        price: Number(data.price),
        stock: Number(data.stock),
        ratings: Number(data.ratings),
        ratingsCount: Number(data.ratingsCount),
        shipping: Number(data.shipping),
        img: imageUrl,
        quantity: 0,
      }

      // Post to your backend
      await axios.post(`/api/items`, product)

      Swal.fire({
              icon: "success",
              title: "Added Product Successfull",
              text: `This Product name ${product?.name}`,
              timer: 2000,
              showConfirmButton: false,
            });
      reset()
    } catch (err) {
      console.error(err)
      alert("Failed to add product.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-5 min-h-screen mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          {...register("name", { required: true })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Category"
          {...register("category", { required: true })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Seller"
          {...register("seller", { required: true })}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Price"
          {...register("price", { required: true })}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Stock"
          {...register("stock", { required: true })}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Ratings (1-5)"
          {...register("ratings", { required: true, min: 1, max: 5 })}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Ratings Count"
          {...register("ratingsCount", { required: true })}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Shipping Cost"
          {...register("shipping", { required: true })}
          className="w-full p-2 border rounded"
        />
        <input
          type="file"
          {...register("img", { required: true })}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  )
}
