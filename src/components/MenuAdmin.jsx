import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { useAdminStore } from '../store/useAdminStore';

export default function MenuAdmin() {
const { user, logout} = useAuthStore();
const {updateUser} = useAdminStore();
const navigate = useNavigate();
    const[isOpen, setIsOpen] = useState(false);

    const handleMenuChange = () => {
        setIsOpen(!isOpen);
    }

 const handleLogOut = async ()=> {
    await logout();
    navigate("/")
 }
  return (
    <>
  
      <div className="flex relative items-center lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">

      <button onClick={handleMenuChange}
      type="button" className="flex text-sm bg-neutral-primary rounded-full lg:me-0  focus:outline-none " id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        
        <img className="w-10 h-10 cursor-pointer hover:ring-2  hover:ring-orange-500 rounded-full" src='profile.png' alt="user photo"/>
      </button>
        {isOpen && (
      <div className="z-50 absolute right-0 mt-2 top-full bg-gray-300 border-2 rounded-2xl shadow-lg w-44" id="user-dropdown">
        <div className="px-4 py-3 text-sm border-b border-default">
          <span className="block text-heading font-medium">{user?.Username || user?.userName || "Administrador"}</span>
          
          <span className="block text-body truncate">{user?.email || user?.Email || "Administrador - UTN"}</span>
        </div>
        <ul className="p-2 text-sm text-body font-medium" aria-labelledby="user-menu-button">
          <li>
            <button onClick={updateUser} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Cambiar Contraseña</button>
          </li>
          <li>
            <button onClick={handleLogOut} className="inline-flex items-center w-full p-2 hover:bg-gray-400 cursor-pointer hover:text-heading rounded">Cerrar Sesión</button>
          </li>
        </ul>
      </div>
        )}
      </div>
    
    
    
    
    </>
  )
}

