import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SignupNotFound() {
  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundImage: "url('/aka.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-opacity-80 m-5 w-full max-w-md rounded-2xl p-6 shadow-lg backdrop-blur-md">
        <h2 className="mb-4 text-center text-2xl font-bold text-white">Page Not Found</h2>
        <p className="mb-8 text-white text-center">
          The signup page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="w-full bg-orange-500 hover:bg-orange-600">Return to home</Button>
        </Link>
      </div>
    </div>
  )
}

