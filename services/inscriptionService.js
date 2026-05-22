import { api } from "../utils/api";


export const createInscription = async (formData) =>{
       const res = await api.post("/JornadaMetalurgica/create", formData)
            return await res.data;
        }
