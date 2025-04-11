import { Loader2 } from "lucide-react"

export default function DiscoverLoading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
        <h2 className="text-xl font-medium text-gray-700">Loading destinations...</h2>
        <p className="text-gray-500 text-center max-w-md">
          We're gathering the most beautiful places in Palestine for you to explore.
        </p>
      </div>
    </div>
  )
}
