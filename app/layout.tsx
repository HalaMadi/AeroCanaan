import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Poppins } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/common/Navbar"

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "400", "700"],
    display: "swap",
  subsets: ["latin"],
  })

export const metadata = {
  title: "AeroCanaan",
  description: "Explore the beautiful destinations in Palestine",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased", poppins.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <div className="relative flex min-h-screen flex-col bg-background">
            <Navbar />
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

