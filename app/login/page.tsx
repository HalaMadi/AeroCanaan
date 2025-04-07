"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import { User, Lock } from "@phosphor-icons/react";
import { logInSchema } from "@/lib/validationSchemas";

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const email = e.currentTarget["email"].value;
        const password = e.currentTarget["password"].value;

        const validation = logInSchema.safeParse({ email, password });
        if (!validation.success) {
            const errors = validation.error.flatten().fieldErrors;
            const errorMessage =
                errors.email?.[0] || errors.password?.[0] || "Invalid input.";
            toast.error(errorMessage, { position: "top-center" });
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: { "Content-Type": "application/json" }
            });
            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("auth-token", data.token);
                toast.success("Logged in successfully", {
                    position: "top-center",
                });
                router.push("/");
            } else {
                toast.error(data.error ||"Invalid email or password!", {
                    position: "top-center"
                });
            }
        } catch (error) {
            toast.error("Something went wrong. Try again!", {
                position: "top-center"
            });
        } finally {
            setLoading(false);
        }
    };
    return (
        <div
            className="flex min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: "url('/aka.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <form onSubmit={handleSubmit} className="bg-opacity-80 m-17 w-full max-w-md space-y-6 rounded-lg p-6 shadow-md backdrop-blur-md">
                <h1 className="mb-4 text-center text-2xl font-bold text-white">
                    Log In
                </h1>
                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white"
                    >
                        Email Address
                    </label>
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <User className="text-white" size={20} />
                        </div>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            className="w-full rounded-md border px-4 py-2 pl-10 text-white placeholder-white shadow-sm focus:ring focus:ring-orange-300"
                            required
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-white"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Lock className="text-white" size={20} />
                        </div>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            className="w-full rounded-md border px-4 py-2 pl-10 text-white placeholder-white shadow-sm focus:ring focus:ring-orange-300"
                            required
                        />
                    </div>
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    />
                    <label
                        htmlFor="remember"
                        className="ml-2 block text-sm text-white"
                    >
                        Remember me
                    </label>
                </div>
                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full rounded-md bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-600 focus:ring-orange-500 focus:outline-none ${loading ? "cursor-not-allowed opacity-50" : ""}`}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </div>
                <div className="text-center text-sm">
                    <span className="text-white">
                        Don&apos;t have an account?
                    </span>{" "}
                    <Link
                        href="/signup"
                        className="font-medium text-orange-500 hover:text-orange-600"
                    >
                        Sign up
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
