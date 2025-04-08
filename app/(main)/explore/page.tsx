"use client";
import Image from "next/image";
import { Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Trip } from "@/types/Interface";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ExplorePlaces() {
    const [trips, setTrips] = useState<Trip[]>([]);
    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/trips");
            setTrips(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    const featuredTrips = trips.filter((trip) => trip.isFeatured);
    const specialOffers = trips.filter((trip) => trip.isSpecialOffer);
    const vacationPlans = trips.filter((trip) => trip.hasDiscount);
    return (
        <main className="min-h-screen bg-white">
            <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
                <div className="mb-8 text-center">
                    <h2 className="mb-2 text-3xl font-bold">
                        Exclusive{" "}
                        <span className="text-orange-500">
                            deals & discounts
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-gray-600">
                        Discover our fantastic early booking discounts & start
                        planning your journey.
                    </p>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {featuredTrips.map((trip) => (
                        <div
                            key={trip.id}
                            className="overflow-hidden rounded-lg bg-white shadow-md"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={trip.image || "/placeholder.svg"}
                                    alt={trip.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <div className="mb-2 flex items-center justify-between">
                                    <h3 className="text-lg font-semibold">
                                        {trip.name}
                                    </h3>
                                    <div className="flex items-center">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span className="ml-1 text-sm">
                                            {trip.rating}
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-3 flex items-center text-sm text-gray-500">
                                    <MapPin className="mr-1 h-3.5 w-3.5" />
                                    <span>{trip.location}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-400 line-through">
                                            ${trip.originalPrice}
                                        </span>
                                        <span className="font-bold text-orange-500">
                                            ${trip.discountPrice}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 flex justify-center gap-2">
                    <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300">
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    {[1, 2, 3].map((page) => (
                        <button
                            key={page}
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                page === 1
                                    ? "bg-orange-500 text-white"
                                    : "border border-gray-300"
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </section>
            {/* Vacation Plans Section */}
            <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <h2 className="mb-2 text-3xl font-bold">
                            Best{" "}
                            <span className="text-orange-500">
                                vacation plan
                            </span>
                        </h2>
                        <p className="max-w-2xl text-gray-600">
                            Plan your perfect vacation with our travel agency.
                            Choose among hundreds of all-inclusive offers!
                        </p>
                    </div>
                    <div className="hidden gap-2 md:flex">
                        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800">
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {vacationPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className="overflow-hidden rounded-lg bg-white shadow-md"
                        >
                            <div className="relative h-56">
                                <Image
                                    src={plan.image || "/placeholder.svg"}
                                    alt={plan.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="bg-gray-50 p-4">
                                <div className="mb-2 flex items-center justify-between">
                                    <h3 className="font-semibold">
                                        {plan.name}
                                    </h3>
                                    <span className="font-bold text-orange-500">
                                        ${plan.price}
                                    </span>
                                </div>
                                <div className="mb-3 flex items-center justify-between">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <span className="mr-2">
                                            {plan.duration} Days Trip
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span className="ml-1 text-sm">
                                            {plan.rating}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Special Offers Section */}
            <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <h2 className="relative mb-2 text-3xl font-bold">
                            Special Offer
                            <span className="absolute -bottom-2 left-0 h-1 w-32 bg-orange-500"></span>
                        </h2>
                    </div>
                    <p className="max-w-md text-right text-gray-600">
                        Check out our special offer and discounts
                    </p>
                </div>
                <div className="mb-4 flex gap-4">
                    <button className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-900 text-white">
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-md bg-orange-500 text-white">
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {specialOffers.map((offer) => (
                        <div
                            key={offer.id}
                            className="overflow-hidden rounded-lg bg-white shadow-md"
                        >
                            <div className="relative h-56">
                                <Image
                                    src={offer.image || "/placeholder.svg"}
                                    alt={offer.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="bg-gray-50 p-5">
                                <h3 className="mb-2 text-lg font-semibold">
                                    {offer.name}
                                </h3>
                                <div className="mb-3 flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>
                                <p className="mb-4 text-sm text-gray-600">
                                    {offer.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <span className="mr-1 text-sm text-gray-500">
                                            From
                                        </span>
                                        <span className="text-xl font-bold text-orange-500">
                                            €{offer.discountPrice}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
