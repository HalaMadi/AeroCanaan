"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminError({
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
    <div className="p-6 flex items-center justify-center min-h-[80vh]">
      <Card className="max-w-md w-full">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 text-red-600">
            <AlertCircle className="h-5 w-5" />
            <CardTitle>Error</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            An error occurred in the admin dashboard. This could be due to a network issue or a problem with the data.
          </p>
          <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-md border border-red-100 dark:border-red-800">
            <p className="text-sm text-red-800 dark:text-red-300">{error.message || "Unknown error occurred"}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={reset} className="bg-[#FA7436] hover:bg-[#e56a30] text-white">
            Try again
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
