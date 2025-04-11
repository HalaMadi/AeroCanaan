import { Loader2 } from "lucide-react"

export default function AuthLoading() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage: "url('/aka.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-md overflow-hidden rounded-2xl shadow-2xl">
        <div className="h-2 w-full bg-[#FA7436]"></div>
        <div className="relative space-y-5 bg-background/80 dark:bg-background/40 p-7 text-sm backdrop-blur-md">
          <div className="flex flex-col items-center gap-4 py-8">
            <Loader2 className="h-12 w-12 animate-spin text-[#FA7436]" />
            <h2 className="text-xl font-medium text-foreground">Loading...</h2>
            <p className="text-center text-muted-foreground">Preparing your authentication experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}
