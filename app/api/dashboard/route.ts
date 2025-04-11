import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function getDashboardData() {
    const totalBooking = await prisma.booking.count({});
    const totalUsers = await prisma.user.count();
    const activeTrips = await prisma.trip.count({
        where: {
            start_date: { lte: new Date() },
            end_date: { gte: new Date() }
        }
    });
    return { totalBooking, totalUsers, activeTrips };
}

export async function GET() {
    try {
        const data = await getDashboardData();
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch dashboard data" },
            { status: 500 }
        );
    }
}
