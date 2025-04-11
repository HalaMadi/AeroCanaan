import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Trip {
    destination: string;
}

interface TripsBarChartProps {
    trips: Trip[];
}

export const TripsBarChart = ({ trips }: TripsBarChartProps) => {
    const destinationsCount = trips.reduce(
        (acc, trip) => {
            acc[trip.destination] = (acc[trip.destination] || 0) + 1;
            return acc;
        },
        {} as Record<string, number>
    );
    const options: ApexCharts.ApexOptions = {
        chart: { type: "bar" },
        xaxis: { categories: Object.keys(destinationsCount) },
        colors: ["#00E396"],
        title: { text: "Trips", align: "right" }
    };
    return (
        <Chart
            options={options}
            series={[{ name: "Trios", data: Object.values(destinationsCount) }]}
            type="bar"
            height={350}
        />
    );
};
