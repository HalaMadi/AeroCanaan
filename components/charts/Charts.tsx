'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { BookingTrendChart } from "./BookingTrendChart";
import { TripsBarChart } from "./TripsBarChart";
import UserChart from "./UserChart";

export const DashboardCharts = () => {
    const [data, setData] = useState({
        bookings: [],
        trips: []
    });

    useEffect(() => {
        Promise.all([axios.get("/api/bookings"), axios.get("/api/trips")]).then(
            ([bookings, trips]) => {
                setData({
                    bookings: bookings.data,
                    trips: trips.data
                });
            }
        );
    }, []);

    return (
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
            <div className="rounded-lg bg-white p-4 shadow">
                <BookingTrendChart />
            </div>
            <div className="rounded-lg bg-white p-4 shadow">
                <TripsBarChart trips={data.trips} />
            </div>
            <div className="rounded-lg bg-white p-4 shadow">
                <UserChart />
            </div>
        </div>
    );
};
