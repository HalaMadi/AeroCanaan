import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";
import { formatDateRange } from "@/lib/formatDate";
interface TripDetailsCardProps {
    destination: {
        image: string;
        title: string;
        location: string;
        start_date: Date;
        end_date: Date;
        duration: number;
        seats: number;
        price: string;
    };
    numberOfPeople: number;
    handleNumberOfPeopleChange: (
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    handleNextStep: () => void;
    totalPrice: number;
}

const TripDetailsCard: React.FC<TripDetailsCardProps> = ({
    destination,
    numberOfPeople,
    handleNumberOfPeopleChange,
    handleNextStep,
    totalPrice
}) => {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Destination Card */}
            <Card className="h-fit">
                <CardContent className="space-y-4 p-6">
                    <div className="relative h-64 w-full overflow-hidden rounded-lg">
                        <Image
                            src={destination.image}
                            alt={destination.title}
                            onError={() => console.error("Image failed to load")}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">{destination.title}</h2>
                        <div className="mt-2 flex items-center text-gray-600">
                            <MapPin size={16} className="mr-2 text-[#FA7436]" />
                            <span>{destination.location}</span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Label htmlFor="numberOfPeople" className="text-gray-700">
                            Number of People
                        </Label>
                        <div className="mt-2 flex items-center">
                            <Input
                                id="numberOfPeople"
                                type="number"
                                min="1"
                                max={destination.seats}
                                value={numberOfPeople}
                                onChange={handleNumberOfPeopleChange}
                                className="w-24 focus-visible:ring-[#FA7436]"
                            />
                            <span className="ml-3 text-gray-500">
                                (Max: {destination.seats} available)
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>
            {/* Booking Summary Card */}
            <div className="sticky top-6 h-fit">
                <Card className="shadow-lg">
                    <CardHeader className="border-b p-6">
                        <CardTitle className="text-xl font-bold text-gray-800">
                            Booking Summary
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 p-6">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">Trip:</span>
                            <span className="font-medium text-gray-800">
                                {destination?.title}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">Dates:</span>
                            <span className="text-sm font-medium text-gray-800">
                                {destination &&
                                    formatDateRange(
                                        destination.start_date,
                                        destination.end_date
                                    )}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">Duration:</span>
                            <span className="font-medium text-gray-800">
                                {destination?.duration}{" "}
                                {destination?.duration === 1 ? "day" : "days"}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">Travelers:</span>
                            <span className="font-medium text-gray-800">
                                {numberOfPeople}
                            </span>
                        </div>
                        <div className="mt-4 border-t border-gray-200 pt-4">
                            <div className="mb-2 flex items-center justify-between">
                                <span className="text-gray-600">
                                    Price per person:
                                </span>
                                <span className="font-medium text-gray-800">
                                    ${destination?.price}
                                </span>
                            </div>
                            <div className="mt-4 flex items-center justify-between text-lg font-bold">
                                <span className="text-gray-800">Total:</span>
                                <span className="text-[#FA7436]">
                                    ${totalPrice}
                                </span>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end border-t ">
                        <Button
                            onClick={handleNextStep}
                            className="bg-[#FA7436] px-6 py-2 text-white hover:bg-[#e56a30]"
                        >
                            Continue to Personal Details
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default TripDetailsCard;
