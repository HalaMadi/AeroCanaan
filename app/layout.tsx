import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["100", "400", "700"],
    display: "swap"
  });
export const metadata = {
    title: "AeroCanaan Explorer",
    description: "Explore the beautiful destinations in Palestine"
};
export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "bg-background min-h-screen font-sans antialiased",
                    poppins.variable
                )}
            >
                <ThemeProvider defaultTheme="light" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
