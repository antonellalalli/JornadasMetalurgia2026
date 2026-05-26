import Swal from "sweetalert2"

export const alertConfirm = async (title, message) => {
 const result = await Swal.fire({
    title: title,
    text: message,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor:" #ff8017",
    cancelButtonColor: "#d33",
    cancelButtonText:"Cancelar",
    confirmButtonText:"Aceptar"

 });
return result.isConfirmed;
}
