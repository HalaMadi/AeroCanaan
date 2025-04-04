import { verifyToken } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// handles booking creation
export async function POST(request: NextRequest) {
    try {
        const token = request.headers.get("token");
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const decoded = verifyToken(token);
        if (!decoded) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const { tripId } = await request.json();
        const booking = await prisma.booking.create({
            data: {
                tripId,
                userId: decoded.userId,
                status: "PENDING"
            }
        });
        return  NextResponse.json(booking, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// gets all bookings for a user
export async function GET(request: NextRequest) {
    try {
        const token = request.headers.get("token");
        if (!token) {
            return  NextResponse.json("Unauthorized", { status: 401 });
        }
        const decoded = verifyToken(token);
        if (!decoded) {
            return  NextResponse.json("Unauthorized", { status: 401 });
        }
        const bookings = await prisma.booking.findMany({
            where: { userId: decoded.userId },
            include: {
                trip: true
            }
        });
        return  NextResponse.json(bookings, { status: 200 });
    } catch (error) {
        console.error(error);
        return  NextResponse.json("Internal Server Error", { status: 500 });
    }
}

// handles booking update
export async function PUT(request: NextRequest) {
    try {
        const token = request.headers.get("token");
        if (!token) {
            return  NextResponse.json("Unauthorized", { status: 401 });
        }
        const decoded = verifyToken(token);
        if (!decoded) {
            return  NextResponse.json("Unauthorized", { status: 401 });
        }
        const { bookingId, status } = await request.json();
        const booking = await prisma.booking.update({
            where: { id: bookingId },
            data: {
                status: status || "PENDING"
            }
        });
        return  NextResponse.json(booking, { status: 200 });
    } catch (error) {
        console.error(error);
        return  NextResponse.json("Internal Server Error", { status: 500 });
    }
}
// handles booking deletion
export async function DELETE(req: NextRequest) {
    try {
        const token = req.headers.get("token");
        if (!token) {
            return NextResponse.json(
                { error: "Token not provided" },
                { status: 401 }
            );
        }
        const decoded = verifyToken(token);
        if (!decoded || !decoded.userId) {
            return NextResponse.json(
                { error: "Invalid or expired token" },
                { status: 401 }
            );
        }
        const { bookingId } = await req.json();
        await prisma.booking.delete({
            where: { id: bookingId }
        });
        return NextResponse.json(
            { message: "Booking deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting booking:", error);
        return NextResponse.json(
            { error: "Failed to delete booking" },
            { status: 500 }
        );
    }
}
