
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Fetch all trips from the database
export async function GET() {
    try {
        const trips = await prisma.trip.findMany();
        return NextResponse.json(trips);
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
            destination,
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
                destination,
                duration,
                start_date,
                end_date,
                price,
                seats,
                image
            }
        });
        return NextResponse.json(trip, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: error},
            { status: 500 }
        );
    }
}
