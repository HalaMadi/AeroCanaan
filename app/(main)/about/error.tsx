"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutError({
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
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-red-500">Error Loading About Page</h1>
        <p className="text-lg text-foreground mb-8">
          We encountered an issue while loading the about page information. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="bg-[#FA7436] hover:bg-[#e56a30] text-white">
            Try again
          </Button>
          <Link href="/">
            <Button variant="outline">Return to home</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
