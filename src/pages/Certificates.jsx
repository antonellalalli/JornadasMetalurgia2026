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

            <h1 className='font-bold text-[18px] xl:text-4xl text-center mt-10'>¡Los certificados ya estan disponibles!</h1>
            <p className='mt-5 text-center text-[14px] xl:text-[20px] font-semibold mb-5'>
                ¡Muchas gracias por formar parte de las Jornadas de Metalurgia 2026!
              
                <p>¡Nos vemos el próximo</p>
                </p>
                          <button className="bg-[#ff8017] hover:bg-[#e67414] text-white font-bold py-2 px-4 w-60 h-15 rounded-xl xl:w-100 xl:h-20 mb-6">
                <a href="https://drive.google.com/drive/folders/1o05DQ1_enuVQMQxZ3qm-blRl5wNRjwq8?usp=sharing" className='xl:text-[28px] text-[16px] '>DESCARGAR CERTIFICADO</a>
              </button>
          </div>
        </div>
        </div>
        <Footer/>
    </>
  )
}
