import React from "react";
import Navbar from "./Navbar";
import Check from "./Check";
import { useState } from "react";
import Footer from "./Footer";
import { zodInscriptionSchema } from "../schema/zodInscriptionSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useInscriptionStore } from "../store/useInscriptionStore";
export default function Inscription() {

      const {register, handleSubmit, reset, setValue, formState: {errors} } = useForm({resolver: zodResolver(zodInscriptionSchema), 
        defaultValues:{
          isExpositor: false
        }
      });

      const createOneInscription = useInscriptionStore((state)=> state.createOneInscription);
      const [success, setSuccess] = useState(false);
      const loading = useInscriptionStore((state)=> state.loading)
      const onSubmit = async (data) =>{

        try {
          let participantsArray = null;
          if(data.isExpositor && data.participants) {
            participantsArray = data.participants.split(",").map(p=> p.trim()).filter(p=> p!== "");
          }

          const payload = {

            StudentName:data.studentName,
            StudentEmail:data.studentEmail,
            StudentDni:parseInt(data.studentDni),
            StudentInstitution:data.studentInstitution,

            InscriptionType : data.isExpositor ? "Presentation" : "Attendance",

            PresentationTitle : data.isExpositor ? data.presentationTitle : null,
            Participants :participantsArray,

            Presentation: data.isExpositor && data.presentation?.[0] ? data.presentation[0]: null

          };
          await createOneInscription(payload);
          
           reset();
          setFile([])
          setSuccess(true)
        } catch (error){
          console.error("Error enviando inscripcion", error)
        }


       
      };


    
  const [checkBoxes, setIsChecked] = useState({
    asistencia: false,
    presentacion: false,
  });

  const [file, setFile] = useState([]);

  const handleRemoveFile = (fileToRemove) => {
    setFile(file.filter((f) => f.name !== fileToRemove.name));
    const inputFile = document.getElementById("work-file");

    if(inputFile) {
      inputFile.value = "";
    }
setValue("presentation", null);

  };

  const handleFileChange = (event) => {
    event.preventDefault();
    const userfile = Array.from(event.target.files);

    if (userfile.length > 0) {
      const files = userfile.filter((f) => f.type === "application/pdf");

      if (files.length > 0) {
        setFile([...file, ...userfile]);
      } else alert("Por favor, seleccione un archivo PDF válido");
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    let newCheckBoxes;
    switch (name) {
      case "asistencia":
        newCheckBoxes = {
          presentacion: false,
          asistencia: checked,
        };
        break;

      case "presentacion":
        newCheckBoxes = {
          asistencia: false,
          presentacion: checked,
        };
        break;
      default:
        newCheckBoxes = checkBoxes;
    }
    setIsChecked({
      ...newCheckBoxes,
    });
    setValue("isExpositor", name === "presentacion" ? checked : false);
    
  };
  return (
    <>
      <Navbar />
      <div className="h-full px-4"> 
        
        {success ?
        
        (
          
          <div className="m-auto mt-10 w-200 text-center h-full ">
            <div className="flex flex-col justify-center items-center gap-4">
          <span className="text-[34px]  font-semibold  ">
            ¡Tu inscripción fue recibida con éxito!
            </span>  
            <img className="w-11 h-11" src="success.png" alt="Recibido" />
            </div>
            <p className="text-center font-medium mt-5">
              Muchas gracias por sumarte a las Jornadas de Metalurgia 2026 y ser parte de esta nueva edición. Este espacio de encuentro y aprendizaje se construye entre todos. Es un gusto contar con tu presencia. Nos pondremos en contacto pronto para compartirte todos los detalles del cronograma.
              ¡Nos vemos en agosto!
            </p>
          </div>
        ) : (
          <>
           <div className="m-auto mt-10 w-full md:w-220 text-center h-full ">
          <span className="md:text-[24px] text-[15px] font-medium  m-auto  mb-5 text-center ">
            Para inscribirse a las jornadas de metalurgia, por favor complete el
            siguiente formulario con sus datos personales. Si desea presentar un
            trabajo, seleccione la opción correspondiente y complete los campos
            adicionales.
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-orange-400 w-full md:w-240 h-full  justify-start items-start  mt-10  text-center rounded-2xl m-auto mb-20 p wrap">

          <div className="flex flex-col gap-3 justify-start items-start m-auto ">
            <Check checkBoxes={checkBoxes} onChange={handleCheckboxChange} />

            <div className="flex flex-col justify-start items-start gap-1 pl-2">
              <label
                className=" text-dark text-[18px] md:text-[26px] font-bold  md:m-0"
                htmlFor="nombre">
                Nombre y Apellido
              </label>
              <input
                className={`${errors.studentName ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-amber-600" } bg-white rounded-2xl border border-gray-300  text-[16px] md:text-2xl focus:outline-none focus:ring-2 focus:ring-dark-500 pl-2 w-80 md:w-150 md:h-14 h-12 text-start `}
                type="text" {...register("studentName")}
                placeholder="Ingrese su nombre completo"
              />
               {errors.studentName && (
            <span className="text-[20px] text-bold text-red-800">{errors.studentName.message}</span>
         )}
            </div>

            <div className="flex flex-col justify-start items-start gap-1 pl-2">
              <label
                className=" text-dark-500 font-bold text-[18px] md:m-0 md:text-[26px] "
                htmlFor="email">
                Email
              </label>
              <input
                className={`${errors.studentEmail ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-amber-600" } bg-white rounded-2xl border border-gray-300 text-[16px] md:text-2xl  focus:outline-none focus:ring-2 focus:ring-dark-500 pl-2 w-80 md:w-150 md:h-14 h-12 text-start `}
                type="email" {...register("studentEmail")}
                placeholder="Ingrese su email"
              />
              {errors.studentEmail && <span className="text-[20px] text-bold text-red-800">{errors.studentEmail.message}</span>}
            </div>

           <div className="flex flex-col justify-start items-start gap-1 pl-2">
              <label
                className=" text-dark-500 font-bold text-[18px]  md:ml-0 md:text-[26px] "
                htmlFor="email">
                DNI 
              </label>
              <input
                className={`${errors.studentDni ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-amber-600" } bg-white rounded-2xl border border-gray-300 text-[16px] md:text-2xl focus:outline-none focus:ring-2 focus:ring-dark-500 pl-2 w-80 h-12 md:w-150 md:h-14 text-start `}
                {...register("studentDni")}
                placeholder="Ingrese su email"
              />
              {errors.studentDni && <span className="text-[20px] text-bold text-red-800">{errors.studentDni.message}</span>}
            </div>
            <div className="flex flex-col justify-start items-start gap-1 pl-2 mb-2 ">
              <label
                className=" text-dark-500  font-bold text-[18px] md:text-[26px] md:m-0 "
                htmlFor="institucion">
                Institucion
              </label>
              <input
                className={`${errors.studentInstitution ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-amber-600" } bg-white rounded-2xl border border-gray-300 text-[16px] md:text-2xl focus:outline-none focus:ring-2 focus:ring-dark-500 pl-2  w-80 h-12 md:w-150 md:h-14 text-start `}
                type="text" {...register("studentInstitution")}
                placeholder="Ingrese su institución"
              />
                 {errors.studentInstitution && <span className="text-[20px] text-bold text-red-800">{errors.studentInstitution.message}</span>}
            </div>
            {checkBoxes.presentacion && (
              <>
                <div className="flex flex-col justify-start items-start gap-1 pl-2">
                  <label
                    className=" text-dark-500  font-bold text-[18px] md:text-[26px] md:ml-0 "
                    htmlFor="titulo">
                    Titulo del trabajo
                  </label>
                  <input
                    className={`${errors.presentationTitle ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-amber-600" } bg-white rounded-2xl border border-gray-300 text-[16px] text-2xl focus:outline-none focus:ring-2 focus:ring-dark-500 pl-2 md:w-150 md:h-14  w-80 h-12 text-start `}
                    type="text" {...register("presentationTitle")}
                    placeholder="Ingrese el titulo del trabajo"
                  />
                                   {errors.presentationTitle && <span className="text-[20px] text-bold text-red-800">{errors.presentationTitle.message}</span>}
                </div>

                <div className="flex flex-col justify-start items-start gap-1 pl-2">
                  <label
                    className=" text-dark-500  font-bold text-[18px] md:text-[26px] md:ml-0"
                    htmlFor="autores">
                    Autores
                  </label>
                  <input
                    className={`${errors.participants ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-amber-600" } bg-white rounded-2xl border border-gray-300 text-[16px] md:text-2xl focus:outline-none focus:ring-2 focus:ring-dark-500 pl-2 w-80  md:w-150 h-12 md:h-14 text-start `}
                    type="text"{...register("participants")}
                    placeholder="Ingrese los autores del trabajo"
                  />
               {errors.participants && <span className="text-[20px] text-bold text-red-800">{errors.participants.message}</span>}                
                </div>

                <div className="flex flex-col justify-start items-start gap-1 pl-2 mb-5">
                  <div>
                    <label className="font-medium mt-3 md:text-[20px] text-[12px] ">Solo se admiten archivos en formato PDF.</label>
                    <input
                      type="file"
                      accept=".pdf"
                      multiple
                      id="work-file"
                      className={`${errors.presentation ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-amber-600" } hidden`}
                      {...register("presentation", {
                        onChange:(e)=> handleFileChange(e)
                      })}
                   
                    />
               {errors.presentation && <span className="text-[20px] text-bold text-red-800">{errors.presentation.message}</span>}                        
                  </div>
                  <label
                    className=" text-dark-500  font-medium text-[14px] md:text-[20px] block p-2 bg-white rounded-2xl cursor-pointer hover:bg-gray-200"
                    htmlFor="work-file">
                    Subir archivo de trabajo
                  </label>
                  {file && file.length > 0 && (
                    <div className="flex flex-col  items-start mt-2">
                      {file.map((f, index) => (
                        <div
                          key={index}
                          className="flex flex-row gap-4 items-center justify-center ">
                          <p className="md:text-[16px]  text-[14px] ml-4">{f.name}</p>
                          <button
                            type="button"
                            onClick={() => handleRemoveFile(f)}>
                            <img
                              className="md:w-8   md:h-8 w-6.5 h-6.5 mt-2 hover:bg-amber-700 rounded-full p-1 cursor-pointer "
                              src="/cross.png"
                              alt="Eliminar Archivo"
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
          <button
            type="submit"
            className=" text-white font-bold   text-[20px] md:text-[24px] rounded-2xl w-50 md:w-150 h-14 m-auto mt-3 mb-5 bg-orange-500 hover:bg-orange-600 focus:ring-orange-500 focus:ring-offset-2 cursor-pointer ">
            {loading ? "INSCRIBIENDOSE..." : "INSCRIBIRSE"}
          </button>
          </form>
          </> )}
      </div>
      <Footer />
    </>
  );
}
