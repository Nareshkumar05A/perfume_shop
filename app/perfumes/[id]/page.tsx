import Link from "next/link"
import { notFound } from "next/navigation"
import { getPerfumeById, getRelatedPerfumes } from "@/lib/perfumes"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Share2, ShoppingCart, Star } from "lucide-react"
import ReviewSection from "@/components/review-section"
import ProductGallery from "@/components/product-gallery"
import RelatedProducts from "@/components/related-products"

export default async function PerfumePage({ params }: { params: { id: string } }) {
  const perfume = await getPerfumeById(params.id)

  if (!perfume) {
    notFound()
  }

  const relatedPerfumes = await getRelatedPerfumes(perfume.category, perfume._id)

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm mb-8">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <span className="mx-2 text-muted-foreground">/</span>
        <Link
          href={`/collections/${perfume.category.toLowerCase()}`}
          className="text-muted-foreground hover:text-foreground"
        >
          {perfume.category}
        </Link>
        <span className="mx-2 text-muted-foreground">/</span>
        <span>{perfume.name}</span>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Gallery */}
        <ProductGallery images={perfume.images} name={perfume.name} />

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{perfume.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(perfume.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-muted-foreground">
              {perfume.rating.toFixed(1)} ({perfume.reviewCount} reviews)
            </span>
          </div>

          <div className="text-2xl font-bold mb-6">${perfume.price.toFixed(2)}</div>

          <p className="text-muted-foreground mb-6">{perfume.shortDescription}</p>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Size</h3>
            <div className="flex space-x-3">
              {perfume.sizes.map((size) => (
                <Button
                  key={size.value}
                  variant="outline"
                  className="border-2 hover:border-rose-600 hover:text-rose-600"
                >
                  {size.label} ({size.value}ml)
                </Button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex space-x-3 mb-8">
            <Button className="flex-1 bg-rose-600 hover:bg-rose-700">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">
              <p>{perfume.description}</p>
            </TabsContent>
            <TabsContent value="details" className="pt-4">
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">Brand:</span> {perfume.brand}
                </li>
                <li>
                  <span className="font-medium">Fragrance Family:</span> {perfume.fragranceFamily}
                </li>
                <li>
                  <span className="font-medium">Concentration:</span> {perfume.concentration}
                </li>
                <li>
                  <span className="font-medium">Launch Year:</span> {perfume.launchYear}
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="ingredients" className="pt-4">
              <p>{perfume.ingredients}</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewSection reviews={perfume.reviews} productId={perfume._id} />

      {/* Related Products */}
      <RelatedProducts products={relatedPerfumes} />
    </main>
  )
}
