"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Booking {
    id: string;
    status: string;
}

const StatusDonutChart = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get("/api/bookings");
                const bookingsData = response.data.data ?? response.data ?? [];
                setBookings(bookingsData);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBookings();
    }, []);
    if (loading) return <div>Loading...</div>;
    const statusCount = bookings.reduce(
        (acc, booking) => {
            acc[booking.status] = (acc[booking.status] || 0) + 1;
            return acc;
        },
        {} as Record<string, number>
    );
    const chartOptions = {
        chart: {
            type: "donut" as const
        },
        labels: Object.keys(statusCount),
        series: Object.values(statusCount),
        colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560"],
        title: {
            text: "Booking Status Distribution",
            align: "center" as const
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: "Total Bookings",
                            color: "#6B7280"
                        }
                    }
                }
            }
        },
        legend: {
            position: "right" as const
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: "bottom"
                    }
                }
            }
        ]
    };
    return (
        <div className="rounded-lg bg-white p-4 shadow">
            <Chart
                options={chartOptions}
                series={chartOptions.series}
                type="donut"
                width="100%"
                height={350}
            />
        </div>
    );
};

export default StatusDonutChart;
