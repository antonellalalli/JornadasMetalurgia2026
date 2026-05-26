import { create } from "zustand";
import { signIn, signOut, getSelf } from "../../services/auth";

export const useAuthStore = create((set)=> ({
loading: false,
error :null,
isAuthenticated : false,
isAuthLoading :false,
user: null,



checkLoginStatus : async ()=>{
    set({isAuthLoading: true})
    try{
        const user = await getSelf();
        set({isAuthenticated: true, user:user, isAuthLoading:false})
    }
    catch{
     set({isAuthenticated: false, user:null, isAuthLoading:false})
    }
},

login: async (credentials) =>{
    set({
        loading:true, error:null
    })

        try { const res = await signIn(credentials);
    set({loading:false, user:res.user, isAuthenticated:true, error:null})
    return res;}
    catch(error){
        set({loading:false, user:null, error:"Invalid user or password"})
        throw error;
    }
},



logout : async ()=>{
    
    set({loading:true, error:null})
    try{
        await signOut();
        await new Promise(resolve => setTimeout(resolve, 1500));
        set({error:null, isAuthenticated:false, user:null })
    }
    catch(error){
        console.log("Error logging out", error)
    }
    finally{
        set({loading:false, error:null, isAuthenticated:false, user:null })
    }
}




}))