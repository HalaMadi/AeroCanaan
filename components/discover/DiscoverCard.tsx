import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import DiscoverDialog from "./DiscoverDialog";
import { Button } from "../ui/button";
import { Place } from "@/types/Interface";

const DiscoverCard = ({ destination }: { destination: Place }) => {
    return (
        <Card className="group overflow-hidden p-0 transition-all duration-300 hover:shadow-lg">
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={destination.images[0]?.url || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                    <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm hover:bg-white/80">
                        {destination.category.charAt(0).toUpperCase() +
                            destination.category.slice(1)}
                    </Badge>
                </div>
            </div>
            <CardContent className="p-5">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {destination.name}
                </h3>
                <div className="mb-3 flex items-center text-sm text-gray-500">
                    <MapPin size={14} className="mr-1 text-[#FA7436]" />
                    <span>{destination.location}</span>
                </div>
                <p className="line-clamp-3 text-sm text-gray-600">
                    {destination.shortDesc}
                </p>
            </CardContent>
            <CardFooter className="flex items-center justify-between px-5 pt-0 pb-5">
                {destination.availableTrips > 0 ? (
                    <Badge
                        variant="outline"
                        className="border-green-200 bg-green-50 text-green-700"
                    >
                        <Calendar size={14} className="mr-1" />
                        {destination.availableTrips} trips available
                    </Badge>
                ) : (
                    <Badge
                        variant="outline"
                        className="border-gray-200 bg-gray-50 text-gray-500"
                    >
                        <Clock size={14} className="mr-1" />
                        Coming soon
                    </Badge>
                )}
                <DiscoverDialog destination={destination}>
                    <Button
                        variant="ghost"
                        className="h-auto p-0 font-medium text-[#FA7436] hover:text-[#e56a30]"
                    >
                        View More
                        <ArrowRight size={16} className="ml-1" />
                    </Button>
                </DiscoverDialog>
            </CardFooter>
        </Card>
    );
};

export default DiscoverCard;
