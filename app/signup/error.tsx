"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SignupError({
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
    <div
      className="flex min-h-screen"
      style={{
        backgroundImage: "url('/aka.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-opacity-80 m-5 w-full max-w-md rounded-2xl p-6 shadow-lg backdrop-blur-md">
        <h2 className="mb-4 text-center text-2xl font-bold text-white">Signup Error</h2>
        <p className="mb-8 text-white text-center">
          We encountered an issue while loading the signup page. Please try again.
        </p>
        <div className="flex flex-col gap-4">
          <Button onClick={reset} className="w-full bg-orange-500 hover:bg-orange-600">
            Try again
          </Button>
          <Link href="/">
            <Button className="w-full bg-transparent border border-white text-white hover:bg-white/10">
              Return to home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

