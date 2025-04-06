"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TripError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col justify-center items-center">
      <div className="max-w-md text-center">
        <h2 className="mb-4 text-3xl font-bold text-red-500">Error Loading Trips</h2>
        <p className="mb-8 text-gray-600">We encountered an issue while loading the trips. Please try again.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} variant="default" className="bg-orange-500 hover:bg-orange-600">
            Try again
          </Button>
          <Link href="/">
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
              Return to home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

