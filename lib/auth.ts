import jwt from "jsonwebtoken";

export function verifyToken(token: string) {
    try {
        if (!token) return null;
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as { userId: string }; // Assert the type here
        return decoded;
    } catch (err) {
        return null;
    }
}
