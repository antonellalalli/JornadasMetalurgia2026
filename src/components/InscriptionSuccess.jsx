import React from 'react'

export default function InscriptionSuccess() {
  return (
              
          <div className="m-auto mt-10 w-full xl:w-200 text-center h-full ">
            <div className="flex flex-col justify-center items-center gap-2">
          <span className="text-[20px] xl:text-[34px] font-semibold  ">
            ¡Tu inscripción fue recibida con éxito!
            </span>  
            <img className="xl:w-11 xl:h-11 w-7 h-7 mt-2" src="success.png" alt="Recibido" />
            <p className="text-center font-medium mt-2 text-[14px] xl:text-[18px]">
              Muchas gracias por sumarte a las Jornadas de Metalurgia 2026 y ser parte de esta nueva edición. Este espacio de encuentro y aprendizaje se construye entre todos. Es un gusto contar con tu presencia. Nos pondremos en contacto pronto para compartirte todos los detalles del cronograma.
              ¡Nos vemos en agosto!
            </p>
            </div>
          </div>
  )
}
