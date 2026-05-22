import {z} from 'zod';
export const zodLoginSchema = z.object({
    emailOrUsername: z.string().min(1, "Email or username is required"),
    password: z.string().min(8, "Password is required")
});