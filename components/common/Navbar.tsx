"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { SheetTrigger, SheetContent, Sheet } from "../ui/sheet"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { ModeToggle } from "../Destinations/mode-toggle"

const navItems = [
  { key: "1", label: "Home", href: "/" },
  { key: "2", label: "Activities", href: "/trips" },
  { key: "3", label: "Destinations", href: "/explore" },
  { key: "4", label: "Contact Us", href: "/contact" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()
  return (
    <div className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="container mx-auto flex w-full items-center justify-between px-4 md:px-6 h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="AeroCanaan Logo" width={60} height={80} />
          <p className="-ml-6 text-sm font-bold text-foreground mt-4">AeroCanaan</p>
        </Link>
        <nav className="hidden space-x-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`transition-colors hover:text-amber-600 ${
                pathName === item.href ? "border-b-2 border-[#FA7436] font-bold text-[#FA7436]" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <div className="hidden items-center space-x-4 text-sm lg:flex">
            <Link href="/login" className="text-foreground hover:text-amber-600">
              Log In
            </Link>
            <Link href="/signup" className="rounded-xl bg-[#FA7436] px-4 py-2 text-sm text-white hover:bg-amber-600">
              Sign up
            </Link>
          </div>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="lg">
              <Menu className="h-10 w-10 text-foreground" aria-label="Menu Icon" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background p-6">
            <div className="flex flex-col gap-6 pt-6">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-lg font-medium text-foreground transition-colors duration-200 hover:text-[#FA7436]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <Link
                  href="/login"
                  className="w-full rounded-lg py-3 text-center text-foreground transition-colors duration-200 hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="w-full rounded-lg bg-[#FA7436] py-3 text-center text-white transition-colors duration-200 hover:bg-[#E5672E]"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default Navbar

