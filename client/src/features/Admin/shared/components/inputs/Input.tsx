"use client";
import React, { useState, useMemo } from "react";

type InputProps = {
  type: string;
  name: string;
  length: number;
};

function Input({ type, name, length }: InputProps) {
  const [value, setValue] = useState("");
  const label = useMemo(() => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }, []);
 const style ={
  color :value.length === length  ? " #e2e8f0" :" #64748b",
 }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }
  function handleKeydown(event: React.KeyboardEvent<HTMLInputElement>) {
      const key = event.key
      if (key === "Backspace" || key === "Entry" ) return
      if (value.length >= length) {
        event.preventDefault();
      }
    }

  return (
    <>
      <label>{label}</label>
      <div className="input-wrapper">
        <input
          type={type}
          name={name}
          onChange={handleChange}
          onKeyDown={handleKeydown}
        />
        <span style={style}>
          {value.length}/{length}
        </span>
      </div>
    
    </>
  );
}

export default Input;
