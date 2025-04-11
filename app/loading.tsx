import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-[#FA7436]" />
        <h2 className="text-xl font-medium text-foreground">Loading...</h2>
        <p className="text-center text-muted-foreground">Please wait while we prepare your experience</p>
      </div>
    </div>
  )
}
