import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Fetch a single trip from the database
export async function GET(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const params = await context.params;
        const trip = await prisma.trip.findUnique({
            where: { id: params.id }
        });
        if (!trip) {
            return NextResponse.json(
                { error: "Trip not found" },
                { status: 404 }
            );
        }
        return NextResponse.json(trip);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch trip" },
            { status: 500 }
        );
    }
}

// Delete a trip from the database
export async function DELETE(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const params = await context.params;
        const trip = await prisma.trip.findUnique({ where: { id: params.id } });
        if (!trip) {
            return NextResponse.json(
                { error: "Trip not found" },
                { status: 404 }
            );
        }
        await prisma.trip.delete({ where: { id: params.id } });
        return NextResponse.json(
            { message: "Trip deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to delete trip" },
            { status: 500 }
        );
    }
}

// Update a trip in the database
export async function PUT(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const params = await context.params;
        const body = await req.json();
        const editedTrip = await prisma.trip.update({
            where: { id: params.id },
            data: body
        });
        return NextResponse.json(
            { message: "Trip updated successfully", trip: editedTrip },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update trip" },
            { status: 500 }
        );
    }
}