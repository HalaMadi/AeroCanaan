"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import { User, Lock } from "@phosphor-icons/react";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const email = e.currentTarget["email"].value;
    const password = e.currentTarget["password"].value;

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        const token = await res.text();
        localStorage.setItem("auth-token", token);
        router.push("/"); // Redirect user to home page
      } else {
        toast.error("Invalid email or password!", { position: "top-center" });
      }
    } catch (error) {
      toast.error("Something went wrong. Try again!", { position: "top-center" });
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
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-md p-6 space-y-6 bg-opacity-80 backdrop-blur-md rounded-lg shadow-md m-17">
        <h1 className="text-2xl font-bold text-center text-white mb-4">Log In</h1>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="text-white" size={20} />
            </div>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              className="pl-10 w-full px-4 py-2 border placeholder-white text-white rounded-md shadow-sm focus:ring focus:ring-orange-300"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-white items-center">
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="text-white" size={20} />
            </div>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              className="pl-10 w-full px-4 py-2 border placeholder-white text-white rounded-md shadow-sm focus:ring focus:ring-orange-300"
              required
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
          />
          <label htmlFor="remember" className="ml-2 block text-sm text-white">
            Remember me
          </label>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-orange-500 transition-colors ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>

        <div className="text-center text-sm">
          <span className="text-white">Don&apos;t have an account?</span>{" "}
          <Link href="/signup" className="text-orange-500 hover:text-orange-600 font-medium">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
