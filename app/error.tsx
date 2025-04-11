"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"

export default function GlobalError({
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <AlertTriangle className="h-16 w-16 text-[#FA7436]" />
        </div>
        <h1 className="mb-2 text-3xl font-bold text-foreground">Something went wrong</h1>
        <p className="mb-6 text-muted-foreground">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
          <Button onClick={() => reset()} className="bg-[#FA7436] hover:bg-[#e05b2a]">
            Try again
          </Button>
          <Link href="/">
            <Button variant="outline" className="w-full">
              Return to home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
