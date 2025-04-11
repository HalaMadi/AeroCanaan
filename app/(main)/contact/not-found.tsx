import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="mx-auto w-full max-w-md">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold text-foreground">Page Not Found</h1>
          <p className="text-muted-foreground text-sm">
            The contact page you are looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <Button className="bg-[#FA7436] hover:bg-[#e56a30] text-white">Return to home</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
