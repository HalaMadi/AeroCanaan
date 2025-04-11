import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export default function DiscoverNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-orange-100 p-4">
            <MapPin className="h-12 w-12 text-orange-500" />
          </div>
        </div>
        <h2 className="mb-4 text-3xl font-bold">Destination Not Found</h2>
        <p className="mb-8 text-gray-600">
          We couldn't find the destination you're looking for. It might have been removed or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/discover">
            <Button className="bg-[#FA7436] hover:bg-[#e56a30] text-white">Browse All Destinations</Button>
          </Link>
          <Link href="/">
            <Button variant="outline">Return to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
