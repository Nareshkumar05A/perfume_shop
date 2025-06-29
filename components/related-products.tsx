import Link from "next/link"
import Image from "next/image"

interface Product {
  _id: string
  name: string
  price: number
  images: string[]
  category: string
}

interface RelatedProductsProps {
  products: Product[]
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={`/perfumes/${product._id}`} key={product._id} className="group">
            <div className="relative overflow-hidden rounded-lg transition-all duration-300 bg-white shadow-sm hover:shadow-md group-hover:translate-y-[-5px]">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm mb-1 line-clamp-1">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-rose-600">${product.price.toFixed(2)}</span>
                  <span className="text-xs px-2 py-0.5 bg-rose-100 text-rose-800 rounded-full">{product.category}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
