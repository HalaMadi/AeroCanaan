"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Calendar, MapPin, Users, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import { Button } from "../ui/button"
import { Trip } from "@/types/Interface"
import { formatDateRange } from "@/lib/formatDate"


interface BookingConfirmationPageProps {
  trip: Trip
  bookingData: {
    numberOfPeople: number
    totalPrice: number
    customerDetails?: {
      firstName: string
      lastName: string
      email: string
    }
  }
}

export default function BookingConfirmationPage({ 
  trip, 
  bookingData 
}: BookingConfirmationPageProps) {

  const customerName = bookingData.customerDetails 
    ? `${bookingData.customerDetails.firstName} ${bookingData.customerDetails.lastName}`
    : ""

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="border-green-200 shadow-lg">
          <CardHeader className="bg-green-50 border-b border-green-100">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100  rounded-full">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-center text-2xl font-bold text-green-800">
              Booking Confirmed!
            </CardTitle>
            <CardDescription className="text-center text-green-700">
              Your trip to {trip.title} has been successfully booked.
            </CardDescription>
          </CardHeader>

          <CardContent className="">
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-1">Booking Summary</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {format(new Date(), "MMM d, yyyy 'at' h:mm a")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700 mb-2 flex items-center">
                    <MapPin size={16} className="mr-2 text-[#FA7436]" />
                    Destination
                  </h3>
                  <p className="text-gray-900 font-medium">{trip.title}</p>
                  <p className="text-gray-600 text-sm">{trip.location}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700 mb-2 flex items-center">
                    <Calendar size={16} className="mr-2 text-[#FA7436]" />
                    Travel Dates
                  </h3>
                  <p className="text-gray-900">
                    {formatDateRange(trip.start_date, trip.end_date)}
                  </p>
                  {trip.duration && (
                    <p className="text-gray-600 text-sm">
                      {trip.duration} {trip.duration === 1 ? 'day' : 'days'}
                    </p>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700 mb-2 flex items-center">
                    <Users size={16} className="mr-2 text-[#FA7436]" />
                    Travelers
                  </h3>
                  <p className="text-gray-900">
                    {bookingData.numberOfPeople} {bookingData.numberOfPeople === 1 ? "person" : "people"}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-700 mb-2">Total Amount</h3>
                  <p className="text-gray-900 font-bold text-xl">
                    ${bookingData.totalPrice.toFixed(2)}
                  </p>
                  <p className="text-gray-600 text-sm">
                    ${Number(trip.price).toFixed(2)} per person
                  </p>
                </div>
              </div>

              {customerName && (
                <div className="bg-gray-50  rounded-lg border border-gray-200">
                  <h3 className="font-medium text-gray-700 mb-2">Booked By</h3>
                  <p className="text-gray-900">{customerName}</p>
                  {bookingData.customerDetails?.email && (
                    <p className="text-gray-600 text-sm mt-1">
                      {bookingData.customerDetails.email}
                    </p>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/explore" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full flex items-center">
                    <ArrowLeft size={16} className="mr-2" />
                    Browse More Trips
                  </Button>
                </Link>
                <Button className="w-full sm:w-auto bg-[#FA7436] hover:bg-[#e56a30] text-white">
                  <Download size={16} className="mr-2" />
                  Download Itinerary
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}