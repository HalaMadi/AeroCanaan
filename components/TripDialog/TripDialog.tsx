'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Trip } from "@/types/Interface";
import { useState } from "react";

interface TripDialogProps {
  trip: Trip;
}

export default function TripDialog({ trip }: TripDialogProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleBooking = async () => {
    setLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("auth-token"); 
      if (!token) {
        setMessage("You must be logged in to book.");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
        
        body: JSON.stringify({ tripId: trip.id.toString() }),
      });
      
      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Booking failed.");
      } else {
        setMessage("Booking successful!");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 cursor-pointer w-[250px]">
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
          <p className="text-yellow-500">⭐ {trip.rating}</p>
        </div>

        {message && <p className="mt-2 text-sm text-red-500">{message}</p>}

        <DialogFooter className="justify-center mt-6 space-x-4">
          <Button
            onClick={handleBooking}
            disabled={loading}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 cursor-pointer"
          >
            {loading ? "Booking..." : "Confirm"}
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
