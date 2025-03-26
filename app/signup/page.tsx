"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundImage: "url('/aka.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-md bg-opacity-80 backdrop-blur-md p-1 rounded-2xl shadow-lg m-5">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Sign Up</h1>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="w-full p-3 border rounded-xl mb-4 shadow-sm focus:ring focus:ring-orange-300 placeholder-white text-white"
          value={userData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="w-full p-3 border rounded-xl mb-4 shadow-sm focus:ring focus:ring-orange-300 text-white placeholder-white"
          value={userData.lastName}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full p-3 border rounded-xl mb-4 shadow-sm focus:ring focus:ring-orange-300 text-white placeholder-white"
          value={userData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          className="w-full p-3 border rounded-xl mb-4 shadow-sm focus:ring focus:ring-orange-300 text-white placeholder-white"
          value={userData.mobile}
          onChange={handleInputChange}
        />
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded-xl mb-4 shadow-sm focus:ring focus:ring-orange-300 text-white placeholder-white"
            value={userData.password}
            onChange={handleInputChange}
          />
          <button
            type="button"
            className="absolute text-white top-3 right-4"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
          </button>
        </div>
        <div className="relative w-full">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-3 border rounded-xl mb-4 shadow-sm focus:ring focus:ring-orange-300 text-white placeholder-white"
            value={userData.confirmPassword}
            onChange={handleInputChange}
          />
          <button
            type="button"
            className="absolute top-3 text-white right-4"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
          </button>
        </div>
        <button className="w-full bg-orange-500 text-white p-3 rounded-xl shadow-md hover:bg-orange-600">
          Sign Up
        </button>
        <p className="text-sm text-white text-center mt-4">
          Already have an account? <Link href="/login" className="font-bold text-orange-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
