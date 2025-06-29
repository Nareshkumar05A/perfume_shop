import { type NextRequest, NextResponse } from "next/server"
import { addReview } from "@/lib/reviews"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const productId = formData.get("productId") as string
    const userName = formData.get("userName") as string
    const rating = Number.parseInt(formData.get("rating") as string)
    const comment = formData.get("comment") as string

    if (!productId || !userName || !comment || isNaN(rating)) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    const reviewData = {
      userName,
      rating,
      comment,
    }

    const review = await addReview(productId, reviewData)

    return NextResponse.json({ success: true, review })
  } catch (error) {
    console.error("Failed to add review:", error)
    return NextResponse.json({ success: false, message: "Failed to add review" }, { status: 500 })
  }
}
