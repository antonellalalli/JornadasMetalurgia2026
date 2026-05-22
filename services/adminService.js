
import { api } from "../utils/api";


//traer inscripciones
//traer usuarios
export const getUsers = async ()=>{
    const res = await api.get("/JornadaMetalurgica/users");
    return res.data;
}


export const updateUser = async (id, formData )=>{
    const apiData ={
        userName : formData.userName,
        email : formData.email,
        role : formData.role,
    };
    const res = await api.put(`/JornadaMetalurgica/users/${id}`, apiData);
    return res.data;

}

export const getInscriptions = async (type)=>{
    const res = await api.get(`/JornadaMetalurgica/inscriptions?type=${type}`)
    return res.data;
}
 

export const deleteInscription = async (id) => {
    await api.delete(`/JornadaMetalurgica/inscriptions/${id}`)
}