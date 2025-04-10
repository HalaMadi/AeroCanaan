import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/common/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
                <ToastContainer position="top-center" />
                <ThemeProvider defaultTheme="light" enableSystem>
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
