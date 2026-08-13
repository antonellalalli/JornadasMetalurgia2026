import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Information() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
      <div className="flex flex-col justify-center items-center m-5 lg:m-0">

        <div className=" bg-amber-500  w-full lg:w-[950px] h-full m-auto mt-8 rounded-2xl">
          <h1 className="text-[27px] text-start font-semibold m-5 mb-2">Primera Circular</h1>
          <p className="text-start m-5 mt-2  font-medium">
            Nos alegra compartir nuestra primera circular para las Jornadas de Metalurgia 2026. No olvides descargarla y compartirla con tus allegados.
          </p>
          <div className="flex items-center gap-2 m-5">
            <img src="file-word.png" alt="Primera Circular" className="w-6 h-6" />
            <a href="JornadasMetalurgia.jpeg" download="Jornadas de Metalurgia 2026" className=" hover:text-blue-950 font-medium" >Circular: Jornadas de Metalurgia 2026</a>
          </div>

        </div>
                <div className="bg-amber-500 w-full  lg:w-[950px] h-full m-auto mt-10 rounded-2xl">
       
          
          <h1 className="text-[27px] text-start m-5  mb-2 font-semibold "> 
            Programa de actividades - Jornadas de Metalurgia 2026
          </h1>
          <p className= "text-start font-medium m-5  mt-2 mb-2">¡El programa de actividades que se desarrollarán durante las Jornadas de Metalurgia 2026 ya está disponible para ser descargado!
          </p>

          <div className= "flex items-center gap-2  m-5">
          <img src="file-word.png" alt="Modelo de Presentación"  className=" w-6 h-6 "/>
          <a  className=" font-medium hover:text-blue-950" href="Programa_Jornadas_de_Metalurgia_2026.pdf" download="Programa de Actividades 2026">Programa 2026</a>

          </div>
  
        </div>

        
        <div className="bg-amber-500 w-full  lg:w-[950px] h-full m-auto mt-10 rounded-2xl">
       
          
          <h1 className="text-[27px] text-start m-5  mb-2 font-semibold "> 
            Archivo de Presentación
          </h1>
          <p className= "text-start font-medium m-5  mt-2 mb-2">Para enviar el resumen de su presentación, es necesario que respete el siguiente formato. A continuación se encuentra el archivo descargable con la plantilla correcta.
          </p>

          <div className= "flex items-center gap-2  m-5">
          <img src="file-word.png" alt="Modelo de Presentación"  className=" w-6 h-6 "/>
          <a  className=" font-medium hover:text-blue-950" href="Formato-Resumen-Extenso-JM-2026.doc" download="Formato Resumen Extenso Jornadas Metalúrgicas 2026">Formato de Presentación</a>

          </div>
          <p className="m-5  mb-3">Recuerde convertir el archivo final a formato .pdf antes de subirlo.</p>
        </div>

        
        

        

    </div>
    </div>
    <Footer/>
    </>
    
  )
}
