import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
    try {
        const { firstName, lastName, email, mobile, password } =
            await req.json();
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                mobile,
                password: hashedPassword
            }
        });
        const token = jwt.sign(
            { userId: newUser.id, firstName, lastName, email },
            process.env.JWT_SECRET_KEY!,
            { expiresIn: "2h" }
        );
        return NextResponse.json(
            { message: "User Added successfully", token },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
