import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function GET(req: NextRequest) {
    try {
        const token = req.headers.get("token");
        if (!token) {
            return NextResponse.json(
                { error: "Token not provided" },
                { status: 401 }
            );
        }
        const decoded = verifyToken(token);
        if (!decoded) {
            return NextResponse.json(
                { error: "Invalid token" },
                { status: 401 }
            );
        }
        if (!decoded.userId) {
            return NextResponse.json(
                { error: "Invalid token, missing user ID" },
                { status: 400 }
            );
        }
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                mobile: true
            }
        });
        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json(
            { error: "Failed to fetch user" },
            { status: 500 }
        );
    }
}
export async function PUT(req: NextRequest) {
    try {
        const token = req.headers.get("token");
        if (!token) {
            return NextResponse.json(
                { error: "Token not provided" },
                { status: 401 }
            );
        }
        const decoded = verifyToken(token);
        if (!decoded) {
            return NextResponse.json(
                { error: "Invalid token" },
                { status: 401 }
            );
        }
        if (!decoded.userId) {
            return NextResponse.json(
                { error: "Invalid token, missing user ID" },
                { status: 400 }
            );
        }
        const body = await req.json();
        const updatedUser = await prisma.user.update({
            where: { id: decoded.userId },
            data: body
        });
        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update user" },
            { status: 500 }
        );
    }
}

