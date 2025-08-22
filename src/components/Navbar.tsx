"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Login from "./Login";

export default function Navbar() {
  const pathname = usePathname();
const user = true;

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  ...(user ? [{ name: "Add Product", href: "/dashboard/add-product" }] : []),
];

  return (
    <div className="fixed top-0 w-full z-50 bg-orange-400 shadow-md">
      <div className="flex justify-between items-center p-1 px-10">
        {/* Logo */}
        <div>
          <p className="text-4xl text-white p-2 flex gap-0 items-center rounded-md font-bold space-y-0">
            Sh<span className="bg-white p-[1px] text-2xl rounded-full">🍔</span>pDay
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center gap-8 items-center text-lg font-semibold">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition px-2 py-1 rounded-md ${
                  isActive
                    ? "bg-white text-orange-500"
                    : "text-white hover:bg-orange-500 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Login */}
        <div>
          <Login />
        </div>
      </div>
    </div>
  );
}
