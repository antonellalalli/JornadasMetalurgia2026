import React, { useEffect } from 'react'
import { useAdminStore } from '../store/useAdminStore';

export default function Searcher() {
    const fetchInscriptions = useAdminStore((state) => state.fetchInscriptions)
    const {searchQuery, inscriptionTypeSelected} = useAdminStore();
    const setSearchQuery = useAdminStore((state)=> state.setSearchQuery)

    const handleInputSearch = (e) => {
      setSearchQuery(e.target.value);

      
    }


    useEffect(() => {
      const delay = setTimeout(()=>{
        fetchInscriptions(inscriptionTypeSelected, searchQuery)}, 500
      )
      return ()=> clearTimeout(delay);
    }, [searchQuery, inscriptionTypeSelected])
  return (
    <>
    
    <div className=" relative m-auto flex flex-row items-center ">
        <img src="search.png" alt="Buscar"  className=' absolute  right-3 w-6 h-6 m-3 '/>
        <input onChange={handleInputSearch} type="search" id="search" className=" w-80 p-3 ps-9  text-heading bg-gray-200  rounded-2xl text-sm m-2 border-transparent focus:ring-1  shadow-xs placeholder:text-body" placeholder="Buscar Inscripción" required />

    </div>


    
    </>
    
  )
}
