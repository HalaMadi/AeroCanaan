'use client'
import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Bell, Calendar, CalendarRange, Map, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import AdminCard from "@/components/admin/adminCard";
import { Search } from "lucide-react";
import useDashboardData from "@/hooks/useDashboardData"; 
import Image from "next/image";
import UserChart from "@/components/charts/UserChart";

const AdminDashboard = () => {
  const { dashboardData, upcomingTrips } = useDashboardData(); 

  return (
    <div className="container mx-auto p-20">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">Welcome back, Admin User</p>
        </div>
        <div className="flex w-full items-center gap-3 md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full bg-white pl-8 dark:bg-gray-950"
            />
          </div>
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FA7436] text-[10px] text-white">
              3
            </span>
          </Button>
        </div>
      </div>
      <div className="mb-6 flex flex-col items-center justify-around gap-4 md:flex-row">
        <AdminCard
          title="Total Bookings"
          data={dashboardData.totalBooking}
          icon={<Map className="h-6 w-6 text-purple-600 dark:text-purple-400" />}
        />
        <AdminCard
          title="Active Trips"
          data={dashboardData.activeTrips}
          icon={<CalendarRange className="h-6 w-6 text-blue-600 dark:text-blue-400" />}
        />
        <AdminCard
          title="Total Users"
          data={dashboardData.totalUsers}
          icon={<Users className="h-6 w-6 text-green-600 dark:text-green-400" />}
        />
      </div>
      <div className="mb-6 grid gap-6 md:grid-cols-2">
        <Card className="w-full md:w-2/3">
              <UserChart />
        </Card>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Upcoming Trips</CardTitle>
            <CardDescription>Trips scheduled in the next 30 days</CardDescription>
          </div>
          <Link href="/admin/trips">
            <Button variant="ghost" className="h-8 text-[#FA7436]">
              View all trips
              <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {upcomingTrips.map((trip) => (
              <Card key={trip.id} className="overflow-hidden p-0">
                <div className="relative h-40">
                  <Image fill src={trip.image} alt={trip.title} loading="lazy" />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-lg font-bold text-white">{trip.title}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="mr-1 h-4 w-4" />
                      {trip.formatDate}
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        trip.seats > 0 && trip.bookedSeats / trip.seats > 0.8
                          ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                          : "bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400"
                      }
                    >
                      {trip.seats > 0 ? `${trip.bookedSeats} / ${trip.seats} Booked` : "Seats data unavailable"}
                    </Badge>
                  </div>
                  <Progress value={trip.bookedSeatsPercentage} />
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
