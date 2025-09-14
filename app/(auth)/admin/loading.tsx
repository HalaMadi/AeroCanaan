import { Loader2 } from "lucide-react"

export default function ContactLoading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
        <h2 className="text-xl font-medium text-gray-700">Loading contact form...</h2>
      </div>
    </main>
  )
}
