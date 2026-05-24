
import { Link } from "react-router-dom";
import MenuAdmin from "./MenuAdmin";
import { useAuthStore } from "../store/useAuthStore";
import MenuHamburger from "./MenuHamburger";

export default function Navbar() {

  const isAuthenticated = useAuthStore((state)=> state.isAuthenticated);



  return (


    <>
      <header className="bg-[#edeeef]  relative ">
        <nav className= " flex xl:flex-row items-center xl:items-end xl:h-25 h-full w-full gap-4 justify-between ">
          <div className=" flex  xl:mb-3  ">
            <Link to={"/"}>
            <img
              className="h-15 w-50 xl:w-90 xl:h-16 "
              src="/logo.png"
              alt="Ingenieria Metalurgica"
            />
            </Link>
          </div>
               < MenuHamburger/>
  
  
          <ul className="hidden xl:flex text-black flex-col xl:flex-row  items-center xl:justify-end gap-4  xl:gap-10 p-4  w-full xl:w-auto text-[23px] font-medium ml-auto ">
           
            <li className="navbar-li">
             <Link to="/">Inicio</Link>
            </li>
            <li className="navbar-li">
              <Link to="/History">Historia</Link>
            </li>

            <li className="navbar-li">
              <Link to={ "/Certificates"}>
              Certificados
              </Link>
              </li>
            {isAuthenticated && (
             <>
            <li className="navbar-li">

              <Link to="/Admin">Admin</Link>
            </li>
            
            <li>
              <MenuAdmin/>
            </li>
            </>
            )}
          </ul>

        </nav>

  
      </header>
      








    </>
  );
}
