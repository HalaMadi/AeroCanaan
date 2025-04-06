import { Loader2 } from "lucide-react"

export default function TripLoading() {
  return (
    <div className="min-h-screen bg-white p-8 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
        <h2 className="text-xl font-medium text-gray-700">Loading Trips...</h2>
      </div>
    </div>
  )
}

