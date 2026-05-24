export default function Check({ checkBoxes, onChange }) {
  return (
    <div className="flex  flex-row  font-medium items-center justify-center pl-2 text-[18px] md:text-[24px] gap-10 p-5 m-auto ">
      <div className=" flex flex-row items-center justify-center gap-2">

        <input
          className="ml-0   w-5 h-4 md:w-6 md:h-5"
          type="checkbox"
          name="asistencia"
          checked={checkBoxes.asistencia}
          onChange={onChange}
          />
          <span>
          Asistencia
        </span>
      </div>
<div className="flex flex-row items-center justify-center gap-2 ">

        <input
          className="ml-0 w-5 h-4  md:w-6 md:h-5"
          type="checkbox"
          name="presentacion"
          checked={checkBoxes.presentacion}
          onChange={onChange}
          />
          <span>
        Presentacion
      </span>
</div>
    </div>
  );
}
