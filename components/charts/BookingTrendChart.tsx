"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Booking {
    id: string;
    createdAt: string;
}

export const BookingTrendChart = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get("/api/bookings");
                setBookings(response.data.data || []);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBookings();
    }, []);
    if (loading) return <div>Loading...</div>;
    const monthlyData = bookings.reduce(
        (acc, booking) => {
            const month = new Date(booking.createdAt).toLocaleString("en-US", {
                month: "short"
            });
            acc[month] = (acc[month] || 0) + 1;
            return acc;
        },
        {} as Record<string, number>
    );
    const chartOptions = {
        chart: {
            type: "line" as const,
            toolbar: {
                show: true
            }
        },
        xaxis: {
            categories: Object.keys(monthlyData)
        },
        series: [
            {
                name: "Bookings",
                data: Object.values(monthlyData)
            }
        ],
        colors: ["#008FFB"],
        title: {
            text: "Monthly Booking Trends",
            align: "center" as const
        },
        stroke: {
            curve: "smooth" as const,
            width: 2
        },
        markers: {
            size: 4
        }
    };
    return (
        <div className="rounded-lg bg-white p-4 shadow">
            <Chart
                options={chartOptions}
                series={chartOptions.series}
                type="line"
                width="100%"
                height={350}
            />
        </div>
    );
};

export default BookingTrendChart;
