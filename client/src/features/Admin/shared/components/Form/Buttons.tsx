import React from "react";

interface FromButtonsProps {
    handleResetClick: () => void; // Specify the type of handleResetClick prop
  }
  
function Buttons({handleResetClick} : FromButtonsProps) {
  return (
    <div className="row-span-1 w-full h-fit bg-slate-600 p-3 flex items-center justify-end gap-4">
      <button
        type="submit"
        className="w-28 px-6 py-1 font-medium text-lg  rounded-lg bg-green-500"
      >
        save
      </button>
      <button
        type="reset"
        onClick={handleResetClick}
        className=" w-28 px-6 py-1 font-medium text-lg rounded-lg border-2 border-zinc-400"
      >
        cancel
      </button>
    </div>
  );
}

export default Buttons;
