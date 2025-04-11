'use client'
import { useEffect, useState } from "react";
import axios from "axios";

export interface Booking {
    id: string;
    customer: {
        name: string;
        email: string;
    };
    trip: string;
    destination: string;
    date: string;
    amount: number;
    people: number;
    status: "confirmed" | "pending" | "cancelled";
    paymentMethod: string;
}

const itemsPerPage = 10;

export function useBookings(searchTerm: string, currentPage: number) {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await axios.get("/api/bookings", {
                    withCredentials: true
                });
                setBookings(res.data);
            } catch (err) {
                console.error("Failed to fetch bookings:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const filteredBookings = bookings.filter(
        (booking) =>
            booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.customer.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            booking.trip.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
    const paginatedBookings = filteredBookings.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return {
        bookings: paginatedBookings,
        totalPages,
        totalCount: filteredBookings.length,
        loading,
        itemsPerPage
    };
}
