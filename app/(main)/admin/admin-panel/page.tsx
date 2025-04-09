"use client";

import { useState } from "react";

const AdminDashboard = () => {
    const [filter, setFilter] = useState("All");

    const allTrips = [
        {
            id: 1,
            user: "Jane Smith",
            destination: "Jerusalem",
            date: "2023-07-20",
            status: "Approved"
        },
        {
            id: 2,
            user: "Mike Johnson",
            destination: "Jenin",
            date: "2023-08-10",
            status: "Cancelled"
        }
    ];

    const pendingRequests = [
        {
            id: 1,
            user: "John Doe",
            destination: "Rome",
            startDate: "2023-06-10",
            endDate: "2023-06-20",
            status: "Pending"
        }
    ];
    const filteredTrips =
        filter === "All"
            ? allTrips
            : allTrips.filter((trip) => trip.status === filter);

    return (
        <div className="flex min-h-screen bg-gray-50">
            <aside className="flex w-64 flex-col justify-between bg-white p-4 shadow">
                <div>
                    <nav className="space-y-4">
                        <a
                            href="#"
                            className="flex items-center text-gray-700 hover:text-orange-500"
                        >
                            <span className="ml-2">Dashboard</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center text-gray-700 hover:text-orange-500"
                        >
                            <span className="ml-2">Settings</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center text-gray-700 hover:text-orange-500"
                        >
                            <span className="ml-2">Logout</span>
                        </a>
                    </nav>
                </div>
            </aside>
            <main className="flex-1 space-y-12 p-8">
                <section>
                    <h2 className="mb-4 text-xl font-semibold">
                        Pending Requests
                    </h2>
                    <div className="overflow-x-auto rounded bg-white p-4 shadow">
                        <table className="w-full text-left">
                            <thead className="bg-gray-100 text-gray-600">
                                <tr>
                                    <th className="p-2">User Name</th>
                                    <th className="p-2">Destination</th>
                                    <th className="p-2">Dates</th>
                                    <th className="p-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pendingRequests.map((req) => (
                                    <tr key={req.id} className="border-t">
                                        <td className="p-2">{req.user}</td>
                                        <td className="p-2">
                                            {req.destination}
                                        </td>
                                        <td className="p-2">
                                            {req.startDate} - {req.endDate}
                                        </td>
                                        <td className="p-2">
                                            <span className="rounded border bg-orange-50 px-2 py-1 text-sm font-medium text-orange-500">
                                                {req.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
                <section>
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-semibold">All Trips</h2>
                    </div>
                    <div className="mb-4 flex gap-2">
                        {["All", "Approved", "Cancelled"].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`rounded px-4 py-1 ${
                                    filter === type
                                        ? "bg-orange-500 text-white"
                                        : "border bg-white"
                                }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                    <div className="overflow-x-auto rounded bg-white p-4 shadow">
                        <table className="w-full text-left">
                            <thead className="bg-gray-100 text-gray-600">
                                <tr>
                                    <th className="p-2">User Name</th>
                                    <th className="p-2">Destination</th>
                                    <th className="p-2">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTrips.map((trip) => (
                                    <tr key={trip.id} className="border-t">
                                        <td className="p-2">{trip.user}</td>
                                        <td className="p-2">
                                            {trip.destination}
                                        </td>
                                        <td className="p-2">{trip.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;
