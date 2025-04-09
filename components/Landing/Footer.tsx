import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Send } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted pt-16 mt-10 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col">
            <div className="mb-4 flex items-center">
              <h2 className="text-2xl font-bold text-foreground">
                Aero
                <span className="text-[#FA7436]">Canaan</span>
              </h2>
            </div>
            <p className="mb-6 text-xs text-muted-foreground">
              Discover the beauty and rich history of Palestine with our expertly guided tours and unforgettable travel
              experiences.
            </p>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Destinations", "Tours", "Blog"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-muted-foreground transition-colors hover:text-[#FA7436]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-[#FA7436]" />
                <span className="text-muted-foreground">123 Travel Street, Jerusalem, Palestine</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-[#FA7436]" />
                <span className="text-muted-foreground">+970 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-[#FA7436]" />
                <span className="text-muted-foreground">info@aerocanaan.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold text-foreground">Newsletter</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Subscribe to our newsletter for travel tips, exclusive offers, and updates on new destinations.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                aria-label="Email for newsletter"
              />
              <Button type="submit" className="rounded-l-none bg-[#FA7436] hover:bg-[#e56a30]" aria-label="Subscribe">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
        <div className="my-8 h-px w-full bg-border"></div>
        <div className="flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:space-y-0">
          <p className="text-sm text-muted-foreground">© {currentYear} AeroCanaan. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-[#FA7436]">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-[#FA7436]">
              Terms of Service
            </Link>
            <Link href="/faq" className="text-sm text-muted-foreground hover:text-[#FA7436]">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

