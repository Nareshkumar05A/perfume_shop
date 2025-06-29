import Link from "next/link"

export default function Banner() {
  return (
    <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Signature Scent</h1>
          <p className="text-lg mb-8">
            Explore our exclusive collection of luxury perfumes crafted to express your unique personality.
          </p>
          <div className="space-x-4">
            <Link
              href="/products"
              className="bg-white text-pink-600 px-6 py-3 rounded-full font-medium hover:bg-pink-50 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/new-arrivals"
              className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              New Arrivals
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/30 -mb-20 -mr-20"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-white/20"></div>
      </div>
    </div>
  )
}
