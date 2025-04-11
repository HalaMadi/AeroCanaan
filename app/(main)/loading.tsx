import { Loader2 } from "lucide-react"

export default function MainLoading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-[#FA7436]" />
        <h2 className="text-xl font-medium text-foreground">Loading your experience...</h2>
        <p className="text-center text-muted-foreground">We're preparing amazing destinations for you to explore</p>
      </div>
    </div>
  )
}
