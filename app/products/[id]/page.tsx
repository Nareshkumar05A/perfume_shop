import { Suspense } from "react"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductDetail from "@/components/product-detail"
import ReviewSection from "@/components/review-section"
import Loading from "@/components/loading"
import { getProduct } from "@/lib/data"

export default async function ProductPage({ params }: { params: { id: string } }) {
  const productData = await getProduct(params.id)

  if (!productData) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <Suspense fallback={<Loading />}>
          <ProductDetail product={productData} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <ReviewSection productId={params.id} />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}
