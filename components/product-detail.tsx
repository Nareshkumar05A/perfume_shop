"use client"

import { useState } from "react"
import Image from "next/image"
import { Share2, Heart, ShoppingBag } from "lucide-react"
import type { Product } from "@/lib/types"

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.shortDescription,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src={product.images[selectedImage] || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex space-x-2 overflow-x-auto pb-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              className={`relative w-20 h-20 rounded-md overflow-hidden ${
                selectedImage === index ? "ring-2 ring-pink-600" : "opacity-70"
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${product.name} - view ${index + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
        <p className="text-2xl text-pink-600 font-semibold mb-4">${product.price.toFixed(2)}</p>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Description</h3>
          <p className="text-gray-600">{product.description}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Size</h3>
          <div className="flex space-x-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 border rounded-md ${
                  selectedSize === size
                    ? "border-pink-600 bg-pink-50 text-pink-600"
                    : "border-gray-300 text-gray-700 hover:border-pink-300"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Notes</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center p-3 bg-pink-50 rounded-lg">
              <p className="text-sm font-medium text-gray-800">Top Notes</p>
              <p className="text-sm text-gray-600">{product.notes.top.join(", ")}</p>
            </div>
            <div className="text-center p-3 bg-pink-50 rounded-lg">
              <p className="text-sm font-medium text-gray-800">Heart Notes</p>
              <p className="text-sm text-gray-600">{product.notes.heart.join(", ")}</p>
            </div>
            <div className="text-center p-3 bg-pink-50 rounded-lg">
              <p className="text-sm font-medium text-gray-800">Base Notes</p>
              <p className="text-sm text-gray-600">{product.notes.base.join(", ")}</p>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mb-6">
          <button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors">
            <ShoppingBag size={20} />
            <span>Add to Cart</span>
          </button>
          <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Heart size={20} className="text-gray-700" />
          </button>
          <button
            className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={handleShare}
          >
            <Share2 size={20} className="text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  )
}
