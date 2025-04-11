"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"

export default function TripsError({
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
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <AlertTriangle className="h-16 w-16 text-[#FA7436]" />
        </div>
        <h2 className="mb-4 text-3xl font-bold text-foreground">Error Loading Trips</h2>
        <p className="mb-8 text-muted-foreground">
          We encountered an issue while loading your trips. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="bg-[#FA7436] hover:bg-[#e05b2a]">
            Try again
          </Button>
          <Link href="/">
            <Button variant="outline">Return to home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
