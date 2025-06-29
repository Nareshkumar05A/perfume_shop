import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"

export async function GET(request: Request, { params }: { params: { productId: string } }) {
  try {
    const productId = params.productId
    const { db } = await connectToDatabase()

    const reviews = await db.collection("reviews").find({ productId }).sort({ date: -1 }).toArray()

    return NextResponse.json(reviews)
  } catch (error) {
    console.error("Error fetching reviews:", error)
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 })
  }
}
