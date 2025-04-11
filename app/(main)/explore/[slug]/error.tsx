"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ExploreDetailError({
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
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold text-red-500">Error Loading Place Details</h2>
        <p className="mb-8 text-gray-600">We encountered an issue while loading this destination. Please try again.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="bg-[#FA7436] hover:bg-[#e56a30] text-white">
            Try again
          </Button>
          <Link href="/explore">
            <Button variant="outline">Back to Explore</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
