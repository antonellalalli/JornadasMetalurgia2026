import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useAdminStore } from '../store/useAdminStore'

import { alertConfirm } from '../alerts/alert'
import Searcher from '../components/Searcher'


export default function AdminPanel() {

const handleDownload = async (path) =>{
    try {
        if(!path) return;
        const secureUrl =path.replace("/upload/", "/upload/fl_attachment/")

     window.open(secureUrl, "_blank")

    }
        catch (error){
            console.error("Error al descargar", error);
            alert("ERROR AL DESCARGAR");
        }
    }


   const inscriptionTypeSelected = useAdminStore((state)=> state.inscriptionTypeSelected);
   const setInscriptionType = useAdminStore((state) => state.setInscriptionType)
   const fetchInscriptions = useAdminStore((state)=> state.fetchInscriptions)
    const inscriptions = useAdminStore((state)=> state.inscriptions)
   const loading = useAdminStore((state)=> state.loading)
 const deleteOneInscription = useAdminStore((state)=> state.deleteOneInscription)

    useEffect(() => {
        fetchInscriptions(inscriptionTypeSelected, "")
    }, []);

    
  return (
    <>
    <Navbar />
    <div className='min-h-screen pb-20 '>
        <div className='m-auto mt-8 flex items-center flex-col gap-5 '>
    <h1 className='text-3xl font-semibold text-center'>Panel de Administrador</h1>
            <Searcher/>
        </div>
        

        <div>
            <ul className='text-2xl font-medium flex flex-row  gap-20 text-center mt-8 items-center justify-center text-[22px]'>
                <li onClick={()=> setInscriptionType("Attendance")} className={ `admin-li ${inscriptionTypeSelected == "Attendance" ? "admin-li-active" : ""}`}>Inscripciones Asistencia</li>

                <li onClick={()=>setInscriptionType("Presentation")} className={`admin-li ${inscriptionTypeSelected == "Presentation" ? "admin-li-active" : ""}`}>Inscripciones Presentación</li>

            </ul>
        </div>

        
{/*Tabla*/ }
<div className="relative mt-5 w-300 m-auto overflow-x-auto overflow-y-auto max-h-[65vh] shadow-xs rounded-2xl  ">

    {loading  ? 
    (<p className='m-auto text-2xl text-center p-4 '>Cargando datos de las Jornadas...</p>) : 
    (
    <table className="w-full text-sm text-center rtl:text-right text-body">
        <thead className=" sticky top-0 z-10 text-sm">
            <tr>
                <th scope="col" className="px-6 py-3 bg-gray-300 border-b font-medium">
                    ID
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-300 border-b font-medium">
                    Nombre del Estudiante
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-300 border-b font-medium">
                    Email del Estudiante
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-300 border-b font-medium">
                    DNI del Estudiante
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-300 border-b font-medium">
                    Institución
                </th>

                {inscriptionTypeSelected == "Presentation" && (
                    <>
                     <th scope="col" className="px-6 py-3 bg-gray-300 border-b font-medium">
                    Nombre del Trabajo
                    </th>
                     <th scope="col" className="px-6 py-3 bg-gray-300 border-b font-medium">
                    Autores
                    </th>           
                     <th scope="col" className="px-6 py-3 bg-gray-300 border-b font-medium">
                    Trabajo
                    </th>                            

                    </>  )}
                  <th className="px-6 py-4 text-right border-b bg-gray-300">
                    <a href="#" className="font-medium text-fg-brand ">Accion</a>
                </th>
            </tr>
        </thead>
        <tbody className='divide-y divide-slate-100 text-center'>
            {Array.isArray(inscriptions) && inscriptions.length > 0 ? (
                inscriptions.map((inscription)=> (
                    <tr key={inscription.id} className="bg-gray-100 border-b border-default hover:bg-gray-200 ">
                     <td className="px-6 py-4">
                    {inscription.id}</td>

                     <td className="px-6 py-4">
                    {inscription.studentName}
                    </td>
                     <td className="px-6 py-4">
                    {inscription.studentEmail}
                    </td>
                     <td className="px-6 py-4">
                    {inscription.studentDni}
                    </td> 
                    <td className="px-6 py-4">
                    {inscription.studentInstitution}
                    </td>

                    {inscriptionTypeSelected === "Presentation" && (
                        <>
                     <td className="px-6 py-4">
                    {inscription.presentationTitle || <span> - </span>}
                    </td>    
                     <td className="px-6 py-4">
                    {inscription.presentationParticipants}
                    </td>    

                    <td className="px-6 py-4">
                        {inscription.presentation ? (
                            <button 
                            onClick={()=> handleDownload(inscription.presentation)}
                        
                            className='inline-flex items-center '><img  className="w-6 h-6 cursor-pointer" src="download-pdf.png" alt="Descargar" /> </button> ) : (<span>-</span>)
                        }
                    </td>
                        </>)}
                        
                    <td >
                        <button onClick={async ()=> {
                            if( await alertConfirm("Eliminar inscripción", "¿Desea desactivar esta inscripción? Se desactivará permanentemente.")){deleteOneInscription(inscription.id)}
                        }}>
                            <img src="bin.png" className='w-7 h-7 cursor-pointer' alt="Eliminar" />
                        </button> 
                    </td>
                    </tr>
))

            ) : ( 
                <tr>
                    <td colSpan={inscriptionTypeSelected === "Presentation" ? 10:6} className='text-center'>
                No hay Inscripciones registradas.
                    </td>
                </tr>
            
        
            )}
                </tbody>

    </table>
    )} 
    </div>
</div>
<Footer/>
    </>

  )
}
