import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TripNotFound() {
  return (
    <div className="min-h-screen bg-white p-8 flex flex-col justify-center items-center">
      <div className="max-w-md text-center">
        <h2 className="mb-4 text-3xl font-bold">Trips Page Not Found</h2>
        <p className="mb-8 text-gray-600">The trips page you're looking for doesn't exist or has been moved.</p>
        <Link href="/">
          <Button className="bg-orange-500 hover:bg-orange-600">Return to home</Button>
        </Link>
      </div>
    </div>
  )
}

