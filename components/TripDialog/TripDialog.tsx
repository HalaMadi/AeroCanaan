"use client";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Trip } from "@/types/Interface";
import { useState } from "react";
import BookingPage from "../booking/Booking";

interface TripDialogProps {
    trip: Trip;
}

export default function TripDialog({ trip }: TripDialogProps) {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="w-[250px] cursor-pointer rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">
                    Book Now
                </button>
            </DialogTrigger>
            <DialogContent className="w-full max-w-[800px] bg-white text-center text-black transform scale-70">
                <DialogHeader className="mx-auto flex flex-col items-center justify-center">
                    <DialogTitle  className="mb-2 text-2xl font-bold text-gray-900">
                        Confirm Booking
                    </DialogTitle>
                   
                </DialogHeader>
                <BookingPage trip={trip} />
                <DialogFooter className="mt-6 justify-center space-x-4">
                    
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
