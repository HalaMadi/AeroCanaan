import { verifyToken } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
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
        const { id } = await context.params;
        if (decoded.userId !== id) {
            return NextResponse.json(
                { error: "Unauthorized to delete this user" },
                { status: 403 }
            );
        }
        const existingUser = await prisma.user.findUnique({
            where: { id }
        });
        if (!existingUser) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }
        await prisma.user.delete({
            where: { id }
        });
        return NextResponse.json(
            { message: "User deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.json(
            { error: "Failed to delete user" },
            { status: 500 }
        );
    }
}
