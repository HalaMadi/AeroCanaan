"use client";
import React, { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { decode } from "jsonwebtoken";
import { Trip } from "@/types/Interface";

interface PersonalDetailsCardProps {
    trip: Trip;
    numberOfPeople: number;
    totalPrice: number;
    handleNextStep: () => void;
    handlePreviousStep: () => void;
}

const PersonalDetailsCard: React.FC<PersonalDetailsCardProps> = ({
    trip,
    numberOfPeople,
    totalPrice,
    handleNextStep,
    handlePreviousStep
}) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: ""
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [isBookingComplete, setIsBookingComplete] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("auth-token");
        if (token) {
            try {
                const decodedToken = decode(token) as {
                    firstName?: string;
                    lastName?: string;
                    email?: string;
                    mobile?: string;
                };
                setFormData({
                    firstName: decodedToken?.firstName || "",
                    lastName: decodedToken?.lastName || "",
                    email: decodedToken?.email || "",
                    mobile: decodedToken?.mobile || ""
                });
            } catch (error) {
                console.error("Error decoding token:", error);
            }
        }
    }, []);
    const handleSubmitBooking = async () => {
        if (!trip) {
            setMessage("No trip selected");
            return;
        }
        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.mobile
        ) {
            setMessage("Please fill all required fields");
            return;
        }
        setLoading(true);
        setMessage("");
        try {
            const token = localStorage.getItem("auth-token");
            if (!token) {
                setMessage("You must be logged in.");
                setLoading(false);
                return;
            }
            const res = await fetch("/api/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    tripId: trip.id,
                    numberOfPeople,
                    totalPrice,
                    customerDetails: formData
                })
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || "Booking failed");
            }
            setIsBookingComplete(true);
            handleNextStep();
        } catch (err) {
            console.error(err);
            setMessage(
                err instanceof Error ? err.message : "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    return (
        <Card className="mx-auto max-w-2xl shadow-md">
            <CardHeader className="border-b">
                <CardTitle className="text-2xl font-bold text-gray-800">
                    Personal Details
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            First Name*
                        </label>
                        <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Enter your first name"
                            required
                            className="focus-visible:ring-[#FA7436]"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Last Name*
                        </label>
                        <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Enter your last name"
                            required
                            className="focus-visible:ring-[#FA7436]"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email*
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                        className="focus-visible:ring-[#FA7436]"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="mobile"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Mobile Number*
                    </label>
                    <Input
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="Enter your mobile number"
                        required
                        className="focus-visible:ring-[#FA7436]"
                    />
                </div>
                {message && (
                    <div
                        className={`rounded-md p-3 ${
                            isBookingComplete
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                        }`}
                    >
                        {message}
                    </div>
                )}
            </CardContent>
            <CardFooter className="flex justify-between border-t p-6">
                <Button
                    onClick={handlePreviousStep}
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                    Back
                </Button>
                <Button
                    onClick={handleSubmitBooking}
                    disabled={loading}
                    className="bg-[#FA7436] px-6 py-2 font-medium text-white transition-colors hover:bg-[#e56a30]"
                >
                    {loading ? "Processing..." : "Confirm Booking"}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default PersonalDetailsCard;
