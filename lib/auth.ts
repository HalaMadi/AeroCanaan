import jwt from "jsonwebtoken";

export function verifyToken(token: string) {
    try {
        if (!token) return null;
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET_KEY as string
        ) as { userId: string };
        return decoded;
    } catch (err) {
        return null;
    }
}

export const isAuthenticated = () => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("auth-token");

        return !!token;
    }
    return false;
};
