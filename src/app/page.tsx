"use client";

import { useState, useEffect } from "react";
import BeastDeals from "@/components/BeastDeals";
import ProductHighlights from "@/components/ProductHighlights";
import Hero from "@/components/Hero";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading delay, বা তুমি real data load শেষে এই setLoading(false) করবে
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-b-4 border-gray-200"></div>
      </div>
    );
  }

  return (
    <>
      <BeastDeals />
      <ProductHighlights />
      <Hero />
    </>
  );
}
