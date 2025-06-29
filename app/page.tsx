import Link from "next/link"
import Image from "next/image"
import { getPerfumes } from "@/lib/perfumes"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default async function Home() {
  const perfumes = await getPerfumes()

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Banner */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/images/hero-banner.jpg"
          alt="Luxury Perfumes Collection"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Discover Your Signature Scent</h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Explore our curated collection of luxury fragrances that tell your unique story
          </p>
          <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
            <Link href="#featured-perfumes" className="flex items-center">
              Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Perfumes */}
      <section id="featured-perfumes" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Fragrances</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most popular scents, crafted by world-renowned perfumers using the finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perfumes.map((perfume) => (
            <Link href={`/perfumes/${perfume._id}`} key={perfume._id} className="group">
              <div className="relative overflow-hidden rounded-lg transition-all duration-300 bg-white shadow-md hover:shadow-xl group-hover:translate-y-[-5px]">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={perfume.images[0] || "/placeholder.svg"}
                    alt={perfume.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{perfume.name}</h3>
                  <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{perfume.shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-rose-600">${perfume.price.toFixed(2)}</span>
                    <span className="text-xs px-2 py-1 bg-rose-100 text-rose-800 rounded-full">{perfume.category}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals Banner */}
      <section className="bg-gradient-to-r from-rose-100 to-pink-100 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Be the first to experience our latest fragrances, crafted to captivate and inspire.
            </p>
            <Button variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white">
              <Link href="/collections/new-arrivals">View Collection</Link>
            </Button>
          </div>
          <div className="md:w-1/2 relative h-64 w-full md:h-80 rounded-lg overflow-hidden">
            <Image src="/images/new-arrivals.jpg" alt="New Arrivals Collection" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="italic mb-4">
                "The attention to detail in these fragrances is remarkable. My signature scent has never failed to get
                compliments."
              </p>
              <p className="font-semibold">- Emma S.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="italic mb-4">
                "Exceptional quality and lasting power. The Rose Noir has become my daily companion."
              </p>
              <p className="font-semibold">- James T.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="italic mb-4">
                "The packaging is as luxurious as the scent itself. Perfect for gifting or treating yourself."
              </p>
              <p className="font-semibold">- Sophia L.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
