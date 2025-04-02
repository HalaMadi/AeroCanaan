"use client";
import { useState } from "react";
import Image from "next/image";
import trips from "@/lib/PlaceData";
import { Trip } from "@/lib/Interface";
import Book from "@/components/trips/Book";

const ITEMS_PER_PAGE = 9;

export default function TripsPage() {
    const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentTrips = trips.slice(startIndex, endIndex);

    const totalPages = Math.ceil(trips.length / ITEMS_PER_PAGE);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white p-8">
            <h1 className="text-center text-3xl font-bold text-black">
                Best <span className="text-orange-500">Vacation Plan</span>
            </h1>
            <p className="mt-2 text-center text-gray-600">
                Plan your perfect vacation with our travel agency. Choose among
                dozens of all-inclusive offers!
            </p>
            <div className="mt-10 grid w-full max-w-[1200px] grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {currentTrips.map((trip) => (
                    <div
                        key={trip.id}
                        className="overflow-hidden rounded-lg bg-white shadow-lg"
                    >
                        <Image
                            src={trip.image}
                            alt={trip.title}
                            width={500}
                            height={300}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-900">
                                {trip.title}
                            </h2>
                            <p className="text-lg font-bold text-orange-500">
                                {trip.price}
                            </p>
                            <p className="text-gray-500">{trip.duration}</p>
                            <p className="font-bold text-yellow-500">
                                ⭐ {trip.rating}
                            </p>
                            <div className="mt-4 flex justify-between">
                                <button
                                    className="cursor-pointer rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
                                    onClick={() => setSelectedTrip(trip)}
                                >
                                    Book Now
                                </button>
                                <button className="cursor-pointer rounded-lg border border-orange-500 px-4 py-2 text-orange-500 hover:bg-orange-100">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-center space-x-4">
                <button
                    className={`rounded-lg px-4 py-2 ${currentPage === 1 ? "bg-gray-300" : "bg-orange-500 text-white hover:bg-orange-600"}`}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="text-lg font-semibold">
                    {currentPage} / {totalPages}
                </span>
                <button
                    className={`rounded-lg px-4 py-2 ${currentPage === totalPages ? "bg-gray-300" : "bg-orange-500 text-white hover:bg-orange-600"}`}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
            {selectedTrip && (
                <Book
                    trip={selectedTrip}
                    onClose={() => setSelectedTrip(null)}
                />
            )}
        </div>
    );
}
