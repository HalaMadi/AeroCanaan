// handler for bookings/[id] route
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const cookieStore = await cookies(); 
        const token = cookieStore.get("auth-token")?.value; 
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const booking = await prisma.booking.findFirst({
            where: { 
                id: params.id,
                userId: decoded.userId
            },
            include: {
                trip: true
            }
        });

        if (!booking) {
            return NextResponse.json({ error: "Booking not found" }, { status: 404 });
        }

        return NextResponse.json(booking, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
