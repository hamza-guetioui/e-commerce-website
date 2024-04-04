import React from "react";
import style from "./Style.module.css";

interface OptionProps {
  id: string;
  type: "radio" | "checkbox";
  name: string;
  checked: boolean;
  handleChange: (event: any) => void;
};

function Option({
  id,
  type,
  name,
  handleChange,
  checked,
}: OptionProps) {
  return (
    <label htmlFor={id} className={style.option}>
      <input
        id={id}
        type={type}
        onChange={handleChange}
        value={name}
        checked={checked}
      />
      {name}
    </label>
  );
}

export default Option;
