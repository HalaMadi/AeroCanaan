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
        const formattedImages = images.map((image: { url: string }) => {
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const enrichedPlaces = places.map((place: any) => ({
            ...place,
            availableTrips: place.trips ? place.trips.length : 0
        }));
        return NextResponse.json(enrichedPlaces, { status: 200 });
    } catch (error) {
        console.error("Error fetching places:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json();
        if (!id) {
            return NextResponse.json("ID is required", { status: 400 });
        }
        await prisma.image.deleteMany({
            where:{placeId: id}
        })
        const place = await prisma.place.delete({
            where: {
                id
            }
        });
        return NextResponse.json(JSON.stringify(place), { status: 200 });
    } catch (error) {
        console.error("Error deleting place:", error);
        return NextResponse.json("Failed to delete place", { status: 500 });
    }
}
