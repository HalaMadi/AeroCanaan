import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { ToastContainer } from "react-toastify";


const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["100", "400", "700"]
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
                <ThemeProvider defaultTheme="system">
                    {children}
                </ThemeProvider>
                <ToastContainer />
            </body>
        </html>
    );
}