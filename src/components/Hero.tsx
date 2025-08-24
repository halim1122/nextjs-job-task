"use client"

import Image from "next/image"
import Link from "next/link"
import Swal from "sweetalert2"

const featuredProduct = {
  _id: "6856491feeb5f26de603fe58",
  category: "Men's Boot",
  name: "TERREX AX4 MID GORE-TEX HIKING SHOES",
  seller: "Addidas",
  price: 111,
  stock: 19,
  ratings: 4,
  ratingsCount: 894,
  img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dfa8c9a7d2864065b27fad7400b2e05e_9366/Terrex_AX4_Mid_GORE-TEX_Hiking_shoes_Black_FY9638_01_standard.jpg",
  shipping: 27,
}

export default function Hero() {
  const handleOrder = () => {
   Swal.fire({
           icon: "success",
           title: "Order successfull",
           text: `This ${featuredProduct.name} is yours!`,
           timer: 2000,
           showConfirmButton: false,
         });
  }

  return (
    <section className="relative bg-orange-100 my-16">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-8">
        
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-orange-600 mb-4">
            Featured Product
          </h1>
          <h2 className="text-3xl font-semibold mb-4">{featuredProduct.name}</h2>
          <p className="text-gray-700 text-lg mb-4">
            Category: {featuredProduct.category} | Seller: {featuredProduct.seller}
          </p>
          <p className="text-orange-600 font-bold text-2xl mb-6">
            ${featuredProduct.price}
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleOrder}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Order Now
            </button>
            <Link
              href={`/products/${featuredProduct._id}`}
              className="bg-white hover:bg-gray-100 border border-gray-300 px-6 py-3 rounded-xl font-semibold transition"
            >
              See Details
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 relative w-full h-80 md:h-96 lg:h-[28rem]">
          <Image
            src={featuredProduct.img}
            alt={featuredProduct.name}
            fill
            className="object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
