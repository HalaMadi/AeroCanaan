import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { logInSchema } from "@/lib/validationSchemas";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const validation = logInSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(validation.error.format(), {
                status: 400
            });
        }
        const { email, password } = validation.data;
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return NextResponse.json(
                { error: "Invalid email or password" },
                { status: 401 }
            );
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json(
                {
                    error: "Invalid email or password"
                },
                { status: 401 }
            );
        }
        const jwtSecret = process.env.JWT_SECRET_KEY;
        if (!jwtSecret) {
            throw new Error(
                "JWT_SECRET_KEY is not defined in the environment variables."
            );
        }
        const token = jwt.sign({ userId: user.id, email }, jwtSecret, {
            expiresIn: "1d"
        });
        return NextResponse.json(
            {
                message: "Login successful",
                token
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}
