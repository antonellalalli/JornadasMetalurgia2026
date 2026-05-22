import { api } from "../utils/api";

//login
export const signIn = async (credentials) => {
    const res = await api.post("/JornadaMetalurgica/login", credentials);
    return res.data;
}

//logout
export const signOut = async ()=> {
await api.post("/JornadaMetalurgica/logout")
}
//Para que usarlo
export const getSelf = async ()=> {
    const res = await api.get("/JornadaMetalurgica/me");
    return res.data;
}

//funcionamiento
export const checkAuth = async ()=> {
    try{
        const res = await api.get("/JornadaMetalurgica/health");
        return res.status === 200;
    } catch {
        return false;
    }
}