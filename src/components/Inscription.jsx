import React from "react";
import Navbar from "./Navbar";
import Check from "./Check";
import { useState } from "react";
import Footer from "./Footer";
import { zodInscriptionSchema } from "../schema/zodInscriptionSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useInscriptionStore } from "../store/useInscriptionStore";
import InscriptionSuccess from "./InscriptionSuccess";
export default function Inscription() {

      const {register, handleSubmit,reset, setValue, formState: {errors} } = useForm({resolver: zodResolver(zodInscriptionSchema), 
        defaultValues:{
          isExpositor: false
        }
      });

      const createOneInscription = useInscriptionStore((state)=> state.createOneInscription);
      const [success, setSuccess] = useState(false);
      const loading = useInscriptionStore((state)=> state.loading)
      const onSubmit = async (data) =>{

        try {
          const formData = new FormData();
          formData.append("StudentName",data.studentName );
          formData.append("StudentEmail", data.studentEmail);
          formData.append("StudentDni", parseInt(data.studentDni));
          formData.append("StudentInstitution", data.studentInstitution);
          formData.append("InscriptionType",  data.isExpositor ? "Presentation" : "Attendance");
          if(data.isExpositor){
            formData.append("PresentationTitle", data.presentationTitle || "");

            let participantsArray = data.participants ?
       
            data.participants.split(",").map(p=> p.trim()).filter(p=> p!== "") : [];

            participantsArray.forEach((p, index) => {
              formData.append(`Participants[${index}]`, p)
            });
            if (data.presentation?.[0]){
              formData.append("Presentation", data.presentation[0])
            }
          }
          

          await createOneInscription(formData);
          
           reset();
          setFile(null)
          setIsChecked({asistencia:false, presentacion:false})
          setSuccess(true)
        } catch (error){
          console.error("Error enviando inscripcion", error)
        }


       
      };


    
  const [checkBoxes, setIsChecked] = useState({
    asistencia: false,
    presentacion: false,
  });

  const [file, setFile] = useState(null);

  const handleRemoveFile = () => {
    setFile(null);
    setValue("presentation", null, {shouldValidate:true});
    const inputFile = document.getElementById("work-file");

    if(inputFile) {
      inputFile.value = "";
    }

  };

  const handleFileChange = (event) => {
    event.preventDefault();
    const userfile = Array.from(event.target.files);

    if ( userfile && userfile.length > 0) {
      const files = userfile.filter((f) => f.type === "application/pdf");

      if (files.length > 0) {
        const file = files[0];
        setFile(file);
        setValue("presentation", [file], {shouldValidate:true} );
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
      <div className="min-h-screen px-4"> 
        
        {success ?
        
        (
          <InscriptionSuccess />  

        ) : (
          <>
           <div className="m-auto mt-10 w-full xl:w-220 text-center h-full ">
          <span className="xl:text-[24px] text-[15px] font-medium  m-auto  mb-5 text-center ">
            Para inscribirse a las jornadas de metalurgia, por favor complete el
            siguiente formulario con sus datos personales. Si desea presentar un
            trabajo, seleccione la opción correspondiente y complete los campos
            adicionales.
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-orange-400 w-full xl:w-240 h-full  justify-start items-start  mt-10  text-center rounded-2xl m-auto mb-20 p wrap">

          <div className="flex flex-col gap-3 justify-start items-start m-auto ">
            <Check checkBoxes={checkBoxes} onChange={handleCheckboxChange} />

            <div className="flex flex-col justify-start items-start w-full  gap-1 pl-2">
              <label
                className=" text-dark text-[18px] xl:text-[26px] font-bold  xl:m-0"
                htmlFor="nombre">
                Nombre y Apellido
              </label>
              <input
                className={`${errors.studentName ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-amber-600" } bg-white rounded-2xl border border-gray-300  text-[16px] xl:text-2xl focus:outline-none focus:ring-2 focus:ring-dark-500 pl-2 w-full xl:w-150 xl:h-14 h-12 text-start `}
                type="text" {...register("studentName")}
                placeholder="Ingrese su nombre completo"
              />
               {errors.studentName && (
            <span className="text-[15px] text-bold text-red-800">{errors.studentName.message}</span>
         )}
            </div>

            <div className="flex flex-col justify-start items-start gap-1 pl-2 w-full">
              <label
                className=" text-dark-500 font-bold text-[18px] xl:m-0 xl:text-[26px] "
                htmlFor="email">
                Email
              </label>
              <input
                className={`${errors.studentEmail ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-amber-600" } bg-white rounded-2xl border border-gray-300 text-[16px] xl:text-2xl  focus:outline-none focus:ring-2 focus:ring-dark-500 pl-2 w-full xl:w-150 xl:h-14 h-12 text-start `}
                type="email" {...register("studentEmail")}
                placeholder="Ingrese su email"
              />
              {errors.studentEmail && <span className="text-[15px] text-bold text-red-800">{errors.studentEmail.message}</span>}
            </div>

           <div className="flex flex-col justify-start items-start gap-1 pl-2 w-full">
              <label
                className=" text-dark-500 font-bold text-[18px]  xl:ml-0 xl:text-[26px] "
                htmlFor="email">
                DNI 
              </label>
              <input
                className={`${errors.studentDni ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-amber-600" } bg-white rounded-2xl border border-gray-300 text-[16px] xl:text-2xl focus:outline-none focus:ring-2 focus:ring-dark-500 pl-2 w-full h-12 xl:w-150 xl:h-14 text-start `}
                {...register("studentDni")}
                placeholder="Ingrese su DNI"
              />
              {errors.studentDni && <span className="text-[15px] text-bold text-start text-red-800">{errors.studentDni.message}</span>}
            </div>
            <div className="flex flex-col justify-start items-start gap-1 pl-2 mb-2 w-full ">
              <label
                className=" text-dark-500  font-bold text-[18px] xl:text-[26px] xl:m-0 "
                htmlFor="institucion">
                Institucion
              </label>
              <input
                className={`${errors.studentInstitution ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-amber-600" } bg-white rounded-2xl border border-gray-300 text-[16px] xl:text-2xl focus:outline-none focus:ring-2 focus:ring-dark-500 pl-2  w-full h-12 xl:w-150 xl:h-14 text-start `}
                type="text" {...register("studentInstitution")}
                placeholder="Ingrese su institución"
              />
                 {errors.studentInstitution && <span className="text-[15px] text-bold text-red-800">{errors.studentInstitution.message}</span>}
            </div>
            {checkBoxes.presentacion && (
              <>
                <div className="flex flex-col justify-start items-start gap-1 pl-2 w-full">
                  <label
                    className=" text-dark-500  font-bold text-[18px] xl:text-[26px] xl:ml-0 "
                    htmlFor="titulo">
                    Título del trabajo
                  </label>
                  <input
                    className={`${errors.presentationTitle ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-amber-600" } bg-white rounded-2xl border border-gray-300 text-[16px] xl:text-2xl focus:outline-none focus:ring-2 focus:ring-dark-500 pl-2 xl:w-150 xl:h-14  w-full h-12 text-start `}
                    type="text" {...register("presentationTitle")}
                    placeholder="Ingrese el título del trabajo"
                  />
                                   {errors.presentationTitle && <span className="text-[15px] text-bold text-red-800">{errors.presentationTitle.message}</span>}
                </div>

                <div className="flex flex-col justify-start items-start gap-1 pl-2 w-full">
                  <label
                    className=" text-dark-500  font-bold text-[18px] xl:text-[26px] xl:ml-0"
                    htmlFor="autores">
                    Autores
                  </label>
                  <input
                    className={`${errors.participants ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-amber-600" } bg-white rounded-2xl border border-gray-300 text-[16px] xl:text-2xl focus:outline-none focus:ring-2 focus:ring-dark-500 pl-2 w-full  xl:w-150 h-12 xl:h-14 text-start `}
                    type="text"{...register("participants")}
                    placeholder="Ingrese los autores del trabajo"
                  />
               {errors.participants && <span className="text-[15px] text-bold text-red-800">{errors.participants.message}</span>}                
                </div>

                <div className="flex flex-col justify-start items-start gap-1 pl-2 mb-5">
                  <div>
                    <span className="font-medium mt-3 xl:text-[20px] text-[12px] ">Solo se admiten archivos en formato PDF.</span>
                    <input
                      type="file"
                      accept=".pdf"
                      
                      id="work-file"
                      className={`${errors.presentation ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-amber-600" } hidden`}
                      {...register("presentation", {
                        onChange:(e)=> handleFileChange(e)
                      })}
                   
                    />
                      
                  </div>
                  {file == null && (


                  <label
                    className=" text-dark-500  font-medium text-[14px] xl:text-[20px] block p-2 bg-white rounded-2xl cursor-pointer hover:bg-gray-200"
                    htmlFor="work-file">
                    Subir archivo de trabajo
                  </label>
                  )}

                  {errors.presentation && <span className="text-[15px] text-bold text-red-800">{errors.presentation.message}</span>}  

                  {file != null && (
                    <div className="flex flex-col  items-start  mt-2">
                      <div className="flex flex-row gap-0 items-center">
                      <img src="file.png" alt="Archivo" className="w-7 h-7"/>
                        <div
                        
                          className="flex flex-row gap-4 items-center ">
                          <p className="xl:text-[18px] text-[14px] ml-3">{file.name}</p>
                          <button
                            type="button"
                            onClick={() => handleRemoveFile()}>
                            <img
                              className="xl:w-7   xl:h-7 w-6.5 h-6.5  hover:bg-amber-700 rounded-full p-1 cursor-pointer "
                              src="/cross.png"
                              alt="Eliminar Archivo"
                            />
                          </button>
                        </div>
                    </div>
                      </div>
                  )}
                </div>
              </>
            )}
          </div>
          <button
            type="submit"
            className=" text-white font-bold   text-[20px] xl:text-[24px] rounded-2xl w-50 xl:w-150 h-14 m-auto mt-3 mb-5 bg-orange-500 hover:bg-orange-600 focus:ring-orange-500 focus:ring-offset-2 cursor-pointer ">
            {loading ? "INSCRIBIENDOSE..." : "INSCRIBIRSE"}
          </button>
          </form>
          </> )}
      </div>
      <Footer />
    </>
  );
}
