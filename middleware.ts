import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("auth-token")?.value;
    const userRole = req.cookies.get("userRole")?.value;
    if (req.nextUrl.pathname.startsWith("/admin")) {
        if (!token) {
            const response = NextResponse.redirect(new URL("/login", req.url));
            response.cookies.set(
                "error",
                "You must be logged in to access this page.",
                { httpOnly: false, maxAge: 60 * 60 * 24 } // Expires after 1 day
            );
            return response;
        }
        if (userRole?.toUpperCase() !== "ADMIN") {
            const response = NextResponse.redirect(new URL("/", req.url));
            response.cookies.set(
                "error",
                "You are not authorized to access this page.",
                { httpOnly: false, maxAge: 60 * 60 * 24 }
            );
            return response;
        }
        return NextResponse.next();
    }
    if (req.nextUrl.pathname.startsWith("/booking")) {
        if (!token) {
            const response = NextResponse.redirect(new URL("/login", req.url));
            response.cookies.set(
                "error",
                "You must be logged in to access this page.",
                { httpOnly: false, maxAge: 60 * 60 * 24 }
            );
            return response;
        }
        return NextResponse.next();
    }
    if (req.nextUrl.pathname.startsWith("/user-profile")) {
        if (!token) {
            const response = NextResponse.redirect(new URL("/login", req.url));
            response.cookies.set(
                "error",
                "You must be logged in to access this page.",
                { httpOnly: false, maxAge: 60 * 60 * 24 }
            );
            return response;
        }
        return NextResponse.next();
    }
}

export const config = {
    matcher: ["/admin/:path*", "/booking/:path*", "/user-profile/:path*"]
};
