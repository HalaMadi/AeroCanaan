"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, User, Mail, Phone, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

const SignUp = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData)
            });
            const result = await response.json();
            if (!response.ok) {
                console.error(result);
                alert("Signup failed: " + result.error);
                return;
            }
            alert("Signup successful!");
            router.push("/login");
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="flex min-h-screen items-center justify-center bg-cover bg-center px-2 py-8"
            style={{
                backgroundImage: "url('/aka.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="w-full max-w-sm overflow-hidden rounded-xl shadow-xl">
                <div className="h-1.5 w-full bg-orange-500"></div>
                <div className="relative bg-black/40 p-4 backdrop-blur-md transition-all duration-300 ease-in-out">
                    <div className="absolute top-0 left-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10"></div>
                    <div className="absolute right-0 bottom-0 h-24 w-24 translate-x-1/2 translate-y-1/2 rounded-full bg-orange-500/10"></div>
                    <div className="relative mb-4">
                        <h1 className="mb-1 text-center text-2xl font-bold text-white">
                            Create Account
                        </h1>
                        <p className="text-center text-xs text-orange-200">
                            Join us today and start your journey
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6 text-sm">
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                                    <User
                                        className="text-orange-300"
                                        size={16}
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 pl-8 text-white placeholder-white/50 focus:border-orange-500 focus:bg-black/20 focus:ring-1 focus:ring-orange-500"
                                    value={userData.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                                    <User
                                        className="text-orange-300"
                                        size={16}
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 pl-8 text-white placeholder-white/50 focus:border-orange-500 focus:bg-black/20 focus:ring-1 focus:ring-orange-500"
                                    value={userData.lastName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                                <Mail className="text-orange-300" size={16} />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 pl-8 text-white placeholder-white/50 focus:border-orange-500 focus:bg-black/20 focus:ring-1 focus:ring-orange-500"
                                value={userData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                                <Phone className="text-orange-300" size={16} />
                            </div>
                            <input
                                type="text"
                                name="mobile"
                                placeholder="Mobile Number"
                                className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 pl-8 text-white placeholder-white/50 focus:border-orange-500 focus:bg-black/20 focus:ring-1 focus:ring-orange-500"
                                value={userData.mobile}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                                <Lock className="text-orange-300" size={16} />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 pr-8 pl-8 text-white placeholder-white/50 focus:border-orange-500 focus:bg-black/20 focus:ring-1 focus:ring-orange-500"
                                value={userData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center pr-2 text-orange-300 hover:text-orange-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </button>
                        </div>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                                <Lock className="text-orange-300" size={16} />
                            </div>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 pr-8 pl-8 text-white placeholder-white/50 focus:border-orange-500 focus:bg-black/20 focus:ring-1 focus:ring-orange-500"
                                value={userData.confirmPassword}
                                onChange={handleInputChange}
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center pr-2 text-orange-300 hover:text-orange-500"
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                            >
                                {showConfirmPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </button>
                        </div>
                        <div className="pt-1">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none ${
                                    loading
                                        ? "cursor-not-allowed opacity-70"
                                        : ""
                                }`}
                            >
                                {loading
                                    ? "Creating Account..."
                                    : "Create Account"}
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-center text-xs text-white/80">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-medium text-orange-400 hover:text-orange-300"
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
