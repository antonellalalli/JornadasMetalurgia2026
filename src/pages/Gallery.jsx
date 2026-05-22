import React from 'react'
import Carrousel from '../components/Carrousel'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Gallery() {
  return (
    <>      
      <Navbar />
        <div className='min-h-screen'>

        <div className='bg-amber-300 flex justify-center items-center m-auto'>
        <Carrousel />

        </div>
        </div>
        <Footer />
    
    </>
  )
}
