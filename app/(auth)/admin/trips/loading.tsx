import { Loader2 } from "lucide-react"

export default function TripsLoading() {
  return (
    <div className="min-h-screen bg-background p-8 flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <Loader2 className="h-12 w-12 animate-spin text-[#FA7436] mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-foreground">Loading Trips</h1>
        <p className="text-muted-foreground mt-2">Please wait while we fetch your vacation plans</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 w-full max-w-[1200px]">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-card shadow-lg rounded-lg overflow-hidden animate-pulse">
            <div className="w-full h-48 bg-muted"></div>
            <div className="p-4">
              <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-5 bg-muted rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-muted rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-muted rounded w-1/3 mb-4"></div>
              <div className="flex justify-between mt-4">
                <div className="h-10 bg-muted rounded w-2/5"></div>
                <div className="h-10 bg-muted rounded w-2/5"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
