import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LoginNotFound() {
  return (
    <div
      className="flex min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/aka.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-opacity-80 m-17 w-full max-w-md space-y-6 rounded-lg p-6 shadow-md backdrop-blur-md">
        <h2 className="mb-4 text-center text-2xl font-bold text-white">Page Not Found</h2>
        <p className="mb-8 text-white text-center">
          The login page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="w-full bg-orange-500 hover:bg-orange-600">Return to home</Button>
        </Link>
      </div>
    </div>
  )
}

