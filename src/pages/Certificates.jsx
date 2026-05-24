import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Certificates() {
  return (
    <>

        <Navbar />
        <div className='min-h-screen'>
        <div className='bg-amber-500 m-auto w-90 md:w-260 h-80 md:h-80 flex flex-col justify-start items-center rounded-2xl mt-10 shadow-2xl hover:transform hover:scale-105 transition-transform duration-300'>
            <h1 className='font-bold text-[20px] md:text-4xl text-center mt-10'>¡Los certificados todavía no están disponibles!</h1>
            <p className='mt-5 text-center text-[16px] md:text-[20px] font-semibold mb-5'>
                ¡Para obtener un certificado, es necesario inscribirse y asistir a las jornadas!</p>
                <p className='font-semibold text-[16px] text-center md:text-[20px] mb-3'>¡Podes sumarte a traves de esta inscripción!</p>
                          <button className="bg-[#ff8017] hover:bg-[#e67414] text-white font-bold py-2 px-4 w-60 h-15 rounded-md md:w-100 md:h-20">
                <Link to="/Inscription" className='md:text-[30px] text-[22px]'>INSCRIPCIÓN</Link>
              </button>
        </div>
        </div>
        <Footer/>
    </>
  )
}
