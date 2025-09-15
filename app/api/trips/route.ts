import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Fetch all trips from the database
export async function GET() {
    try {
        const trips = await prisma.trip.findMany({
            include: {
                bookings: {
                    where: {
                        status: "CONFIRMED"
                    }
                }
            }
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedTrips = trips.map((trip: any) => ({
            ...trip,
            bookedSeats: trip.bookings.length,
            availableSeats: trip.seats - trip.bookings.length,
            status: trip.bookings.length > 0 ? "active" : "inactive"
        }));
        return NextResponse.json(formattedTrips, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch trips" },
            { status: 500 }
        );
    }
}
// Create a new trip in the database
export async function POST(req: NextRequest) {
    try {
        const {
            title,
            location,
            duration,
            start_date,
            end_date,
            price,
            seats,
            image
        } = await req.json();
        const trip = await prisma.trip.create({
            data: {
                title,
                location,
                duration,
                start_date,
                end_date,
                price,
                seats,
                image,
                slug: title.toLowerCase().replace(/\s+/g, "-"), // Example slug generation
                rating: 0
            }
        });
        return NextResponse.json(trip, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
