// contexts/BookingContext.tsx
"use client";

import { createContext, useContext, useState } from "react";
import { Trip } from "@/types/Interface";

type BookingContextType = {
    openBooking: (trip: Trip) => void;
    closeBooking: () => void;
    currentTrip: Trip | null;
    isOpen: boolean;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTrip, setCurrentTrip] = useState<Trip | null>(null);

    const openBooking = (trip: Trip) => {
        setCurrentTrip(trip);
        setIsOpen(true);
    };

    const closeBooking = () => {
        setIsOpen(false);
        setCurrentTrip(null);
    };

    return (
        <BookingContext.Provider
            value={{ openBooking, closeBooking, currentTrip, isOpen }}
        >
            {children}
        </BookingContext.Provider>
    );
}

export function useBooking() {
    const context = useContext(BookingContext);
    if (context === undefined) {
        throw new Error("useBooking must be used within a BookingProvider");
    }
    return context;
}
