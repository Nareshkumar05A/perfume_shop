"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/types"

export default function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/products/${product._id}`}>
      <div
        className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
          isHovered ? "shadow-xl transform scale-[1.03]" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-64 overflow-hidden">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          />
          {product.isNew && (
            <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              NEW
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.shortDescription}</p>
          <div className="flex justify-between items-center">
            <span className="text-pink-600 font-bold">${product.price.toFixed(2)}</span>
            <div
              className={`px-3 py-1 rounded-full text-white text-sm font-medium transition-colors ${
                isHovered ? "bg-pink-600" : "bg-gray-500"
              }`}
            >
              View Details
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
