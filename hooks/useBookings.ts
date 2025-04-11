import { Trip, User } from "@/types/Interface";
import { useState, useEffect } from "react";
export interface Booking {
    id: string;
    status: "PENDING" | "CONFIRMED" | "CANCELLED";
    trip: Trip;
    user?: User;
    createdAt: string;
}

export const useBookings = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                setLoading(true);
                const response = await fetch("/api/bookings", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch bookings");
                }
                const data = await response.json();
                setBookings(data);
                setTotalCount(data.length);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBookings();
    }, []);

    const filteredBookings = bookings.filter((booking) => {
        const searchLower = searchTerm.toLowerCase();
        return (
            booking.id.toLowerCase().includes(searchLower) ||
            booking.user?.firstName?.toLowerCase().includes(searchLower) ||
            booking.trip.title.toLowerCase().includes(searchLower) ||
            booking.trip.location.toLowerCase().includes(searchLower) ||
            booking.status.toLowerCase().includes(searchLower)
        );
    });

    const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
    const paginatedBookings = filteredBookings.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return {
        bookings,
        loading,
        searchTerm,
        setSearchTerm,
        currentPage,
        setCurrentPage,
        totalCount,
        itemsPerPage,
        filteredBookings,
        totalPages,
        paginatedBookings,
        handlePageChange
    };
};
