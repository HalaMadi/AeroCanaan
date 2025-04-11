import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapIcon as MapX } from "lucide-react"

export default function MainNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <div className="mx-auto max-w-lg text-center">
        <div className="mb-6 flex justify-center">
          <MapX className="h-16 w-16 text-[#FA7436]" />
        </div>
        <h1 className="mb-4 text-3xl font-bold text-foreground">Page Not Found</h1>
        <p className="mb-8 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col space-y-3 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <Link href="/explore">
            <Button className="bg-[#FA7436] hover:bg-[#e05b2a]">Explore Destinations</Button>
          </Link>
          <Link href="/">
            <Button variant="outline">Return to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
