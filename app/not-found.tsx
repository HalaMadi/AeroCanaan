import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="max-w-md text-center">
        <h2 className="mb-4 text-3xl font-bold">Page Not Found</h2>
        <p className="mb-8 text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
        <Link href="/">
          <Button>Return to home</Button>
        </Link>
      </div>
    </div>
  )
}

