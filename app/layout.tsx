import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    variable: "--font-poppins",
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
            <body className={cn(poppins.variable, "font-sans antialiased")}>
                {children}
            </body>
        </html>
    );
}
