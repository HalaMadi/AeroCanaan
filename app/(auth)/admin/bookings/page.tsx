"use client";
import { useState, useEffect } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {
    Calendar,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Download,
    Eye,
    Filter,
    MoreHorizontal,
    Search,
    CheckCircle,
    Clock,
    AlertCircle,
    MapPin
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDateRange } from "@/lib/formatDate";
import { useBookings } from "@/hooks/useBookings";

export default function BookingsPage() {
    const {
        setCurrentPage,
        loading,
        searchTerm,
        setSearchTerm,
        currentPage,
        totalCount,
        itemsPerPage,
        paginatedBookings,
        totalPages,
        filteredBookings,
        handlePageChange
    } = useBookings();

    return (
        <div className="p-6">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">
                        Bookings
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Manage customer bookings and reservations
                    </p>
                </div>
                <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" /> Export
                </Button>
            </div>
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle>All Bookings</CardTitle>
                    <CardDescription>
                        {loading
                            ? "Loading bookings..."
                            : totalCount === 0
                              ? "No bookings found"
                              : `Showing ${Math.min(currentPage * itemsPerPage, filteredBookings.length)} of ${filteredBookings.length} bookings`}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="mb-6 flex flex-col gap-4 md:flex-row">
                        <div className="relative flex-1">
                            <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <Input
                                type="search"
                                placeholder="Search bookings..."
                                className="bg-white pl-8 dark:bg-gray-950"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                        <Button variant="outline" className="w-full md:w-auto">
                            <Filter className="mr-2 h-4 w-4" />
                            Filters
                        </Button>
                    </div>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Booking ID</TableHead>
                                    <TableHead>Customer</TableHead>
                                    <TableHead>Trip</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loading ? (
                                    Array.from({ length: 5 }).map((_, i) => (
                                        <TableRow key={`skeleton-${i}`}>
                                            <TableCell>
                                                <Skeleton className="h-4 w-[100px]" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton className="h-4 w-[150px]" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton className="h-4 w-[150px]" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton className="h-4 w-[100px]" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton className="h-4 w-[80px]" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton className="h-4 w-[100px]" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton className="h-4 w-[50px]" />
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : paginatedBookings.length === 0 ? (
                                    <TableRow>
                                        <TableCell
                                            colSpan={7}
                                            className="py-8 text-center"
                                        >
                                            {searchTerm
                                                ? "No bookings match your search"
                                                : "No bookings found"}
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    paginatedBookings.map((booking,index) => (
                                        <TableRow key={booking.id}>
                                            <TableCell className="font-medium">
                                                {(booking.id as string)
                                                    .slice(0, 10)}
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <div>
                                                        <div className="font-medium">
                                                            {booking.user
                                                                ?.firstName ||
                                                                "N/A"}
                                                        </div>
                                                        <div className="text-xs text-gray-500">
                                                            {booking.user
                                                                ?.email ||
                                                                "N/A"}
                                                        </div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div>{booking.trip.title}</div>
                                                <div className="flex items-center text-xs text-gray-500">
                                                    <MapPin className="mr-1 h-3 w-3" />{" "}
                                                    {booking.trip.location}
                                                </div>
                                            </TableCell>
                                            <TableCell className="flex items-center">
                                                <Calendar className="mr-1 h-3.5 w-3.5 text-gray-500" />
                                                {formatDateRange(
                                                    booking.trip.start_date,
                                                    booking.trip.end_date
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                <div className="font-medium">
                                                    ${booking.trip.price}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {booking.trip.seats}{" "}
                                                    {booking.trip.seats === 1
                                                        ? "seat"
                                                        : "seats"}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    className={
                                                        booking.status ===
                                                        "CONFIRMED"
                                                            ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                                                            : booking.status ===
                                                                "PENDING"
                                                              ? "bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400"
                                                              : "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                                                    }
                                                >
                                                    {booking.status ===
                                                    "CONFIRMED" ? (
                                                        <CheckCircle className="mr-1 h-3 w-3" />
                                                    ) : booking.status ===
                                                      "PENDING" ? (
                                                        <Clock className="mr-1 h-3 w-3" />
                                                    ) : (
                                                        <AlertCircle className="mr-1 h-3 w-3" />
                                                    )}
                                                    {booking.status
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        booking.status
                                                            .slice(1)
                                                            .toLowerCase()}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        asChild
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            className="h-8 w-8 p-0"
                                                        >
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuLabel>
                                                            Actions
                                                        </DropdownMenuLabel>
                                                        <DropdownMenuItem>
                                                            <Eye className="mr-2 h-4 w-4" />{" "}
                                                            View Details
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Download className="mr-2 h-4 w-4" />{" "}
                                                            Download Invoice
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="text-red-600 dark:text-red-400">
                                                            <AlertCircle className="mr-2 h-4 w-4" />{" "}
                                                            Cancel Booking
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>

                    {/* Pagination - Only show if there are multiple pages */}
                    {totalPages > 1 && (
                        <div className="mt-6 flex items-center justify-between">
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Showing {(currentPage - 1) * itemsPerPage + 1}{" "}
                                to{" "}
                                {Math.min(
                                    currentPage * itemsPerPage,
                                    filteredBookings.length
                                )}{" "}
                                of {filteredBookings.length} bookings
                            </div>
                            <div className="flex items-center space-x-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => handlePageChange(1)}
                                    disabled={currentPage === 1}
                                >
                                    <ChevronsLeft className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() =>
                                        handlePageChange(currentPage - 1)
                                    }
                                    disabled={currentPage === 1}
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <span className="text-sm">
                                    Page {currentPage} of {totalPages}
                                </span>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() =>
                                        handlePageChange(currentPage + 1)
                                    }
                                    disabled={currentPage === totalPages}
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => handlePageChange(totalPages)}
                                    disabled={currentPage === totalPages}
                                >
                                    <ChevronsRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
