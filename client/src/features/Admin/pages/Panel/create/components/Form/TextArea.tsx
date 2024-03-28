"use client";
import React, { useState ,useMemo} from "react";


type InputProps = {
  name: string;
  length: number;
};

function TextArea({ name, length }: InputProps) {
    const [value, setValue] = useState("");
    const label = useMemo(() => {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }, []);
   const style ={
    color :value.length === length  ? " #e2e8f0" :" #64748b",
   }
    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
      setValue(event.target.value);
    }
    function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
        const key = event.key
        if (key === "Backspace" || key === "Entry" ) return
        if (value.length >= length) {
          event.preventDefault();
        }
      }
  
  return (
    <>
      <label>{label}</label>
      <div className="relative w-11/12 h-fit">
        <textarea
          name={name}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <span className="absolute bottom-1 right-3 text-slate-500" style={style}>
          {value.length}/{length}
        </span>
      </div>
    </>
  );
}

export default TextArea;
