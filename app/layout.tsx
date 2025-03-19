import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/clsx";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "400", "700"]
});

export const metadata: Metadata = {
    title: "AeroCanaan",
    description: "Organizing trips and routes within Palestine"
};

export default function RootLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={cn(poppins.variable, "antialiased")}>
                {children}
            </body>
        </html>
    );
}
