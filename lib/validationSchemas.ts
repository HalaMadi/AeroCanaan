import { z } from "zod";

export const signupSchema = z
    .object({
        firstName: z
            .string()
            .min(2, "First Name must be at least 2 characters"),
        lastName: z.string().min(2, "Last Name must be at least 2 characters"),
        email: z.string().email("Invalid email format"),
        mobile: z.string().regex(/^\+?\d{10,15}$/, "Invalid phone number"),
        password: z.string().min(6, "Password must me more than 6 characters"),
        confirmPassword: z.string()
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"]
    });
