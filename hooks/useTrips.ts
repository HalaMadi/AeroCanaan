// hooks/useTrips.ts
import { useEffect, useState } from "react";
import axios from "axios";
import { Trip as BaseTrip } from "@/types/Interface";

export interface Trip extends BaseTrip {
    bookedSeats: number;
    availableSeats: number;
    status: "active" | "inactive";
}

const itemsPerPage = 10;

export function useTrips(searchTerm: string, currentPage: number) {
    const [allTrips, setAllTrips] = useState<Trip[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get("/api/trips");
                const tripsWithStatus = response.data.map((trip: Trip) => ({
                    ...trip,
                    status: trip.seats > 0 ? "active" : "inactive"
                })); 
                setAllTrips(tripsWithStatus);
            } catch (error) {
                console.error("Error fetching trips:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);
    const filteredTrips = allTrips.filter(
        (trip) =>
            trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            trip.location?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const paginatedTrips = filteredTrips.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const totalPages = Math.ceil(filteredTrips.length / itemsPerPage);
    return {
        isLoading,
        filteredTrips,
        paginatedTrips,
        totalPages,
        itemsPerPage
    };
}
