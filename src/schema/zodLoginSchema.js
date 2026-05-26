import {z} from 'zod';
export const zodLoginSchema = z.object({
    emailOrUsername: z.string().min(1, "Email o Usuario requeridos"),
    password: z.string().min(8, "Contraseña requerida")
});