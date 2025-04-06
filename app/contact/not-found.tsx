import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ContactNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="max-w-md text-center">
        <h2 className="mb-4 text-3xl font-bold">Contact Page Not Found</h2>
        <p className="mb-8 text-gray-600">The contact page you're looking for doesn't exist or has been moved.</p>
        <Link href="/">
          <Button className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Return to home
          </Button>
        </Link>
      </div>
    </main>
  )
}

