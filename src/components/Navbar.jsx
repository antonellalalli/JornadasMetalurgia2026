import React from "react";
import { Link } from "react-router-dom";
import MenuAdmin from "./MenuAdmin";
import { useAuthStore } from "../store/useAuthStore";
export default function Navbar() {

  const isAuthenticated = useAuthStore((state)=> state.isAuthenticated);

  return (


    <>
      <header className="bg-[#edeeef] ">
        <nav className="flex items-end  h-25 gap-4 justify-around ">
          <div className="flex justify-center items-center m-auto mr-auto">
            <img
              className="h-15 w-90 "
              src="/logo.png"
              alt="Ingenieria Metalurgica"
            />
          </div>
          <ul className=" text-black flex flex-row  items-center gap-10 p-4  w-full text-[23px] font-medium mr-18 ">
            <li className="mr-auto"></li>
            <li className="navbar-li">
              <Link to="/">Inicio</Link>
            </li>
            <li className="navbar-li">
              <Link to="/Historia">Historia</Link>
            </li>

            <li className="navbar-li">
              
              <Link to={
                "/Certificates"}>
              Certificados
              </Link>
              </li>
                          {isAuthenticated &&
                          <>
            <li className="navbar-li">

              <Link to="/Admin">Admin</Link>
            </li>
            
            <li>
              <MenuAdmin/>
            </li>
                          </>
            }
          </ul>
        </nav>
      </header>
    </>
  );
}
