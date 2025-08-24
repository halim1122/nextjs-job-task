"use client";

import Link from "next/link";

export default function Footer() {

  return (
    <footer className="bg-orange-400 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div>
          <p className="text-4xl text-white p-2 flex gap-0 items-center rounded-md font-bold">
            Sh<span className="bg-white p-[1px] text-2xl rounded-full">🍔</span>pDay
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-lg">
          <Link href="/" className="hover:underline transition">
            Home
          </Link>
          <Link href="/products" className="hover:underline transition">
            Products
          </Link>
        </div>

        {/* Copyright + Session Info */}
        <div className="text-sm text-white/80 text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Sh🍔pDay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
