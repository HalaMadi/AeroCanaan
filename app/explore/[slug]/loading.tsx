import { Loader2 } from "lucide-react"

export default function ExploreDetailLoading() {
  return (
    <main className="min-h-screen bg-white">
      <div
        className="max-w-7xl mx-auto px-4 py-8 md:px-8 flex flex-col items-center justify-center"
        style={{ minHeight: "calc(100vh - 200px)" }}
      >
        <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
        <h2 className="text-xl font-medium text-gray-700 mt-4">Loading Destination...</h2>
      </div>
    </main>
  )
}

