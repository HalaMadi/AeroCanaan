"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import Link from "next/link"
import { User, Lock } from "@phosphor-icons/react"
import { logInSchema } from "@/lib/validationSchemas"

const LoginForm = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const email = e.currentTarget["email"].value
        const password = e.currentTarget["password"].value
        const validation = logInSchema.safeParse({ email, password })

        if (!validation.success) {
            const errors = validation.error.flatten().fieldErrors
            const errorMessage = errors.email?.[0] || errors.password?.[0] || "Invalid input."
            toast.error(errorMessage, { position: "top-center" })
            setLoading(false)
            return
        }

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: { "Content-Type": "application/json" },
            })
            const data = await res.json()

            if (res.ok) {
                localStorage.setItem("auth-token", data.token)
                toast.success("Logged in successfully", {
                    position: "top-center",
                })
                router.push("/")
            } else {
                toast.error(data.error || "Invalid email or password!", {
                    position: "top-center",
                })
            }
        } catch (error) {
            toast.error("Something went wrong. Try again!", {
                position: "top-center",
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div
            className="flex min-h-screen items-center justify-center bg-cover bg-center px-4 py-12"
            style={{
                backgroundImage: "url('/aka.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-2xl">
                {/* Orange accent header */}
                <div className="bg-orange-500 h-2 w-full"></div>

                <div className="relative bg-black/40 backdrop-blur-md p-8 space-y-6 transition-all duration-300 ease-in-out">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 h-20 w-20 rounded-full bg-orange-500/10 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-orange-500/10 translate-x-1/2 translate-y-1/2"></div>

                    <div className="relative">
                        <h1 className="text-center text-3xl font-bold text-white mb-2">Welcome Back</h1>
                        <p className="text-center text-orange-200 text-sm mb-6">Log in to your account to continue</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-orange-100">
                                Email Address
                            </label>
                            <div className="relative group">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <User className="text-orange-300 group-focus-within:text-orange-500 transition-colors" size={20} />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 pl-10 text-white 
                    placeholder-white/50 shadow-sm transition-all duration-200
                    focus:border-orange-500 focus:bg-black/20 focus:outline-none focus:ring-1 focus:ring-orange-500"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium text-orange-100">
                                    Password
                                </label>
                                <Link
                                    href="/forgot-password"
                                    className="text-xs text-orange-300 hover:text-orange-400 transition-colors"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative group">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Lock className="text-orange-300 group-focus-within:text-orange-500 transition-colors" size={20} />
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 pl-10 text-white 
                    placeholder-white/50 shadow-sm transition-all duration-200
                    focus:border-orange-500 focus:bg-black/20 focus:outline-none focus:ring-1 focus:ring-orange-500"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="relative inline-flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="peer h-4 w-4 rounded border-white/30 bg-white/5 text-orange-500 
                    focus:ring-orange-500 focus:ring-offset-0"
                                />
                                <label
                                    htmlFor="remember"
                                    className="ml-2 text-sm text-white/80 peer-checked:text-white transition-colors"
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full rounded-lg bg-orange-500 px-4 py-3 text-white font-medium shadow-lg
                  transition-all duration-200 hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 
                  focus:ring-offset-black/40 focus:outline-none transform hover:-translate-y-0.5
                  ${loading ? "cursor-not-allowed opacity-70" : ""}`}
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center">
                                        <svg
                                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Logging in...
                                    </span>
                                ) : (
                                    "Sign In"
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-black/40 px-2 text-white/60">or</span>
                        </div>
                    </div>

                    <div className="text-center text-sm">
                        <span className="text-white/80">Don&apos;t have an account?</span>{" "}
                        <Link href="/signup" className="font-medium text-orange-400 hover:text-orange-300 transition-colors">
                            Create an account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
