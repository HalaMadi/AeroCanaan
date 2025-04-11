import { Skeleton } from "@/components/ui/skeleton"

export default function ExploreDetailLoading() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Skeleton className="h-4 w-24" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Skeleton className="h-10 w-48 mb-4" />

            <div className="flex items-center gap-4 mb-6">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-32" />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="col-span-2">
                <Skeleton className="h-80 w-full rounded-lg" />
              </div>
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-40 w-full rounded-lg" />
              ))}
            </div>

            <Skeleton className="h-8 w-48 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-8" />

            <Skeleton className="h-8 w-48 mb-4" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-16 w-full rounded-lg" />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <Skeleton className="h-[500px] w-full rounded-lg" />
          </div>
        </div>
      </div>
    </main>
  )
}
