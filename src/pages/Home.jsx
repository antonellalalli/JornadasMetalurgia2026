import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Inscription from "../components/Inscription";
export default function Home() {
  return (
    <>
      <Navbar />

      <div className=" bg-white h-full  mt-10 rounded-2xl flex flex-col justify-center items-center gap-10  min-h-screen">
        <div className="flex flex-row gap-10 p-6 ">
          <div>
            <div className=" flex flex-col items-center justify-center leading-none">
              <p className=" title text-6xl md:text-7xl font-bold  mt-5 italic tracking-wide ">
                JORNADAS
              </p>

              <div className="flex  gap-4  items-center mr-6">
                <p className="title text-6xl flex justify-center  italic ">
                  DE
                </p>

                <p className="anio title text-6xl font-bold  md:text-7xl">
                  2026
                </p>
              </div>

              <h1 className="text-7xl md:text-8xl font-extrabold flex justify-center  mb-5  tracking-wide text-orange-500 ">
                METALURGIA
              </h1>
            </div>
          <div className="flex flex-row gap-4 items-center justify-center">
          <img className="w-10 h-10" src="/calendar.png" alt="Fecha" />
            <p className="text-[25px] mb-1 font-medium text-center ">
              20 y 21 de Agosto
            </p>
          </div>
          <div className="flex flex-row gap-4 items-start justify-center">

          <img className="w-8 h-8" src="/location.png" alt="Ubicación" />
            <p className="text-[22px] mb-4 font-medium text-center">
              San Nicolás de los Arroyos, Buenos Aires, Argentina
            </p>
          </div>
          <div className="flex flex-row gap-4 items-start justify-center rounded-2xl bg-gray-900 text-white font-bold p-1 w-100 m-auto mt-2 mb-5">
            <span> UTN - FACULTAD REGIONAL SAN NICOLÁS</span>
          </div>
          <div className="flex flex-row items-center gap-10 justify-center mt-8 mb-8">

            <div className="flex flex-row gap-4">

            <div className="bg-black rounded-full w-12 h-12 text-white text-[21px] text-center flex font-bold justify-center items-center">
              <span> 7.a</span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <p className="text-[23px] font-semibold ">Jornadas de</p>
              <p className="text-[23px] text-amber-600 font-semibold ">Metalurgia</p>
            </div>
            </div>


            <div className="flex flex-row gap-4">

            <div className="bg-black rounded-full w-12 h-12 text-white text-[21px] text-center flex font-bold justify-center items-center">
              <span>6.a</span>
            </div>
             <div className="flex items-center gap-1">
              <p className="text-[23px] font-semibold ">Jornadas de</p>
              <p className="text-[23px] text-amber-600 font-semibold ">Doctorados</p>
            </div>
            </div>
          </div>

            <p className=" w-200 text-[20px] text-start"> Las 7mas Jornadas de Metalurgia y 6tas Jornadas de Doctorandos, que se llevarán a cabo en la UTN Facultad Regional San Nicolás, constituyen un espacio de encuentro e intercambio entre estudiantes, docentes, investigadores y profesionales de la industria metalúrgica. A través de charlas, presentaciones y actividades académicas, estas jornadas buscan promover la difusión de conocimientos, el intercambio de experiencias y la vinculación entre la universidad y el sector industrial. Se invita a toda la comunidad vinculada a la ingeniería metalúrgica a participar de este evento y formar parte de un encuentro pensado para el aprendizaje, la innovación y el crecimiento profesional.

            </p>
              <div className="flex  w-full flex-col gap-4  mt-20 items-center justify-center p-6  ">
              <h1 className="text-3xl font-semibold ">Encontranos en</h1>
              <div>
                <ul className="flex  flex-row gap-5 items-center justify-center">
                  <li>
                    <img
                      className="w-10 h-9.5 "
                      src="/web.png"
                      alt="Página Web"
                    />
                  </li>
                  <li>
                    <img
                      className="w-10 h-11.5 "
                      src="/mail.png"
                      alt="Correo Electrónico"
                    />
                  </li>
                  <li>
                    <img
                      className="w-10 h-10 "
                      src="/instagram.png"
                      alt="Instagram"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-9 items-center justify-center">
            <div>
              <img
                className=" w-125 rounded-lg h-100 object-cover"
                src="Charla.jpeg"
                alt="6ta Jornada Metalurgica"
              />
            </div>
            <div className="flex flex-col justify-center  m-auto  items-center gap-4 ">
              <p className="text-3xl font-bold">¡Sumate a las jornadas!</p>
              <button className="bg-[#ff8017] hover:bg-[#e67414] text-white font-bold py-2 px-4 rounded-md w-100 h-20 text-3xl">
                <Link to="/Inscription">INSCRIPCIÓN</Link>
              </button>
            </div>

            <div className="axis bg-amber-600 w-100 h-full  rounded-se-3xl rounded-es-3xl flex flex-col   justify-start items-start p-3 opacity-90">

              <div className="flex gap-4 items-center justify-center mt-3 mb-3 ml-2">
               <img className=" w-10 h-10" src="/setting.png" alt="" />

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
            <div className="flex felx-col  p-2">
              <ul className="flex  flex-col gap-5">
                <li className="flex flex-row gap-2 items-center  ">
                  <img  className="w-10 h-10" src="/mining-cart.png" alt="" />
                  <p className="text-[20px] text-white font-normal"> Procesos de metalurgia extractiva</p>
                </li>
                <li className="item ">
                  <img  className="w-10 h-10" src="/steel.png" alt="" />
                  <p className="text-[20px] text-white font-normal">Procesos siderúrgicos</p>
                </li>
                <li className="item">
                  <img  className="w-10 h-10" src="/cube.png" alt="" />
                  <p className="text-[20px] text-white font-normal">Procesos de conformado y propiedades mecánicas</p>
                </li>
                <li className="item ">
                  <img  className="w-10 h-10" src="/brick.png" alt="" />
                  <p className="text-[20px] text-white font-normal">Refractarios, cerámicos y compuestos</p>
                </li>
                <li className="item">
                  <img  className="w-10 h-10" src="/microchip.png" alt="" />
                  <p className="text-[20px] text-white font-normal mb-4">Otras tecnologías de procesamiento de materiales</p>
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
