"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactError({
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
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="mx-auto w-full max-w-md">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold text-red-500">Error</h1>
          <p className="text-muted-foreground text-sm">
            We encountered an issue while loading the contact page. Please try again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button onClick={reset} className="bg-[#FA7436] hover:bg-[#e56a30] text-white">
              Try again
            </Button>
            <Link href="/">
              <Button variant="outline">Return to home</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
