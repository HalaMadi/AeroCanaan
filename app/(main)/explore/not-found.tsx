import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ExploreNotFound() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto text-center py-16">
        <h2 className="mb-4 text-3xl font-bold">Explore Page Not Found</h2>
        <p className="mb-8 text-gray-600">The explore page you're looking for doesn't exist or has been moved.</p>
        <Link href="/">
          <Button>Return to home</Button>
        </Link>
      </div>
    </div>
  )
}

