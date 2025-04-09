"use client"
import { useState } from "react"
import Image from "next/image"
import trips from "@/data/PlaceData"

const itemsPerPage = 9

export default function TripsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentTrips = trips.slice(startIndex, endIndex)
  const totalPages = Math.ceil(trips.length / itemsPerPage)

  return (
    <div className="min-h-screen bg-background p-8 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-foreground text-center">
        Best <span className="text-[#FA7436]">Vacation Plan</span>
      </h1>
      <p className="text-muted-foreground text-center mt-2">
        Plan your perfect vacation with our travel agency. Choose among dozens of all-inclusive offers!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-full max-w-[1200px]">
        {currentTrips.map((trip) => (
          <div key={trip.id} className="bg-card shadow-lg rounded-lg overflow-hidden">
            <Image
              src={trip.image || "/placeholder.svg"}
              alt={trip.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-foreground">{trip.title}</h2>
              <p className="text-[#FA7436] text-lg font-bold">{trip.price}</p>
              <p className="text-muted-foreground">{trip.duration}</p>
              <p className="text-yellow-500 font-bold">⭐ {trip.rating}</p>
              <div className="flex justify-between mt-4">
                <button className="bg-[#FA7436] text-white px-4 py-2 rounded-lg hover:bg-orange-600 cursor-pointer">
                  Book Now
                </button>
                <button className="border border-[#FA7436] text-[#FA7436] px-4 py-2 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/20 cursor-pointer">
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
          className="px-4 py-2 bg-[#FA7436] text-white rounded-lg disabled:opacity-50"
          disabled={currentPage === 1}
        >
          ⬅Prev
        </button>

        <span className="px-4 py-2 bg-[#FA7436] text-white rounded-lg">
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 bg-[#FA7436] text-white rounded-lg disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next ➡
        </button>
      </div>
    </div>
  )
}
