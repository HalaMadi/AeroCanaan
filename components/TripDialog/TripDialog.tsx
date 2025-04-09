'use client';
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogTrigger,DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Trip } from "@/types/Interface";

interface TripDialogProps {
  trip: Trip;
}

export default function TripDialog({ trip }: TripDialogProps) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 cursor-pointer w-[350px]">
            Book Now
          </button>
        </DialogTrigger>
  
        <DialogContent className="sm:max-w-[500px] bg-white text-center text-black">
          <DialogHeader>
            <DialogTitle className="text-2xl text-black">Confirm Booking</DialogTitle>
            <DialogDescription className="text-gray-600">
              Review your trip details before confirming.
            </DialogDescription>
          </DialogHeader>
  
          <div className="space-y-4 mt-4">
            <Image
              src={trip.image}
              alt={trip.title}
              width={400}
              height={250}
              className="rounded-md w-full object-cover"
            />
            <h2 className="text-xl font-semibold text-black">{trip.title}</h2>
            <p className="text-orange-500 font-bold text-lg">{trip.price}</p>
            <p className="text-gray-600">{trip.duration}</p>
            <p className="text-yellow-500">⭐ {trip.rating}</p>
          </div>
  
          <DialogFooter className="justify-center mt-6 space-x-4">
            <Button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 cursor-pointer">
              Confirm
            </Button>
            <DialogClose asChild>
              <Button
                variant="outline"
                className="border border-orange-500 text-orange-500 hover:bg-orange-100 px-4 py-2 rounded-lg cursor-pointer"
              >
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }