
import { create } from "zustand";
import { createInscription } from "../../services/inscriptionService";


export const useInscriptionStore = create((set)=> ({

loading:false,
error:null,
success:false,

createOneInscription: async (payload) => {
    set({loading:true, error:null, success:false });

    try{
        const formData = new FormData();

        Object.keys(payload).forEach((key) => {
            if(payload[key] !== null && payload[key] !== undefined){
                if(key === "Participants" && Array.isArray(payload[key])){
                    payload[key].forEach((participant, index)=> {
                        formData.append(`Participants[${index}]`, participant);
                    });
                } else{
                    formData.append(key, payload[key])
                }
            }
        });

        const result = await createInscription(formData);

        set({loading:false, success:true, error:null});
        return result;




    } catch(error){
        const errorMessage = error.response?.data?.message || "Error al procesar inscripcion"
        set({loading:false, error: errorMessage, success:false});
        throw error;
    }

}, 
resetInscriptionState: () => set({error:null, success:false, loading:false}),






}))