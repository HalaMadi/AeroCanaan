import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ExploreDetailNotFound() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-8">
        <div className="text-center py-16">
          <h2 className="mb-4 text-3xl font-bold">Destination Not Found</h2>
          <p className="mb-8 text-gray-600 max-w-md mx-auto">
            The destination you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/explore">
            <Button className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Explore
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

