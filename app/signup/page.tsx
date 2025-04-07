"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

const SignUp = () => {
    const router = useRouter();
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
        }
    };
    return (
        <div
            className="flex min-h-screen"
            style={{
                backgroundImage: "url('/aka.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="bg-opacity-80 m-5 w-full max-w-md rounded-2xl p-1 shadow-lg backdrop-blur-md">
                <h1 className="mb-6 text-center text-3xl font-bold text-white">
                    Sign Up
                </h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="mb-4 w-full rounded-xl border p-3 text-white placeholder-white shadow-sm focus:ring focus:ring-orange-300"
                        value={userData.firstName}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="mb-4 w-full rounded-xl border p-3 text-white placeholder-white shadow-sm focus:ring focus:ring-orange-300"
                        value={userData.lastName}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="mb-4 w-full rounded-xl border p-3 text-white placeholder-white shadow-sm focus:ring focus:ring-orange-300"
                        value={userData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="mobile"
                        placeholder="Mobile Number"
                        className="mb-4 w-full rounded-xl border p-3 text-white placeholder-white shadow-sm focus:ring focus:ring-orange-300"
                        value={userData.mobile}
                        onChange={handleInputChange}
                    />
                    <div className="relative w-full">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className="mb-4 w-full rounded-xl border p-3 text-white placeholder-white shadow-sm focus:ring focus:ring-orange-300"
                            value={userData.password}
                            onChange={handleInputChange}
                        />
                        <button
                            type="button"
                            className="absolute top-3 right-4 text-white"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <Eye className="h-5 w-5" />
                            ) : (
                                <EyeOff className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                    <div className="relative w-full">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="mb-4 w-full rounded-xl border p-3 text-white placeholder-white shadow-sm focus:ring focus:ring-orange-300"
                            value={userData.confirmPassword}
                            onChange={handleInputChange}
                        />
                        <button
                            type="button"
                            className="absolute top-3 right-4 text-white"
                            onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                            }
                        >
                            {showConfirmPassword ? (
                                <Eye className="h-5 w-5" />
                            ) : (
                                <EyeOff className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                    <button type="submit" className="w-full rounded-xl bg-orange-500 p-3 text-white shadow-md hover:bg-orange-600">
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-white">
                    Already have an account?{" "}
                    <Link href="/login" className="font-bold text-orange-500">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
