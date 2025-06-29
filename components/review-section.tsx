"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star, User } from "lucide-react"
import { useRouter } from "next/navigation"

interface Review {
  _id: string
  userName: string
  rating: number
  comment: string
  date: string
}

interface ReviewSectionProps {
  reviews: Review[]
  productId: string
}

export default function ReviewSection({ reviews, productId }: ReviewSectionProps) {
  const router = useRouter()
  const [newReview, setNewReview] = useState({
    userName: "",
    rating: 5,
    comment: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("userName", newReview.userName)
      formData.append("rating", newReview.rating.toString())
      formData.append("comment", newReview.comment)
      formData.append("productId", productId)

      const response = await fetch("/api/reviews", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setNewReview({ userName: "", rating: 5, comment: "" })
        setShowForm(false)
        router.refresh() // Refresh the page to show the new review
      }
    } catch (error) {
      console.error("Failed to submit review:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        {!showForm && (
          <Button onClick={() => setShowForm(true)} className="bg-rose-600 hover:bg-rose-700">
            Write a Review
          </Button>
        )}
      </div>

      {/* Review Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-4">Share Your Experience</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={newReview.userName}
                onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="rating" className="block text-sm font-medium mb-1">
                Rating
              </label>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`h-6 w-6 ${
                        star <= newReview.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium mb-1">
              Your Review
            </label>
            <Textarea
              id="comment"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              rows={4}
              required
            />
          </div>

          <div className="flex justify-end space-x-3">
            <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-rose-600 hover:bg-rose-700" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
          </div>
        </form>
      )}

      {/* Reviews List */}
      {reviews.length > 0 ? (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review._id} className="border-b pb-6">
              <div className="flex items-center mb-2">
                <div className="bg-gray-100 rounded-full p-2 mr-3">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
                <div>
                  <h4 className="font-medium">{review.userName}</h4>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-xs text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-muted-foreground">No reviews yet. Be the first to share your experience!</p>
        </div>
      )}
    </section>
  )
}
