"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, CalendarIcon, Users, Info, ImageIcon, Map } from "lucide-react"
import Image from "next/image"

export default function DiscoverDialog({ children, destination }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <DialogTitle className="text-xl font-bold">{destination.name}</DialogTitle>
            <Badge className="bg-[#FA7436] text-white hover:bg-[#e56a30]">
              {destination.category.charAt(0).toUpperCase() + destination.category.slice(1)}
            </Badge>
          </div>
          <DialogDescription className="flex items-center text-gray-500">
            <MapPin size={16} className="mr-1 text-[#FA7436]" />
            {destination.location}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="info" className="mt-2">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="info" className="flex items-center gap-1">
              <Info size={14} />
              <span>Information</span>
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-1">
              <ImageIcon size={14} />
              <span>Gallery</span>
            </TabsTrigger>
            <TabsTrigger value="trips" className="flex items-center gap-1">
              <CalendarIcon size={14} />
              <span>Available Trips</span>
            </TabsTrigger>
          </TabsList>

          {/* Information Tab */}
          <TabsContent value="info" className="space-y-4 mt-4">
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src={destination.images[0] || "/placeholder.svg"}
                alt={destination.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">About {destination.name}</h3>
              <p className="text-gray-600">{destination.fullDescription}</p>

              {destination.historicalSignificance && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900">Historical Significance</h4>
                  <p className="text-gray-600 mt-1">{destination.historicalSignificance}</p>
                </div>
              )}

              {destination.culturalImportance && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900">Cultural Importance</h4>
                  <p className="text-gray-600 mt-1">{destination.culturalImportance}</p>
                </div>
              )}

              <div className="bg-amber-50/50 p-4 rounded-lg border border-amber-100 mt-4">
                <h4 className="font-semibold text-gray-900 flex items-center">
                  <Info size={16} className="mr-2 text-[#FA7436]" />
                  Visitor Information
                </h4>
                <ul className="mt-2 space-y-2 text-sm">
                  {destination.bestTimeToVisit && (
                    <li className="flex items-start">
                      <Clock size={16} className="mr-2 text-gray-500 mt-0.5" />
                      <div>
                        <span className="font-medium">Best Time to Visit:</span> {destination.bestTimeToVisit}
                      </div>
                    </li>
                  )}
                  {destination.accessibilityInfo && (
                    <li className="flex items-start">
                      <Users size={16} className="mr-2 text-gray-500 mt-0.5" />
                      <div>
                        <span className="font-medium">Accessibility:</span> {destination.accessibilityInfo}
                      </div>
                    </li>
                  )}
                  {destination.localTips && (
                    <li className="flex items-start">
                      <Map size={16} className="mr-2 text-gray-500 mt-0.5" />
                      <div>
                        <span className="font-medium">Local Tips:</span> {destination.localTips}
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="mt-4">
            <div className="grid grid-cols-2 gap-4">
              {destination.images.map((image, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${destination.name} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Trips Tab */}
          <TabsContent value="trips" className="mt-4">
            {destination.availableTrips > 0 ? (
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center">
                  <Calendar size={18} className="mr-2 text-[#FA7436]" />
                  Available Tours to {destination.name}
                </h3>

                {destination.trips ? (
                  <div className="space-y-4">
                    {destination.trips.map((trip, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900">{trip.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{trip.description}</p>
                          </div>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            ${trip.price}
                          </Badge>
                        </div>

                        <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            {trip.duration}
                          </div>
                          <div className="flex items-center">
                            <CalendarIcon size={14} className="mr-1" />
                            {trip.nextAvailable}
                          </div>
                          <div className="flex items-center">
                            <Users size={14} className="mr-1" />
                            Max {trip.maxParticipants} people
                          </div>
                        </div>

                        <div className="mt-4">
                          <Button className="bg-[#FA7436] hover:bg-[#e56a30] text-white w-full sm:w-auto">
                            Book This Tour
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      We have {destination.availableTrips} tours available to {destination.name}. Contact us for more
                      information or check our tours page.
                    </p>
                    <Button className="bg-[#FA7436] hover:bg-[#e56a30] text-white">View All Tours</Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <Clock size={48} className="mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Coming Soon</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  We're currently developing tours to this destination. Sign up for our newsletter to be notified when
                  trips become available.
                </p>
                <Button className="mt-4 bg-[#FA7436] hover:bg-[#e56a30] text-white">Join Waiting List</Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <div className="mt-6 pt-4 border-t flex justify-between">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
          {destination.availableTrips > 0 && (
            <Button className="bg-[#FA7436] hover:bg-[#e56a30] text-white">Explore Tours</Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

