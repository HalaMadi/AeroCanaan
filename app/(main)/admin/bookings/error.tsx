"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"

export default function BookingsError({
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
    <div className="p-6 bg-background">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Bookings</h1>
          <p className="text-muted-foreground">Manage customer bookings and reservations</p>
        </div>
      </div>

      <div className="bg-card rounded-lg shadow p-8 text-center">
        <div className="mb-6 flex justify-center">
          <AlertTriangle className="h-16 w-16 text-[#FA7436]" />
        </div>
        <h2 className="mb-4 text-2xl font-bold text-foreground">Error Loading Bookings</h2>
        <p className="mb-8 text-muted-foreground">
          We encountered an issue while loading the booking data. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="bg-[#FA7436] hover:bg-[#e05b2a]">
            Try again
          </Button>
          <Link href="/admin">
            <Button variant="outline">Return to admin dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
