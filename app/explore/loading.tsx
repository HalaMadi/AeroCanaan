import { Loader2 } from "lucide-react"

export default function ExploreLoading() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center py-16">
        <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
        <h2 className="text-xl font-medium text-gray-700 mt-4">Loading Destinations...</h2>
      </div>
    </div>
  )
}

