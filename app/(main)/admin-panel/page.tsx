"use client"

import { useState } from "react"

const AdminDashboard = () => {
  const [filter, setFilter] = useState("All")

  const allTrips = [
    { id: 1, user: "Jane Smith", destination: "Jerusalem", date: "2023-07-20", status: "Approved" },
    { id: 2, user: "Mike Johnson", destination: "Jenin", date: "2023-08-10", status: "Cancelled" },
  ]

  const pendingRequests = [
    {
      id: 1,
      user: "John Doe",
      destination: "Rome",
      startDate: "2023-06-10",
      endDate: "2023-06-20",
      status: "Pending",
    },
  ]

  const filteredTrips = filter === "All" ? allTrips : allTrips.filter((trip) => trip.status === filter)

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white shadow p-4 flex flex-col justify-between">
        <div>
          <nav className="space-y-4">
            <a href="#" className="flex items-center text-gray-700 hover:text-orange-500">
              <span className="ml-2">Dashboard</span>
            </a>
            <a href="#" className="flex items-center text-gray-700 hover:text-orange-500">
              <span className="ml-2">Settings</span>
            </a>
            <a href="#" className="flex items-center text-gray-700 hover:text-orange-500">
              <span className="ml-2">Logout</span>
            </a>
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-8 space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Pending Requests</h2>
          <div className="bg-white shadow rounded p-4 overflow-x-auto">
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
                    <td className="p-2">{req.destination}</td>
                    <td className="p-2">
                      {req.startDate} - {req.endDate}
                    </td>
                    <td className="p-2">
                      <span className="bg-orange-50 text-orange-500 border rounded px-2 py-1 text-sm font-medium">
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
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">All Trips</h2>
          </div>
          <div className="flex gap-2 mb-4">
            {["All", "Approved", "Cancelled"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-1 rounded ${filter === type ? "bg-orange-500 text-white" : "bg-white border"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="bg-white shadow rounded p-4 overflow-x-auto">
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
                    <td className="p-2">{trip.destination}</td>
                    <td className="p-2">{trip.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AdminDashboard;
