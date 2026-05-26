import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom";
import {zodLoginSchema} from  "../schema/zodLoginSchema"
import { useAuthStore } from "../store/useAuthStore";

const HASH= "815746201602dfd6de3adfc07b06f4112f6b536c63854eef131b05f46ad83fde"
const LDP=12;

async function CalcularSHA256(text){
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashB = await crypto.subtle.digest("SHA-256",data);
    const hashA = Array.from(new Uint8Array(hashB));
    return hashA.map(b=> b.toString(16).padStart(2, "0")).join("");

}
export default function AdminPopUp() {
    const login = useAuthStore((state)=> state.login);
    const errorApi = useAuthStore((state)=> state.error);
    const loading =useAuthStore((state)=> state.loading);
    const {register, handleSubmit, reset, setError, formState: {errors}, } = useForm({resolver: zodResolver(zodLoginSchema)});

    const onSubmit = async (data) => {
        try{
            const payload = {
                EmailOrUsername : data.emailOrUsername,
                Password:data.password
            }
            await login(payload);
            setIsOpen(false)
            navigate("/");
            reset();
        } catch{
            setError("password", {
                type: "manual",
                message: errorApi || "Invalid email or password"
            });
        }
    };



    const navigate = useNavigate();
    const [IsOpen, setIsOpen] = useState(false);
    const [InputBuffer, setInputBuffer]= useState("");

    useEffect(()=> {
        const handleKeyDown = async (event) => {
            if( IsOpen || event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") return ;

            const w =  event.key.toLowerCase();

            if(w.length === 1 && ((w >= "a" && w<= "z") || (w >= "0" && w<= "9"))){
                setInputBuffer((prev)=> (prev + w).slice(-LDP))}
           } 
            
            window.addEventListener("keydown", handleKeyDown);
            return ()=> window.removeEventListener("keydown", handleKeyDown);
    }, [IsOpen]);


    useEffect(()=>{

        if(InputBuffer.length === LDP){
        CalcularSHA256(InputBuffer).then((hashCalculado)=>{
            if(hashCalculado=== HASH){
                setIsOpen(true);
                setInputBuffer("");
            }
        })

        }
    }, [InputBuffer]
    )

    const handleCloseLogin = (e)=> {
        e.preventDefault();
        setIsOpen(false)
        navigate("/")

    }

  return (
        <>
        {IsOpen && (
                    <div className='fixed inset-0 bg-black/70 z-80 flex justify-center items-center'>
                        <button
                        onClick={handleCloseLogin}
                        className="rounded w-10 h-10 bg-amber-300 absolute top-4 right-4">
                            <img className="m-auto w-8 h-8 cursor-pointer" src="cross.png" alt="" />
                        </button>

    <div className=" cursor-pointer relative">
                        
      <form onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col h-120 w-170 bg-gray-300 m-auto rounded-2xl mt-10 mb-10 justify-center items-center gap-6'
      >
        <div className='flex flex-col gap-1 justify-center'>

        <label htmlFor="username" className='font-medium text-[22px] '>Nombre de Usuario</label>
        <input className={`${errors.emailOrUsername ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-amber-600" } text-[20px] border outline-none border-gray-500 bg-gray-200 p-2 rounded-2xl w-100`}
        type="text"  {...register("emailOrUsername")}
         id='username' placeholder='Ingrese su usuario'
        
         />
         {errors.emailOrUsername && (
            <span className="text-red-400 text-sm">{errors.emailOrUsername.message}</span>
         )}
        </div>

        <div className='flex flex-col gap-1 justify-center'>
        <label htmlFor="password" className='font-medium text-[22px]'>Contraseña</label>
        <input className={` ${errors.password ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-amber-600" } text-[20px] border outline-none border-gray-500 bg-gray-200 p-2 rounded-2xl w-100`}
        type="password"  {...register("password")} id='password' placeholder='Ingrese su contraseña'/>
         {errors.password && (
            <span className="text-red-400 text-sm">{errors.password.message}</span>
         )}
          
        </div>
        <button  disabled={loading} type="submit" className='bg-orange-500 cursor-pointer text-white p-2 rounded-2xl w-100'>{loading ? "Ingresando..." : "Ingresar"}</button>

      </form>
      </div>
    </div>
        )}
        </>
  )
}
