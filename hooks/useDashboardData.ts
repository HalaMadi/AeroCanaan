'use client'
import { formatDateRange } from "@/lib/formatDate";
import { Trip as BaseTrip } from "@/types/Interface";
import axios from "axios";
import { useEffect, useState } from "react";

interface Trip extends BaseTrip {
    formatDate: string;
    bookedSeatsPercentage: number;
}
const useDashboardData = () => {
        const [period, setPeriod] = useState("week");

const [dashboardData, setDashboardData] = useState({
    totalBooking: 0,
    totalUsers: 0,
    activeTrips: 0
});
const [upcomingTrips, setUpcomingTrips] = useState<Trip[]>([]);

useEffect(() => {
    const fetchData = async () => {
        try {
            const dashboardRes = await axios.get("/api/dashboard");
            const dashboardResult = dashboardRes.data;
            setDashboardData(dashboardResult.data);
            const tripsRes = await axios.get("/api/trips");
            const tripsResult = tripsRes.data.map((trip: Trip) => {
                const bookedSeatsPercentage = (trip.bookedSeats / trip.seats) * 100;
                return {
                    ...trip,
                    startDate: new Date(trip.start_date),
                    endDate: new Date(trip.end_date),
                    formatDate: formatDateRange(trip.start_date, trip.end_date),
                    bookedSeatsPercentage,
                };
            });
            setUpcomingTrips(tripsResult);
        } catch (err) {
            console.error(err);
        }
    };
    fetchData();
}, []);
return { dashboardData, upcomingTrips,setPeriod };
};

export default useDashboardData;