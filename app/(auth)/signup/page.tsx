"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, User, Mail, Phone, Lock } from "lucide-react"
import { useRouter } from "next/navigation"

const SignUp = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUserData({
            ...userData,
            [name]: value,
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            })

            const result = await response.json()

            if (!response.ok) {
                console.error(result)
                alert("Signup failed: " + result.error)
                return
            }

            alert("Signup successful!")
            router.push("/login")
        } catch (error) {
            console.error("Error:", error)
            alert("Something went wrong")
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

                <div className="relative bg-black/40 backdrop-blur-md p-8 transition-all duration-300 ease-in-out">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 h-20 w-20 rounded-full bg-orange-500/10 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-orange-500/10 translate-x-1/2 translate-y-1/2"></div>

                    <div className="relative mb-6">
                        <h1 className="text-center text-3xl font-bold text-white mb-2">Create Account</h1>
                        <p className="text-center text-orange-200 text-sm">Join us today and start your journey</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label htmlFor="firstName" className="block text-sm font-medium text-orange-100">
                                    First Name
                                </label>
                                <div className="relative group">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <User className="text-orange-300 group-focus-within:text-orange-500 transition-colors" size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 pl-10 text-white 
                      placeholder-white/50 shadow-sm transition-all duration-200
                      focus:border-orange-500 focus:bg-black/20 focus:outline-none focus:ring-1 focus:ring-orange-500"
                                        value={userData.firstName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="lastName" className="block text-sm font-medium text-orange-100">
                                    Last Name
                                </label>
                                <div className="relative group">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <User className="text-orange-300 group-focus-within:text-orange-500 transition-colors" size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 pl-10 text-white 
                      placeholder-white/50 shadow-sm transition-all duration-200
                      focus:border-orange-500 focus:bg-black/20 focus:outline-none focus:ring-1 focus:ring-orange-500"
                                        value={userData.lastName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="email" className="block text-sm font-medium text-orange-100">
                                Email Address
                            </label>
                            <div className="relative group">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Mail className="text-orange-300 group-focus-within:text-orange-500 transition-colors" size={18} />
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 pl-10 text-white 
                    placeholder-white/50 shadow-sm transition-all duration-200
                    focus:border-orange-500 focus:bg-black/20 focus:outline-none focus:ring-1 focus:ring-orange-500"
                                    value={userData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="mobile" className="block text-sm font-medium text-orange-100">
                                Mobile Number
                            </label>
                            <div className="relative group">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Phone className="text-orange-300 group-focus-within:text-orange-500 transition-colors" size={18} />
                                </div>
                                <input
                                    type="text"
                                    id="mobile"
                                    name="mobile"
                                    placeholder="Phone Number"
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 pl-10 text-white 
                    placeholder-white/50 shadow-sm transition-all duration-200
                    focus:border-orange-500 focus:bg-black/20 focus:outline-none focus:ring-1 focus:ring-orange-500"
                                    value={userData.mobile}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="password" className="block text-sm font-medium text-orange-100">
                                Password
                            </label>
                            <div className="relative group">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Lock className="text-orange-300 group-focus-within:text-orange-500 transition-colors" size={18} />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Create a strong password"
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 pl-10 pr-10 text-white 
                    placeholder-white/50 shadow-sm transition-all duration-200
                    focus:border-orange-500 focus:bg-black/20 focus:outline-none focus:ring-1 focus:ring-orange-500"
                                    value={userData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-orange-300 hover:text-orange-500 transition-colors"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-orange-100">
                                Confirm Password
                            </label>
                            <div className="relative group">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Lock className="text-orange-300 group-focus-within:text-orange-500 transition-colors" size={18} />
                                </div>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 pl-10 pr-10 text-white 
                    placeholder-white/50 shadow-sm transition-all duration-200
                    focus:border-orange-500 focus:bg-black/20 focus:outline-none focus:ring-1 focus:ring-orange-500"
                                    value={userData.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-orange-300 hover:text-orange-500 transition-colors"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
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
                                        Creating Account...
                                    </span>
                                ) : (
                                    "Create Account"
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <span className="text-white/80">Already have an account?</span>{" "}
                        <Link href="/login" className="font-medium text-orange-400 hover:text-orange-300 transition-colors">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
