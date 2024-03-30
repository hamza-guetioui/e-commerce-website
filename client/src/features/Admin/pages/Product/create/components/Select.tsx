"use client";
import React, { useState } from "react";
import style from "./Style.module.css";

import Selected from "./Selected";
import Option from "./Option";

type SelectProps = {
  type: "checkbox" | "radio";
  name: string;
  data: Array<{
    id: string;
    name: string;
  }>;
  initialValue?: Array<{
    id: string;
    name: string;
  }>;
};

function Select({ type, name, data, initialValue = [] }: SelectProps) {
  const [value, setValue] = useState(initialValue);

  function handleChechbox(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      const obj = { id: event.target.id, name: event.target.value };
      setValue((value) => [...value, obj]);
    } else {
      setValue((value) => value.filter((obj) => obj.id !== event.target.id));
    }
  }

  function handleRadio(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      const obj = { id: event.target.id, name: event.target.value };
      setValue((value) => [obj]);
    } else {
      setValue((value) => value.filter((obj) => obj.id === event.target.id));
    }
  }

  return (
    <>
      <label>{name}</label>
      <div className="input-wrapper">
        <input type="hidden" name={name} value={JSON.stringify(value)} />

        <Selected selectedOptions={value}>
          {/* Drop Down Menu */}
          {data.map((item) => {
            const checked = value.some((obj) => obj.id === item.id);
            return (
              <Option
                key={item.id}
                id={item.id}
                name={item.name}
                onClick={handleChechbox}
                checked={checked}
              />
            );
          })}
        </Selected>
      </div>
    </>
  );
}

export default Select;
