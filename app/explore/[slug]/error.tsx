"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

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
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-8">
        <div className="text-center py-16">
          <h2 className="mb-4 text-3xl font-bold text-red-500">Error Loading Destination</h2>
          <p className="mb-8 text-gray-600 max-w-md mx-auto">
            We encountered an issue while loading this destination. Please try again or explore other destinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={reset} variant="default">
              Try again
            </Button>
            <Link href="/explore">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Explore
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

