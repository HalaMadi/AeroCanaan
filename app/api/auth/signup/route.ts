import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signupSchema } from "@/lib/validationSchemas";
const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const validation = signupSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(validation.error.format(), {
                status: 400
            });
        }
        const { firstName, lastName, email, mobile, password } =
            validation.data;
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
        return NextResponse.json(
            { message: "User Added successfully", newUser },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
