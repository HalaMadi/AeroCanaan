import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-background">
      <div className="mx-auto w-full max-w-md">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-foreground">Contact Us</h1>
            <p className="text-muted-foreground text-sm">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <form
            action="https://formspree.io/f/mvgklprl"
            method="POST"
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="first-name" className="text-sm font-medium text-foreground">
                  First name
                </label>
                <Input id="first-name" name="firstName" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="text-sm font-medium text-foreground">
                  Last name
                </label>
                <Input id="last-name" name="lastName" placeholder="Doe" required />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea id="message" name="message" placeholder="Your message here..." className="min-h-[120px]" required />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
