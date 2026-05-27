import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Inscription from "../components/Inscription";
export default function Home() {
  return (
    <>
      <Navbar />

      <div className=" bg-white h-full  mt-5 rounded-2xl flex flex-col justify-center items-center gap-10 p-4 ">
        <div className="flex flex-col xl:flex-row gap-10  ">
          
          <div className="flex flex-col gap-0 items-center justify-center">
            <div className=" flex  gap-0 flex-col items-center justify-center leading-none">
              <p className=" title text-4xl xl:text-7xl font-bold   mt-5 italic tracking-wide ">
                JORNADAS
              </p>

              <div className="flex  gap-4  items-center justify-center">
                <p className="title text-4xl xl:text-6xl  font-bold flex justify-center  italic ">
                  DE
                </p>
                <p className=" text-[26px] flex anio   font-bold xl:text-7xl">
                  2026
                </p>

              </div>

              <h1 className="text-[43px] xl:text-8xl font-extrabold mb-5  text-orange-500 ">
                METALURGIA
              </h1>
            </div>
          <div className="flex xl:flex-row gap-2 items-center justify-center">
          <img className="xl:w-9 xl:h-9 w-6 h-6" src="/calendar.png" alt="Fecha" />
            <p className="xl:text-[25px]  text-[20px] mb-1 font-medium text-center ">
              20 y 21 de Agosto
            </p>

          </div>
          <div className="flex flex-row gap-1 xl:gap-4 items-start justify-center">

          <img className="xl:w-8 xl:h-8 w-5 h-5" src="/location.png" alt="Ubicación" />
            <p className="xl:text-[22px] text-[12px] mb-4 font-medium text-center">
              San Nicolás de los Arroyos, Buenos Aires, Argentina
            </p>
          </div>
          <div className="flex flex-row gap-4 items-start justify-center rounded-2xl bg-gray-900 text-white font-bold p-1 w-full max-w-125 m-auto mt-2 mb-5 px-4">
            <span className="text-center text-[14px]"> UTN - FACULTAD REGIONAL SAN NICOLÁS</span>
          </div>

          <div className="flex xl:flex-row flex-col items-center gap-10 justify-center mt-8 mb-8">

            <div className="flex flex-row items-center  gap-4  ">
            <div className="bg-black rounded-full 
            w-9 h-9 text-[16px] xl:w-12 xl:h-12 text-white  xl:text-[21px]  flex font-bold justify-center items-center">
              <span > 7.a</span>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-[20px] xl:text-[23px] font-semibold ">Jornadas de</p>
              <p className="text-[20px] xl:text-[23px]  text-amber-600 font-semibold ">Metalurgia</p>
            </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">

            <div className="bg-black rounded-full w-9 h-9 xl:w-12 xl:h-12 text-white text-[16px] xl:text-[21px] flex font-bold justify-center items-center  ">
              <span>6.a</span>
            </div>
             <div className="flex  items-center gap-1">
              <p className="text-[20px] xl:text-[23px] font-semibold ">Jornadas de</p>
              <p className="text-[20px] xl:text-[23px] text-amber-600 font-semibold ">Doctorados</p>
            </div>
            </div>
          </div>
            <div className="w-full max-w-3xl">

            <p className="xl:text-[20px] text-[15px] xl:text-start text-center"> Las 7ma Jornada de Metalurgia y 6ta Jornada de Doctorandos, que se llevarán a cabo en la UTN Facultad Regional San Nicolás, constituyen un espacio de encuentro e intercambio entre estudiantes, docentes, investigadores y profesionales de la industria metalúrgica. A través de charlas, presentaciones y actividades académicas, estas jornadas buscan promover la difusión de conocimientos, el intercambio de experiencias y la vinculación entre la universidad y el sector industrial. Se invita a toda la comunidad vinculada a la ingeniería metalúrgica a participar de este evento y formar parte de un encuentro pensado para el aprendizaje, la innovación y el crecimiento profesional.

            </p>

            </div>
              <div className="flex flex-col mt-12 justify-center  m-auto  items-center gap-4 ">
              <p className="xl:text-3xl text-2xl font-bold">¡Sumate a las jornadas!</p>
              <button className="bg-[#ff8017] hover:bg-[#e67414] text-white font-bold py-2 px-4 rounded-xl w-full h-full xl:w-100 xl:h-20 text-2xl xl:text-3xl">
                <Link to="/Inscription">INSCRIPCIÓN</Link>
              </button>
            </div>

    
          </div>
          <div className="flex flex-col gap-6 items-center justify-center">
            <div>
              <img
                className=" w-full xl:w-[500px] rounded-xl h-auto object-cover shadow-2xs mb-4 shadow-black
"
                src="Charla.jpeg"
                alt="6ta Jornada Metalurgica"
              />
            </div>



            <div className="axis bg-amber-600 w-full xl:w-[400px]   rounded-se-3xl rounded-es-3xl flex flex-col   justify-start items-start p-3 opacity-90">

              <div className="flex gap-4 items-center justify-center mt-3 mb-3 ml-2">
               <img className=" w-10 h-10" src="/setting.png" alt="Ejes temáticos" />

              <div className=" flex flex-col  gap-0 items-start
               justify-center">
            
              <p className="text-2xl font-semibold ">
                PRINCIPALES
              </p>
                
              <p className="text-2xl font-semibold  text-white ">
                EJES TEMÁTICOS
              </p>
              </div>
             
              </div>
            <div className="flex flex-col  p-2">
              <ul className="flex  flex-col gap-5">
                <li className="flex flex-row gap-2 items-center  ">
                  <img  className="w-10 h-10" src="/mining-cart.png" alt="" />
                  <p className="axis-item"> Procesos de metalurgia extractiva</p>
                </li>
                <li className="item ">
                  <img  className="w-10 h-10" src="/steel.png" alt="" />
                  <p className="axis-item">Procesos siderúrgicos</p>
                </li>
                <li className="item">
                  <img  className="w-10 h-10" src="/cube.png" alt="" />
                  <p className="axis-item">Procesos de conformado y propiedades mecánicas</p>
                </li>
                <li className="item ">
                  <img  className="w-10 h-10" src="/brick.png" alt="" />
                  <p className="axis-item">Refractarios, cerámicos y compuestos</p>
                </li>
                <li className="item">
                  <img  className="w-10 h-10" src="/microchip.png" alt="" />
                  <p className="axis-item ">Otras tecnologías de procesamiento de materiales</p>
                </li>
              </ul>
            </div>

            </div>
             <div className="flex  w-full flex-col gap-6  mt-1 items-center justify-center p-6  mb-3">

                   <div className="flex flex-col items-center justify-center">
                  <h1 className="xl:text-2xl text-2xl font-semibold ">Contactanos a</h1>

                    <div className="flex flex-row items-center justify-center gap-3">

                    <img
                      className="w-7 h-8 "
                      src="/mail.png"
                      alt="Correo Electrónico"
                    />
                    <span className="text-gray-700">jornadasmetalurgia@frsn.utn.edu.ar</span>
                    
                    </div>
                  
                   </div>
                     <div className="flex gap-4 mt-1 flex-col">

                <ul className="flex  flex-row gap-5 items-center justify-center">
                  <li>
                    <a href="https://www.frsn.utn.edu.ar/?page_id=527">

                    <img
                      className="w-8 h-8 "
                      src="/web.png"
                      alt="Página Web"
                    />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.instagram.com/ingenieriametalurgicasn">
                    <img
                      className="w-8 h-8.5"
                      src="/instagram.png"
                      alt="Instagram"
                    />
                    </a>
                  </li>
                </ul>
                </div>



              
            </div>

          
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}




              
            