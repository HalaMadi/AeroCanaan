import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to AeroCanaan Explorer</h1>
      <Link href="/explore" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
        Explore Places
      </Link>
    </div>
  )
}

