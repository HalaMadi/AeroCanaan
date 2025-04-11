"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertCircle } from "lucide-react"

export default function UserProfileError({
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
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-100 p-6">
        <h2 className="text-2xl font-bold mb-6 text-[#E17100]">Menu</h2>
        <nav>
          <ul className="space-y-4 text-gray-700">
            <li className="font-semibold text-[#E17100] cursor-pointer hover:text-[#E17100]">Profile</li>
            <li className="cursor-pointer hover:text-[#E17100]">Trips</li>
            <li className="cursor-pointer hover:text-[#E17100]">Settings</li>
            <li className="cursor-pointer hover:text-[#E17100]">Logout</li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-10 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(225,113,0,0.15)]">
          <div className="h-2 w-full bg-gradient-to-r from-[#E17100] to-orange-400"></div>
          <div className="relative space-y-6 bg-white p-8 text-sm transition-all duration-300 ease-in-out">
            <div className="flex items-center gap-3 text-red-500 mb-4">
              <AlertCircle className="h-6 w-6" />
              <h2 className="text-xl font-bold">Error Loading Profile</h2>
            </div>
            <p className="text-gray-600">
              We encountered an issue while loading your profile information. This could be due to a network issue or a
              problem with your account.
            </p>
            <div className="flex gap-4 pt-4">
              <Button
                onClick={reset}
                className="flex-1 rounded-md bg-gradient-to-r from-[#E17100] to-orange-500 px-4 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Try Again
              </Button>
              <Link href="/">
                <Button className="rounded-md bg-gray-200 px-4 py-3 text-sm font-medium text-gray-700 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
