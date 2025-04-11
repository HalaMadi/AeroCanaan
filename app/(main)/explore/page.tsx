"use client"
import Image from "next/image"
import { Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import type { Trip } from "@/types/Interface"
import { useEffect, useState } from "react"
import axios from "axios"
import TripDialog from "@/components/TripDialog/TripDialog"

export default function ExplorePlaces() {
  const [trips, setTrips] = useState<Trip[]>([])
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/trips")
      setTrips(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  const featuredTrips = trips.filter((trip) => trip.isFeatured)
  const specialOffers = trips.filter((trip) => trip.isSpecialOffer)
  const vacationPlans = trips.filter((trip) => trip.hasDiscount)
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-foreground">
            Exclusive <span className="text-orange-500">deals & discounts</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover our fantastic early booking discounts & start planning your journey.
          </p>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredTrips.map((trip) => (
            <div
              key={trip.id}
              className="group relative overflow-hidden rounded-xl bg-card shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={trip.image || "/placeholder.svg"}
                  alt={`${trip.title} in ${trip.location}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {trip.isFeatured && (
                  <div className="absolute top-3 left-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="line-clamp-1 text-lg font-semibold text-foreground">{trip.title}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm text-foreground">{trip.rating.toFixed(1)}</span>
                  </div>
                </div>
                <div className="mb-3 flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-3.5 w-3.5" />
                  <span className="line-clamp-1">{trip.location}</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-2">
                    {trip.hasDiscount && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${trip.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="font-bold text-orange-500">${trip.discountPrice.toFixed(2)}</span>
                  </div>
                  <TripDialog trip={trip} />
                </div>
                {trip.duration && (
                  <div className="mt-2 text-xs text-muted-foreground">
                    {trip.duration} day
                    {trip.duration !== 1 ? "s" : ""}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-border">
            <ChevronLeft className="h-4 w-4" />
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                page === 1 ? "bg-orange-500 text-white" : "border border-border"
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
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-foreground">
              Best <span className="text-orange-500">vacation plan</span>
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers!
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
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
              className="group relative overflow-hidden rounded-xl bg-card shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-56">
                <Image
                  src={plan.image || "/placeholder.svg"}
                  alt={`${plan.title} in ${plan.location}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                  {plan.duration} Day
                  {plan.duration !== 1 ? "s" : ""} Trip
                </div>
              </div>
              <div className="bg-muted p-5">
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <h3 className="line-clamp-1 text-lg font-semibold text-foreground">{plan.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-3.5 w-3.5" />
                      <span>{plan.location}</span>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-orange-500">${Number(plan.price).toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between gap-10">
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= Math.floor(plan.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-1 text-sm text-muted-foreground">({plan.rating.toFixed(1)})</span>
                  </div>
                  <TripDialog trip={plan} />
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
            <h2 className="relative mb-2 text-3xl font-bold text-foreground">
              Special Offer
              <span className="absolute -bottom-2 left-0 h-1 w-32 bg-orange-500"></span>
            </h2>
          </div>
          <p className="max-w-md text-right text-muted-foreground">Check out our special offer and discounts</p>
        </div>
        <div className="mb-4 flex gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-md bg-foreground text-background">
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
              className="group overflow-hidden rounded-xl bg-card shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-56">
                <Image
                  src={offer.image || "/placeholder.svg"}
                  alt={`${offer.title} in ${offer.location}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                  Special Offer
                </div>
              </div>
              <div className="bg-muted p-5">
                <div className="mb-3">
                  <h3 className="line-clamp-1 text-lg font-semibold text-foreground">{offer.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-3.5 w-3.5" />
                    <span>{offer.location}</span>
                  </div>
                </div>
                <div className="mb-3 flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= Math.floor(offer.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-1 text-sm text-muted-foreground">({offer.rating.toFixed(1)})</span>
                </div>
                <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{offer.description}</p>
                <div className="flex items-center justify-between gap-10">
                  <div>
                    <span className="mr-1 text-xs text-muted-foreground">From</span>
                    <span className="text-lg font-bold text-orange-500">€{offer.discountPrice.toFixed(2)}</span>
                  </div>
                  <TripDialog trip={offer} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
