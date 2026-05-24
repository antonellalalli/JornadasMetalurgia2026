import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Certificates() {
  return (
    <>

        <Navbar />
        <div className='min-h-screen m-10'>
        <div className='bg-amber-500 m-auto w-full  xl:w-260 h-full  xl:h-80 flex flex-col justify-center items-center rounded-2xl mt-10 shadow-2xl hover:transform 
        hover:scale-105 transition-transform duration-300'>
          <div className='flex flex-col items-center justify-center ml-6 mr-6 '>

            <h1 className='font-bold text-[18px] xl:text-4xl text-center mt-10'>¡Los certificados todavía no están disponibles!</h1>
            <p className='mt-5 text-center text-[14px] xl:text-[20px] font-semibold mb-5'>
                ¡Para obtener un certificado, es necesario inscribirse y asistir a las jornadas!</p>
                <p className='font-semibold text-[14px] text-center xl:text-[20px] mb-3'>¡Podes sumarte a traves de esta inscripción!</p>
                          <button className="bg-[#ff8017] hover:bg-[#e67414] text-white font-bold py-2 px-4 w-60 h-15 rounded-xl xl:w-100 xl:h-20 mb-6">
                <Link to="/Inscription" className='xl:text-[30px] text-[22px] '>INSCRIPCIÓN</Link>
              </button>
          </div>
        </div>
        </div>
        <Footer/>
    </>
  )
}
