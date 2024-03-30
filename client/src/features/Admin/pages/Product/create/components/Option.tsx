import React from "react";
import style from "./Style.module.css";

type OptionProps = {
  id: string;
  name: string;
  checked: boolean;
  onClick: (event: any) => void;
};

function Option({ id, name, onClick, checked }: OptionProps) {
  return (
    <label htmlFor={id} className={style.option}>
      <input type="checkbox" id={id} onClick={onClick} value={name} checked={checked}/>
      {name}
    </label>
  );
}

export default Option;
