import { Skeleton } from "@/components/ui/skeleton"

export default function ExploreLoading() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="mb-8 text-center">
          <Skeleton className="h-8 w-64 mx-auto mb-2" />
          <Skeleton className="h-4 w-96 mx-auto" />
        </div>
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-72 w-full rounded-xl" />
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-8 rounded-full" />
          ))}
        </div>
      </section>
    </main>
  )
}
