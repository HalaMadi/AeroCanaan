"use client";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    return (
        <div className="relative">
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:bg-accent rounded-md p-2"
                aria-label="Toggle theme"
            >
                <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute top-2 left-2 h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
            </button>
        </div>
    );
}
