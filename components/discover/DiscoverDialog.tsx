"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Calendar,
    Clock,
    MapPin,
    CalendarIcon,
    Users,
    Info,
    ImageIcon,
    Map
} from "lucide-react";
import Image from "next/image";
import { Destination } from "@/data/data";

type Props = {
    destination: Destination;
    children?: React.ReactNode;
};

export default function DestinationDialog({ children, destination }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
                <DialogHeader>
                    <div className="flex items-center gap-2">
                        <DialogTitle className="text-xl font-bold">
                            {destination.name}
                        </DialogTitle>
                        <Badge className="bg-[#FA7436] text-white hover:bg-[#e56a30]">
                            {destination.category.charAt(0).toUpperCase() +
                                destination.category.slice(1)}
                        </Badge>
                    </div>
                    <DialogDescription className="flex items-center text-gray-500">
                        <MapPin size={16} className="mr-1 text-[#FA7436]" />
                        {destination.location}
                    </DialogDescription>
                </DialogHeader>
                <Tabs defaultValue="info" className="mt-2">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger
                            value="info"
                            className="flex items-center gap-1"
                        >
                            <Info size={14} />
                            <span>Information</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="gallery"
                            className="flex items-center gap-1"
                        >
                            <ImageIcon size={14} />
                            <span>Gallery</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="trips"
                            className="flex items-center gap-1"
                        >
                            <CalendarIcon size={14} />
                            <span>Available Trips</span>
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="info" className="mt-4 space-y-4">
                        <div className="relative h-64 w-full overflow-hidden rounded-lg">
                            <Image
                                src={
                                    destination.images[0] || "/placeholder.svg"
                                }
                                alt={destination.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                                About {destination.name}
                            </h3>
                            <p className="text-gray-600">
                                {destination.fullDescription}
                            </p>

                            {destination.historicalSignificance && (
                                <div className="mt-4">
                                    <h4 className="font-semibold text-gray-900">
                                        Historical Significance
                                    </h4>
                                    <p className="mt-1 text-gray-600">
                                        {destination.historicalSignificance}
                                    </p>
                                </div>
                            )}

                            {destination.culturalImportance && (
                                <div className="mt-4">
                                    <h4 className="font-semibold text-gray-900">
                                        Cultural Importance
                                    </h4>
                                    <p className="mt-1 text-gray-600">
                                        {destination.culturalImportance}
                                    </p>
                                </div>
                            )}

                            <div className="mt-4 rounded-lg border border-amber-100 bg-amber-50/50 p-4">
                                <h4 className="flex items-center font-semibold text-gray-900">
                                    <Info
                                        size={16}
                                        className="mr-2 text-[#FA7436]"
                                    />
                                    Visitor Information
                                </h4>
                                <ul className="mt-2 space-y-2 text-sm">
                                    {destination.bestTimeToVisit && (
                                        <li className="flex items-start">
                                            <Clock
                                                size={16}
                                                className="mt-0.5 mr-2 text-gray-500"
                                            />
                                            <div>
                                                <span className="font-medium">
                                                    Best Time to Visit:
                                                </span>{" "}
                                                {destination.bestTimeToVisit}
                                            </div>
                                        </li>
                                    )}
                                    {destination.accessibilityInfo && (
                                        <li className="flex items-start">
                                            <Users
                                                size={16}
                                                className="mt-0.5 mr-2 text-gray-500"
                                            />
                                            <div>
                                                <span className="font-medium">
                                                    Accessibility:
                                                </span>{" "}
                                                {destination.accessibilityInfo}
                                            </div>
                                        </li>
                                    )}
                                    {destination.localTips && (
                                        <li className="flex items-start">
                                            <Map
                                                size={16}
                                                className="mt-0.5 mr-2 text-gray-500"
                                            />
                                            <div>
                                                <span className="font-medium">
                                                    Local Tips:
                                                </span>{" "}
                                                {destination.localTips}
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
                                <div
                                    key={index}
                                    className="relative h-48 overflow-hidden rounded-lg"
                                >
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
                                <h3 className="flex items-center text-lg font-semibold">
                                    <Calendar
                                        size={18}
                                        className="mr-2 text-[#FA7436]"
                                    />
                                    Available Tours to {destination.name}
                                </h3>

                                {destination.trips ? (
                                    <div className="space-y-4">
                                        {destination.trips.map(
                                            (trip, index) => (
                                                <div
                                                    key={index}
                                                    className="rounded-lg border p-4 transition-shadow hover:shadow-md"
                                                >
                                                    <div className="flex items-start justify-between">
                                                        <div>
                                                            <h4 className="font-medium text-gray-900">
                                                                {trip.name}
                                                            </h4>
                                                            <p className="mt-1 text-sm text-gray-600">
                                                                {
                                                                    trip.description
                                                                }
                                                            </p>
                                                        </div>
                                                        <Badge
                                                            variant="outline"
                                                            className="border-green-200 bg-green-50 text-green-700"
                                                        >
                                                            ${trip.price}
                                                        </Badge>
                                                    </div>
                                                    <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
                                                        <div className="flex items-center">
                                                            <Clock
                                                                size={14}
                                                                className="mr-1"
                                                            />
                                                            {trip.duration}
                                                        </div>
                                                        <div className="flex items-center">
                                                            <CalendarIcon
                                                                size={14}
                                                                className="mr-1"
                                                            />
                                                            {trip.nextAvailable}
                                                        </div>
                                                        <div className="flex items-center">
                                                            <Users
                                                                size={14}
                                                                className="mr-1"
                                                            />
                                                            Max{" "}
                                                            {
                                                                trip.maxParticipants
                                                            }{" "}
                                                            people
                                                        </div>
                                                    </div>

                                                    <div className="mt-4">
                                                        <Button className="w-full bg-[#FA7436] text-white hover:bg-[#e56a30] sm:w-auto">
                                                            Book This Tour
                                                        </Button>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <p className="text-gray-600">
                                            We have {destination.availableTrips}{" "}
                                            tours available to{" "}
                                            {destination.name}. Contact us for
                                            more information or check our tours
                                            page.
                                        </p>
                                        <Button className="bg-[#FA7436] text-white hover:bg-[#e56a30]">
                                            View All Tours
                                        </Button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="py-8 text-center">
                                <Clock
                                    size={48}
                                    className="mx-auto mb-4 text-gray-300"
                                />
                                <h3 className="mb-2 text-lg font-medium text-gray-900">
                                    Coming Soon
                                </h3>
                                <p className="mx-auto max-w-md text-gray-600">
                                    We're currently developing tours to this
                                    destination. Sign up for our newsletter to
                                    be notified when trips become available.
                                </p>
                                <Button className="mt-4 bg-[#FA7436] text-white hover:bg-[#e56a30]">
                                    Join Waiting List
                                </Button>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
                <div className="mt-6 flex justify-between border-t pt-4">
                    <Button variant="outline" onClick={() => setOpen(false)}>
                        Close
                    </Button>
                    {destination.availableTrips > 0 && (
                        <Button className="bg-[#FA7436] text-white hover:bg-[#e56a30]">
                            Explore Tours
                        </Button>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
