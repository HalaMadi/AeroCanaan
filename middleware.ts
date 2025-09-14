import { NextRequest, NextResponse } from "next/server";

function requireAuth(req: NextRequest, redirectUrl: string, errorMsg: string) {
    const token = req.cookies.get("auth-token")?.value;
    if (!token) {
        const response = NextResponse.redirect(new URL(redirectUrl, req.url));
        response.cookies.set(
            "error",
            errorMsg,
            { httpOnly: false, maxAge: 60 * 60 * 24 }
        );
        return response;
    }
    return null;
}

export function middleware(req: NextRequest) {
    const token = req.cookies.get("auth-token")?.value;
    const userRole = req.cookies.get("userRole")?.value;

    if (req.nextUrl.pathname.startsWith("/admin")) {
        const authResponse = requireAuth(req, "/login", "You must be logged in to access this page.");
        if (authResponse) return authResponse;
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
        const authResponse = requireAuth(req, "/login", "You must be logged in to access this page.");
        if (authResponse) return authResponse;
        return NextResponse.next();
    }

    if (req.nextUrl.pathname.startsWith("/user-profile")) {
        const authResponse = requireAuth(req, "/login", "You must be logged in to access this page.");
        if (authResponse) return authResponse;
        return NextResponse.next();
    }
}

export const config = {
    matcher: ["/admin/:path*", "/booking/:path*", "/user-profile/:path*"]
};
