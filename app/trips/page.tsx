'use client'
import { useState } from "react";
import Image from "next/image";
import trips from "@/lib/PlaceData";

const itemsPerPage = 9;    

export default function TripsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTrips = trips.slice(startIndex, endIndex);
  const totalPages = Math.ceil(trips.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-black text-center">
        Best <span className="text-orange-500">Vacation Plan</span>
      </h1>
      <p className="text-gray-600 text-center mt-2">
        Plan your perfect vacation with our travel agency. Choose among dozens of all-inclusive offers!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-full max-w-[1200px]">
        {currentTrips.map((trip) => (
          <div key={trip.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image 
              src={trip.image} 
              alt={trip.title} 
              width={500} 
              height={300} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900">{trip.title}</h2>
              <p className="text-orange-500 text-lg font-bold">{trip.price}</p>
              <p className="text-gray-500">{trip.duration}</p>
              <p className="text-yellow-500 font-bold">⭐ {trip.rating}</p>
              <div className="flex justify-between mt-4">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 cursor-pointer">
                  Book Now
                </button>
                <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-100 cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg disabled:opacity-50"
          disabled={currentPage === 1}
        >
          ⬅Prev
        </button>

        <span className="px-4 py-2 bg-orange-500 text-white rounded-lg">
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
