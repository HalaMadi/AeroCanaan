import { getDashboardData } from "@/lib/dashboard";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const data = await getDashboardData();
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch dashboard data" },
            { status: 500 }
        );
    }
}
