import { NextResponse } from "next/server"
import { ObjectId } from "mongodb"
import { connectToDatabase } from "@/lib/mongodb"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const { db } = await connectToDatabase()

    let product
    try {
      // Try to find by MongoDB ObjectId
      product = await db.collection("products").findOne({ _id: new ObjectId(id) })
    } catch (e) {
      // If not a valid ObjectId, try to find by string ID
      product = await db.collection("products").findOne({ _id: id })
    }

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error("Error fetching product:", error)
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 })
  }
}
