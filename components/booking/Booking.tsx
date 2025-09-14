"use client";

import { useEffect, useState } from "react";
import { FileText, User, CreditCard, Check } from "lucide-react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import TripDetailsCard from "./TripDetailsCard";
import PersonalDetailsCard from "./PersonalDetailsCard";
import { Trip } from "@/types/Interface";
import BookingConfirmationPage from "../confirmation/confirmation";

interface BookingPageProps {
    trip: Trip;
}

export default function BookingPage({ trip }: BookingPageProps) {
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [totalPrice, setTotalPrice] = useState<number>(
        Number(trip.price) || 0
    );
    const [bookingStep, setBookingStep] = useState(1);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isBookingComplete, setIsBookingComplete] = useState(false);

    useEffect(() => {
        if (trip) {
            setTotalPrice(Number(trip.price) * numberOfPeople);
        }
    }, [numberOfPeople, trip]);

    const handleNumberOfPeopleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = Number.parseInt(e.target.value);
        if (value >= 1 && trip && value <= trip.seats) {
            setNumberOfPeople(value);
        }
    };

    const handleNextStep = () => {
        setBookingStep((prev) => prev + 1);
        window.scrollTo(0, 0);
    };

    const handlePreviousStep = () => {
        setBookingStep((prev) => prev - 1);
        window.scrollTo(0, 0);
    };

    const steps = [
        { id: 1, name: "Trip Details", icon: FileText },
        { id: 2, name: "Personal Information", icon: User },
        { id: 3, name: "Confirmation", icon: CreditCard }
    ];

    return (
        <div className="container mx-auto px-4 py-4">
            <div className="mx-auto max-w-4xl">
                {!isBookingComplete && (
                    <div className="mb-8 sm:mb-12">
                        <div className="flex items-center justify-between">
                            {steps.map((step, index) => (
                                <div
                                    key={step.id}
                                    className="relative flex flex-1 flex-col items-center"
                                >
                                    {index < steps.length - 1 && (
                                        <div
                                            className={`absolute top-5 right-0 left-[calc(50%+15px)] h-[1px] ${
                                                bookingStep > step.id
                                                    ? "bg-orange-500"
                                                    : "bg-gray-300"
                                            }`}
                                        />
                                    )}
                                    <div
                                        className={`z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                                            bookingStep === step.id
                                                ? "border-orange-500 bg-orange-500 text-white shadow-lg"
                                                : bookingStep > step.id
                                                  ? "border-orange-500 bg-orange-500 text-white"
                                                  : "border-gray-300 bg-white text-gray-400"
                                        }`}
                                    >
                                        {bookingStep > step.id ? (
                                            <Check className="h-4 w-4" />
                                        ) : (
                                            <step.icon className="h-4 w-4" />
                                        )}
                                    </div>
                                    <div className="mt-2 text-center sm:mt-3">
                                        <span
                                            className={`text-xs font-medium transition-colors sm:text-sm ${
                                                bookingStep >= step.id
                                                    ? "text-orange-500"
                                                    : "text-gray-500"
                                            }`}
                                        >
                                            {step.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {isBookingComplete ? (
                    <Card className="border-green-200 bg-green-50">
                        <CardHeader>
                            <CardTitle className="flex items-center text-green-700">
                                <Check className="mr-2" /> Booking Successful!
                            </CardTitle>
                            <CardDescription>
                                Your booking has been confirmed. You will be
                                redirected to the confirmation page shortly.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ) : (
                    <div className="">
                        <div className="md:col-span-2">
                            {bookingStep === 1 && trip && (
                                <TripDetailsCard
                                    destination={trip}
                                    numberOfPeople={numberOfPeople}
                                    handleNumberOfPeopleChange={
                                        handleNumberOfPeopleChange
                                    }
                                    handleNextStep={handleNextStep}
                                    totalPrice={totalPrice}
                                />
                            )}
                            {bookingStep === 2 && (
                                <PersonalDetailsCard
                                    trip={trip}
                                    numberOfPeople={numberOfPeople}
                                    handleNextStep={handleNextStep}
                                    handlePreviousStep={handlePreviousStep}
                                    totalPrice={totalPrice}
                                />
                            )}
                            {bookingStep === 3 && (
                                <BookingConfirmationPage
                                    trip={trip}
                                    bookingData={{
                                        numberOfPeople,
                                        totalPrice
                                    }}
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
