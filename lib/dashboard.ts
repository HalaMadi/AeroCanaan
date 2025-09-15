import prisma from "@/lib/prisma";

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
