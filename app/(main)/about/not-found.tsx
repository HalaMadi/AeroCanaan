import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-foreground">Page Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The about page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-[#FA7436] hover:bg-[#e56a30] text-white">Return to home</Button>
        </Link>
      </div>
    </main>
  )
}
