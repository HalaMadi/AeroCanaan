import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import DiscoverDialog from "./DiscoverDialog";
import { Button } from "../ui/button";
import { Destination } from "@/data/data";

const DiscoverCard = ({ destination }: { destination: Destination }) => {
    return (
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group p-0">
      <div className="relative h-48 w-full overflow-hidden ">
        <Image
          src={destination.images[0] || "/placeholder.svg"}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-white/90 text-gray-800 hover:bg-white/80 backdrop-blur-sm">
            {destination.category.charAt(0).toUpperCase() + destination.category.slice(1)}
          </Badge>
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin size={14} className="mr-1 text-[#FA7436]" />
          <span>{destination.location}</span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-3">{destination.shortDescription}</p>
      </CardContent>
      <CardFooter className="px-5 pb-5 pt-0 flex justify-between items-center">
        {destination.availableTrips > 0 ? (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <Calendar size={14} className="mr-1" />
            {destination.availableTrips} trips available
          </Badge>
        ) : (
          <Badge variant="outline" className="bg-gray-50 text-gray-500 border-gray-200">
            <Clock size={14} className="mr-1" />
            Coming soon
          </Badge>
        )}
        <DiscoverDialog destination={destination}>
          <Button variant="ghost" className="text-[#FA7436] hover:text-[#e56a30] p-0 h-auto font-medium">
            View More
            <ArrowRight size={16} className="ml-1" />
          </Button>
        </DiscoverDialog>
      </CardFooter>
    </Card>
    );
};

export default DiscoverCard;
