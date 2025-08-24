"use client";

import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";

const products = [
  {
    _id: "6856491feeb5f26de603fe60",
    category: "Men's Boot",
    name: "TERREX FREE HIKER COLD.RDY HIKING BOOTS",
    seller: "Addidas",
    price: 169,
    stock: 17,
    ratings: 5,
    ratingsCount: 2833,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2ded0bee28b249bbb19cad5000818b77_9366/Terrex_Free_Hiker_COLD.RDY_Hiking_Boots_Black_FZ3364_01_standard.jpg",
    shipping: 10,
  },
  {
    _id: "6856491feeb5f26de603fe61",
    category: "Men's Sneaker",
    name: "MOVE FEELREADY SPORT TEE",
    seller: "Addidas",
    price: 14,
    stock: 19,
    ratings: 3,
    ratingsCount: 4041,
    img: "https://i.ibb.co/TxkbkB27/images-1.jpg",
    shipping: 5,
  },
  {
    _id: "6856491feeb5f26de603fe74",
    category: "Bag",
    name: "R.Y.V. Backpack",
    seller: "Addidas",
    price: 67,
    stock: 10,
    ratings: 5,
    ratingsCount: 83,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/dc7dca21df62473ea518ade101251809_9366/R.Y.V._Backpack_Black_HD9650_01_standard.jpg",
    shipping: 24,
  },
  {
    _id: "6856491feeb5f26de603fe75",
    category: "Cap",
    name: "Relaxed Strap-Back Hat",
    seller: "Addidas",
    price: 30,
    stock: 6,
    ratings: 4,
    ratingsCount: 4,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/4feb20f4d990407cb4f1a88a0040b212_9366/Relaxed_Strap-Back_Hat_Black_BH7137_01_standard.jpg",
    shipping: 1,
  },
  {
    _id: "6856491feeb5f26de603fe7f",
    category: "Earphones",
    name: "adidas Z.N.E. 01 True Wireless Earbuds",
    seller: "Addidas",
    price: 142,
    stock: 11,
    ratings: 5,
    ratingsCount: 22,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/00276c6c380b41bcb29fadcc00f98312_9366/adidas_Z.N.E._01_True_Wireless_Earbuds_Grey_EY5116_42_detail.jpg",
    shipping: 23,
  }
];

const handleOrder = (productName: string) => {
  Swal.fire({
          icon: "success",
          title: "Order successfull",
          text: `This ${productName} is yours!`,
          timer: 2000,
          showConfirmButton: false,
        });
};

export default function ProductHighlights() {
  return (
    <section className="py-12 px-6 max-w-[1800px] mx-auto">
      <h2 className="text-3xl text-orange-500 font-bold text-center mb-10">
        🏷️ Product Highlights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products.map((item) => (
          <div
            key={item._id}
            className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg flex flex-col overflow-hidden transition"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{item.category}</p>
                <p className="text-orange-500 font-bold text-lg">${item.price}</p>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleOrder(item.name)}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition"
                >
                  Order Now
                </button>
                <Link
                  href={`/products/${item._id}`}
                  className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 py-2 rounded-md text-center transition"
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See All */}
      <div className="flex justify-center mt-8">
        <Link
          href="/products"
          className="px-6 py-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white font-semibold rounded-md transition"
        >
          See All Products
        </Link>
      </div>
    </section>
  );
}
