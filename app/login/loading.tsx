import { Loader2 } from "lucide-react"

export default function LoginLoading() {
  return (
    <div
      className="flex min-h-screen bg-cover bg-center items-center justify-center"
      style={{
        backgroundImage: "url('/aka.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-opacity-80 p-8 rounded-lg shadow-md backdrop-blur-md flex flex-col items-center">
        <Loader2 className="h-12 w-12 animate-spin text-white" />
        <h2 className="text-xl font-medium text-white mt-4">Loading...</h2>
      </div>
    </div>
  )
}

