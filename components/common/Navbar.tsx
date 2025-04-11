"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { SheetTrigger, SheetContent, Sheet } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../Destinations/mode-toggle";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";

const navItems = [
    { key: "1", label: "Home", href: "/" },
    { key: "3", label: "Activities", href: "/explore" },
    { key: "4", label: "Discover", href: "/discover" },
    { key: "5", label: "Contact Us", href: "/contact" }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const pathName = usePathname();
    const router = useRouter();
    const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const role = localStorage.getItem("userRole");
            setUserRole(role);
            const token = localStorage.getItem("auth-token");
            if (token) {
                try {
                    const decoded = jwtDecode<User>(token);
                    setUser(decoded);
                } catch (err) {
                    console.error("Invalid token");
                    localStorage.removeItem("auth-token");
                }
            }
        }
    }, []);

    const handleLogout = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("auth-token");
            setUser(null);
            router.push("/login");
        }
    };

    const extendedNavItems = [
        ...navItems,
        ...(userRole === "ADMIN"
            ? [{ key: "6", label: "Dashboard", href: "/admin" }]
            : [])
    ];
    return (
        <div className="bg-background border-border sticky top-0 z-50 w-full border-b">
            <div className="container mx-auto flex h-16 w-full items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="AeroCanaan Logo"
                        width={60}
                        height={80}
                    />
                    <p className="text-foreground mt-4 -ml-6 text-sm font-bold">
                        AeroCanaan
                    </p>
                </Link>
                <nav className="hidden space-x-6 lg:flex">
                    {extendedNavItems.map((item) => (
                        <Link
                            key={item.key}
                            href={item.href}
                            className={`transition-colors hover:text-amber-600 ${
                                pathName === item.href
                                    ? "border-b-2 border-[#FA7436] font-bold text-[#FA7436]"
                                    : "text-[#222222]"
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <ModeToggle />
                    <div className="hidden items-center space-x-4 text-sm lg:flex">
                        {user ? (
                            <>
                                <span className="font-bold text-[#222222]">
                                    Welcome, {user.firstName}
                                </span>
                                <button
                                    onClick={handleLogout}
                                    className="bg-primary rounded-xl px-4 py-2 text-sm text-white hover:bg-gray-300"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="text-foreground hover:text-amber-600"
                                >
                                    Log In
                                </Link>
                                <Link
                                    href="/signup"
                                    className="rounded-xl bg-[#FA7436] px-4 py-2 text-sm text-[#FEFCFB] hover:bg-amber-600"
                                >
                                    Sign up
                                </Link>
                            </>
                        )}
                    </div>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="ghost" size="lg">
                                <Menu
                                    className="text-foreground h-10 w-10"
                                    aria-label="Menu Icon"
                                />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="bg-background w-[300px] p-6"
                        >
                            <div className="flex flex-col gap-6 pt-6">
                                {extendedNavItems.map((item) => (
                                    <Link
                                        key={item.key}
                                        href={item.href}
                                        className="text-foreground text-lg font-medium transition-colors duration-200 hover:text-[#FA7436]"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <div className="mt-8 flex flex-col gap-4">
                                    {user ? (
                                        <>
                                            <span className="text-center text-[#222222]">
                                                Welcome, {user.firstName}
                                            </span>
                                            <button
                                                onClick={() => {
                                                    handleLogout();
                                                    setIsOpen(false);
                                                }}
                                                className="text-foreground rounded-lg bg-gray-100 py-3 text-center transition-colors duration-200 hover:bg-gray-200"
                                            >
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                href="/login"
                                                className="text-foreground w-full rounded-lg py-3 text-center transition-colors duration-200 hover:bg-gray-100"
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
                                        </>
                                    )}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
