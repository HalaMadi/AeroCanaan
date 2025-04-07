import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { slugify } from "@/lib/slugify";

export async function POST(req: NextRequest) {
    const {
        name,
        category,
        shortDesc,
        fullDesc,
        location,
        bestTimeToVisit,
        accessibilityInfo,
        localTips,
        images
    } = await req.json();
    const slug = slugify(name);
    try {
        const formattedImages = images.map((image: any) => {
            if (typeof image.url !== "string") {
                throw new Error("Each image URL should be a string");
            }
            return { url: image.url };
        });
        const place = await prisma.place.create({
            data: {
                name,
                slug,
                category,
                shortDesc,
                fullDesc,
                location,
                bestTimeToVisit,
                accessibilityInfo,
                localTips,
                images: {
                    create: formattedImages
                }
            }
        });
        return NextResponse.json(place, { status: 201 });
    } catch (error) {
        console.error("Error creating place:", error);
        return NextResponse.json("Failed to create place", { status: 500 });
    }
}

export async function GET() {
    try {
        const places = await prisma.place.findMany({
            include: {
                images: true,
                trips: true
            }
        });
        return NextResponse.json(places, { status: 200 });
    } catch (error) {
        console.error("Error fetching places:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
