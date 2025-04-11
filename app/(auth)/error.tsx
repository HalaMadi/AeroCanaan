"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AuthError({
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
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center px-4 py-10"
      style={{
        backgroundImage: "url('/aka.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-2xl">
        <div className="h-2 w-full bg-orange-500"></div>
        <div className="relative space-y-5 bg-black/40 p-7 text-sm backdrop-blur-md transition-all duration-300 ease-in-out">
          <h2 className="mb-4 text-2xl font-bold text-white">Something went wrong!</h2>
          <p className="mb-6 text-orange-200">We encountered an error while processing your request.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={reset} className="bg-orange-500 hover:bg-orange-600 text-white">
              Try again
            </Button>
            <Link href="/">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Return to home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
