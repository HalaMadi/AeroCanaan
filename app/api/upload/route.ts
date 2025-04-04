import { NextRequest, NextResponse } from "next/server";
import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function POST(req: NextRequest) {
    try {
        const { image } = await req.json();
        if (!image)
            return NextResponse.json(
                { error: "No image provided" },
                { status: 400 }
            );
        const uploadResult = await cloudinary.v2.uploader.upload(image, {
            folder: "trips"
        });
        return NextResponse.json({
            message: "Image uploaded successfully",
            imageUrl: uploadResult.secure_url
        });
    } catch (error) {
        return NextResponse.json(
            { error: "Upload failed", details: error },
            { status: 500 }
        );
    }
}
