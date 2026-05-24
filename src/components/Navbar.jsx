import React from "react";
import { Link } from "react-router-dom";
import MenuAdmin from "./MenuAdmin";
import { useAuthStore } from "../store/useAuthStore";
export default function Navbar() {

  const isAuthenticated = useAuthStore((state)=> state.isAuthenticated);

  return (


    <>
      <header className="bg-[#edeeef] overflow-x-hidden ">
        <nav className= "flex flex-col flex-wrap  md:flex-row items-end md:h-25 h-full w-full gap-4 justify-around ">
          <div className=" flex m-auto md:m-0  md:m-4">
            <Link to={"/"}>
            <img
              className="h-15 w-50 md:w-90  "
              src="/logo.png"
              alt="Ingenieria Metalurgica"
            />
            </Link>
          </div>

          <ul className=" text-black flex flex-col md:flex-row  items-center md:justify-end gap-4  md:gap-10 p-4  w-full md:w-auto text-[23px] font-medium ml-auto ">
           
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
