import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function AuthNotFound() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center px-4 py-10"
      style={{
        backgroundImage: "url('/aka.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-2xl">
        <div className="h-2 w-full bg-orange-500"></div>
        <div className="relative space-y-5 bg-black/40 p-7 text-sm backdrop-blur-md transition-all duration-300 ease-in-out">
          <h2 className="mb-4 text-2xl font-bold text-white">Page Not Found</h2>
          <p className="mb-6 text-orange-200">The page you are looking for doesn't exist or has been moved.</p>
          <Link href="/">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white gap-2">
              <ArrowLeft className="h-4 w-4" />
              Return to home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
