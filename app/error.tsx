"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">Something went wrong!</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        We apologize for the inconvenience. Please try again or return to the homepage.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={reset}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-full font-medium transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
