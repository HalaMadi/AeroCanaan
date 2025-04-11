import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                mobile: true,
                role: true,
                bookings: {
                    select: {
                        id: true
                    }
                }
            }
        });
        return NextResponse.json({
            success: true,
            data: users,
            count: users.length
        }, { status: 200 });
        
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json(
            { 
                success: false,
                error: "Failed to fetch users" 
            },
            { status: 500 }
        );
    }
}