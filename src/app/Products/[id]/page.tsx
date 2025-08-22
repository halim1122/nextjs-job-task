// app/products/[id]/page.tsx

import ProductDetailsClient from "./ProductDetailsClient"

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
  params: { id: string }
}

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = params

  // Server fetch
  const res = await fetch(`https://my-app-server-coral.vercel.app/products/${id}`, {
    cache: "no-store",
  })
  if (!res.ok) throw new Error("Failed to fetch product")
  const product: Product = await res.json()

  // Pass product to client component
  return <ProductDetailsClient product={product} />
}
