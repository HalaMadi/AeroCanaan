"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"

export default function MainError({
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <div className="mx-auto max-w-lg text-center">
        <div className="mb-6 flex justify-center">
          <AlertTriangle className="h-16 w-16 text-[#FA7436]" />
        </div>
        <h1 className="mb-4 text-3xl font-bold text-foreground">Something went wrong</h1>
        <p className="mb-8 text-muted-foreground">
          We apologize for the inconvenience. An error occurred while loading this page.
        </p>
        <div className="flex flex-col space-y-3 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <Button onClick={() => reset()} className="bg-[#FA7436] hover:bg-[#e05b2a]">
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
