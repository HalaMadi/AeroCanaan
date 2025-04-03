import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-6">About AeroCanaan</h1>

        <div className="prose dark:prose-invert">
          <p className="text-lg">
            AeroCanaan is a modern web application built with Next.js 15, React 19, and Tailwind CSS 4.0. This project
            demonstrates the latest features and best practices in web development.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p>
            Our mission is to provide a seamless and intuitive user experience while leveraging cutting-edge
            technologies. We strive to create applications that are not only functional but also aesthetically pleasing
            and accessible to all users.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Technologies Used</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Next.js 15.2.3</li>
            <li>React 19.0.0</li>
            <li>TypeScript</li>
            <li>Tailwind CSS 4.0</li>
            <li>shadcn/ui components</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

