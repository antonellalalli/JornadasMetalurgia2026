import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function MenuHamburger() {
    const [isOpen, setIsOpen]= useState(false);
    const handleMenuChange = ()=>{
    setIsOpen(!isOpen)

  }
  return (
        <>
  
      <div className="xl:hidden m-4 ">


      <button onClick={handleMenuChange}
      type="button" className="flex text-sm bg-neutral-primary rounded-full lg:me-0  focus:outline-none " id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        
        <img className="w-10 h-10 cursor-pointer hover:ring-2  hover:ring-orange-500 rounded-full" src='menu.png' alt="Menú"/>
      </button>

        {isOpen && (
      <div className="z-50 absolute w-50 right-2 mt-2 top-full bg-gray-300  justify-start rounded-2xl shadow-lg  " id="user-dropdown">

        <ul className=" flex flex-col items-start p-2 text-sm text-body font-medium " aria-labelledby="user-menu-button">
          <li className='h-12 text-[20px]'>

          <Link to={"/"} className="inline-flex items-center w-full p-2 hover:bg-gray-500 hover:text-heading rounded">Inicio</Link>
          </li>
          <li className="h-12 text-[20px]">
           <Link to={"/Information"} onClick={handleMenuChange} className="inline-flex items-center w-full p-2 hover:bg-gray-500 hover:text-heading rounded cursor-pointer">Información</Link>
          </li>
          <li className='h-12 text-[20px]'>
            <Link to={"/History"} onClick={handleMenuChange} className="inline-flex items-center w-full p-2 hover:bg-gray-500 cursor-pointer hover:text-heading rounded">Historia</Link>
          </li>
          <li className='h-12 text-[20px]'>
            <Link to={"/Certificates"} onClick={handleMenuChange} className="inline-flex items-center w-full p-2 hover:bg-gray-500 cursor-pointer hover:text-heading rounded">Certificados</Link>
          </li>
        </ul>
      </div>
        )}
      </div>
    
    
    
    
    </>
  )
}
