import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserX } from "lucide-react"

export default function UserProfileNotFound() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-100 p-6">
        <h2 className="text-2xl font-bold mb-6 text-[#E17100]">Menu</h2>
        <nav>
          <ul className="space-y-4 text-gray-700">
            <li className="font-semibold text-[#E17100] cursor-pointer hover:text-[#E17100]">Profile</li>
            <li className="cursor-pointer hover:text-[#E17100]">Trips</li>
            <li className="cursor-pointer hover:text-[#E17100]">Settings</li>
            <li className="cursor-pointer hover:text-[#E17100]">Logout</li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-10 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(225,113,0,0.15)]">
          <div className="h-2 w-full bg-gradient-to-r from-[#E17100] to-orange-400"></div>
          <div className="relative space-y-6 bg-white p-8 text-sm transition-all duration-300 ease-in-out">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-gray-100 p-4">
                <UserX className="h-12 w-12 text-[#E17100]" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-center">Profile Not Found</h2>
            <p className="text-gray-600 text-center">
              The user profile you are looking for doesn't exist or you don't have permission to view it.
            </p>
            <div className="flex justify-center pt-4">
              <Link href="/">
                <Button className="rounded-md bg-gradient-to-r from-[#E17100] to-orange-500 px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
