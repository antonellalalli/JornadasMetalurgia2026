import {z} from 'zod';


export const zodInscriptionSchema = z.object({
    studentName :z.string().min(2, "Campo obligatorio"),
    studentEmail: z.string().email("Email inválido"),
    studentDni : z.string().min(8, "El dni debe tener al menos 8 carácteres"),
    studentInstitution: z.string().min(2, "Campo obligatorio"),

    isExpositor : z.boolean(),
    presentationTitle:z.string().optional(),
    participants:z.string().optional(),
    presentation: z.any().optional(),
}).superRefine((data, ctx) => {
    if(data.isExpositor){
        if(!data.presentationTitle || data.presentationTitle.trim() === ""){
            ctx.addIssue({
                code: "custom",
                message:"El título de la presentacion es obligatorio",
                path:["presentationTitle"]
            });
        }
        if(!data.presentation || data.presentation.length===0 || !data.presentation[0]){
            ctx.addIssue({
                code:"custom",
                message: "Debes subir un archivo",
                path:["presentation"],
            });
        }

        if(data.participants == 0){
            ctx.addIssue({
                code:"custom",
                message:"Los autores son obligatorios",
                path:["participants"]
            })
        }

    }
})









