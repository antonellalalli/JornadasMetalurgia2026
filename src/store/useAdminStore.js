import { create } from "zustand";

import { getInscriptions, getUsers, updateUser, deleteInscription } from "../../services/adminService"; 




export const useAdminStore = create((set, get)=> ({
    users: [],
    inscriptions: [],
    inscriptionTypeSelected: "Attendance",
    loading: false,
    error :null,
    searchQuery : "", 
    setInscriptionType : (type) => set({inscriptionTypeSelected: type, loading:true, error:null}), 
    
    fetchUsers: async () => {
        set({ loading: true, error: null });
        try {
            const usersFromApi = await getUsers();
            const mappedUsers = usersFromApi.map(user => ({
                Id: user.id,
                UserName: user.userName,
                Email: user.email,
                Role: user.role
            }))



            set({ users: mappedUsers, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },


    updateUser : async (userId,updatedData) => {
        set({ loading: true, error: null });
        try {
            await updateUser(userId, updatedData);
            await get().fetchUsers();
            set({ loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
            console.error("Error updating user:", error);
        }
    },

    setSearchQuery : (query) => {
        set({searchQuery: query, loading:true, error:null})
    },

    fetchInscriptions: async (type, query) => {
        set ({  loading: true });
        try {
            const inscriptionsFromApi = await getInscriptions(type, query);
            set({ inscriptions: Array.isArray(inscriptionsFromApi) ? inscriptionsFromApi : [], loading: false });

            }
        catch (error) {
            set({ error: error.message, loading: false });
        }
    },



    deleteOneInscription : async (id) =>{
        set({loading: true, error: null})
        try {
            await deleteInscription(id);
            const currentType = get().inscriptionTypeSelected;
            await get().fetchInscriptions(currentType);
            set({loading:false})
            
        }catch (error){
            set({ loading: false, error: error.message });
            console.error("Error deleting inscription", error)}
        }
    }))