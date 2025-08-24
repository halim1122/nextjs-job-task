"use client";

import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";

const deals = [
  {
    _id: "6856491feeb5f26de603fe84",
    category: "Earphones",
    name: "RPT-01 Sport On-Ear Headphones",
    seller: "Addidas",
    price: 170,
    stock: 15,
    ratings: 5,
    ratingsCount: 55,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c697ceddb0c2469aaa2eaa7101121d10_9366/RPT-01_Sport_On-Ear_Headphones_Black_CM5015_01_standard.jpg",
    shipping: 48,
    quantity: 0
  },
  {
    _id: "6856491feeb5f26de603fe85",
    category: "Bottle",
    name: "Steel Metal Bottle 1L",
    seller: "Addidas",
    price: 33,
    stock: 7,
    ratings: 4,
    ratingsCount: 62,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a9c04ca9fa51408faf2fac8e0117abb9_9366/Steel_Metal_Bottle_1L_Black_EX7288_01_standard.jpg",
    shipping: 15,
    quantity: 0
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

export default function BeastDealsHero() {
  return (
    <section className="relative bg-gray-100 py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {deals.map((item, index) => (
          <div
            key={item._id}
            className={`relative flex-1 w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition ${
              index % 2 === 0 ? "bg-orange-50" : "bg-orange-50"
            }`}
          >
            {/* Badge */}
            <span className="absolute top-5 left-5 bg-orange-500 text-white px-3 py-1 font-bold rounded z-10">
              50% OFF
            </span>

            {/* Image */}
            <div className="relative w-full h-96 md:h-[28rem]">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white flex flex-col gap-3">
              <p className="text-sm text-red-600 font-bold">{item.category}</p>
              <h3 className="text-2xl font-bold">{item.name}</h3>
              <p className="text-xl font-semibold">${item.price}</p>
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => handleOrder(item.name)}
                  className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-md font-semibold transition"
                >
                  Order Now
                </button>
                <Link
                  href={`/products/${item._id}`}
                  className="border border-orange-500 px-6 py-2 text-orange-500 rounded-md font-semibold hover:bg-orange-500 hover:text-white transition"
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
