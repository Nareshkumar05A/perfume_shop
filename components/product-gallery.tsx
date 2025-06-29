"use client"

import { useState } from "react"
import Image from "next/image"

interface ProductGalleryProps {
  images: string[]
  name: string
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="flex flex-col space-y-4">
      {/* Main Image */}
      <div className="relative h-[400px] w-full rounded-lg overflow-hidden border">
        <Image src={mainImage || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={`relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
              mainImage === image ? "border-rose-600" : "border-transparent hover:border-gray-300"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${name} - view ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
