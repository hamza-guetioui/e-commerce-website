
function Filter() {

  return (
    <div className="w-full p-2 flex gap-7 justify-center items-center bg-gray-300 text-center">
      <select className="py-2 px-5 text-base font-semibold bg-inherit border-2 rounded text-slate-500 hover:text-slate-900 border-slate-500 " >
        <option label="color"></option>
      </select >
      <select className="py-2 px-5 text-base font-semibold bg-inherit border-2 rounded  text-slate-500 hover:text-slate-900 border-slate-500 " >
      <option label="size"></option>
      </select>
      <select className="py-2 px-5 text-base font-semibold bg-inherit border-2 rounded  text-slate-500 hover:text-slate-900 border-slate-500 ">
      <option label="sort"></option>
      </select>
      
    </div>
  );
}

export default Filter;
