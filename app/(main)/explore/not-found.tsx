import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export default function ExploreNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-orange-100 p-4">
            <MapPin className="h-12 w-12 text-orange-500" />
          </div>
        </div>
        <h2 className="mb-4 text-3xl font-bold">Explore Page Not Found</h2>
        <p className="mb-8 text-gray-600">
          We couldn't find the explore page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link href="/">
          <Button className="bg-[#FA7436] hover:bg-[#e56a30] text-white">Return to Home</Button>
        </Link>
      </div>
    </div>
  )
}
