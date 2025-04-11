// components/GlobalBookingDialog.tsx
"use client";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import BookingPage from "../booking/Booking";
import { useBooking } from "@/provider/BookingContext";

export function GlobalBookingDialog() {
    const { isOpen, closeBooking, currentTrip } = useBooking();

    if (!currentTrip) return null;

    return (
        <Dialog open={isOpen} onOpenChange={closeBooking}>
            <DialogContent className="w-full scale-70 transform bg-white text-center text-black">
                <DialogHeader className="mx-auto flex flex-col items-center justify-center">
                    <DialogTitle className="mb-2 text-3xl font-bold text-gray-900">
                        Confirm Booking
                    </DialogTitle>
                </DialogHeader>
                <BookingPage trip={currentTrip} />
            </DialogContent>
        </Dialog>
    );
}
