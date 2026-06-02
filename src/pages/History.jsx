import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function History() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-start items-center p-4 min-h-screen lg:m-auto">

        <div>
           <h1 className="mt-5 text-3xl xl:text-5xl text-center font-bold  justify-center items-center 
          m-auto tracking-wide text-orange-500">
            HISTORIA DE LAS JORNADAS DE METALURGIA
          </h1>
        </div>

        <div className=" w-full xl:w-auto h-full m-6 rounded-2xl p-4 text-[20px] xl:text-[26px] text-start gap-10 flex flex-col ">
          <div>

          <h3 className=" text-[20px] xl:text-[34px] font-semibold mb-2 ">Nuestra Trayectoria: Un punto de encuentro</h3>
          <p >
            Desde 2011, la Jornada de Metalurgia de la UTN Facultad Regional San
            Nicolás es el punto de encuentro de referencia para alumnos,
            docentes e investigadores de esta especialidad de ingeniería. Lo que
            comenzó como un proyecto impulsado por el entusiasmo y el
            compromiso, hoy es una realidad consolidada bajo una convicción
            fundamental: crear un espacio donde la ciencia se vive, se siente y
            se comparte.
          </p>

          </div>
          <div className="flex xl:flex-row flex-col items-center  xl:justify-center gap-5">
          <img src="DSC_4084.JPG" alt="Elena Brandaleze" className="w-60 h-60 mb-5 xl:m-0 rounded-full shadow-2xl"/>
          <p>
            Impulsada por la Dra. Elena Brandaleze, Directora del Departamento
            de Metalurgia, esta jornada se pensó desde el primer momento como un
            espacio de transferencia de las líneas de investigación de nuestros
            laboratorios, bajo un lema que sigue guiando cada encuentro: “Un
            espacio para el desarrollo de la ciencia, tecnología e innovación”.
            Pero con el tiempo, se transformó en algo aún más valioso: un punto
            de encuentro humano, cercano, donde las ideas circulan con libertad
            y el conocimiento se construye en comunidad.
          </p>
          </div>
          <p>
            Año tras año, este espacio reúne a profesionales de la industria
            metalúrgica, investigadores, docentes, estudiantes de grado y
            posgrado y referentes del ámbito científico, generando un
            intercambio que trasciende lo académico. Aquí se crean vínculos, se
            comparten experiencias reales y se fortalecen lazos que conectan la
            universidad con el mundo productivo.
          </p>
          <div>


           <p className=" text-[20px] xl:text-[34px] font-semibold mb-2 ">El encuentro: Un eslabón entre el estudiante y la industria</p>
          <p>
            Para nuestros estudiantes, la jornada es también una puerta abierta.
            Un lugar donde pueden ver, escuchar y vivir de cerca el camino de la
            investigación, despertando curiosidad, vocación temprana y
            entusiasmo. Es un momento donde el aprendizaje deja de ser solo
            teórico para convertirse en inspiración concreta, en conversaciones,
            en preguntas que abren nuevos caminos.
          </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-10">
            <img className="img-student shadow-2xl" src="014.JPG" alt="Estudiantes" />
            <img className="img-student shadow-2xl hidden xl:flex" src="028.JPG" alt="Estudiantes" />
            <img className="img-student shadow-2xl hidden xl:flex" src="029.JPG" alt="Estudiantes" />
            <img  className="img-student shadow-2xl hidden xl:flex"src="031.JPG" alt="Estudiantes" />
          </div>
          <p>
            Cada edición es, además, una oportunidad para celebrar los logros de
            nuestra comunidad: proyectos, publicaciones, participaciones en
            congresos y reconocimientos que reflejan el esfuerzo y la pasión con
            la que trabajamos día a día. Todo esto, acompañado por el firme
            compromiso de formar profesionales con excelencia y valores, capaces
            de aportar al desarrollo de la industria y la sociedad.
          </p>
          <p>
            Desde 2011, la jornada ha ido creciendo, pero sin perder su esencia.
            Porque detrás de cada presentación, cada charla y cada encuentro,
            hay personas que creen profundamente en lo que hacen. Hay
            dedicación, orgullo y sobre todo compromiso en cada detalle.
          </p>
          <p>
            Hoy, más que nunca, esta jornada es un espacio que nos representa.
            Un lugar donde la ciencia se encuentra con las personas, y donde
            siempre hay algo nuevo por descubrir, compartir y construir juntos.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
