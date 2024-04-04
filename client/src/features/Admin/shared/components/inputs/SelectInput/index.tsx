"use client";
import React from "react";
import DropdownMenu from "./components/DropdownMenu";
import Option from "./components/Option";

import useHandleCheck from "./hooks/useHandleCheck";
// fontAwsome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface SelectInputProps {
  id: string;
  type: "checkbox" | "radio";
  name: string;
  label?: string;
  data: Array<{
    id: string;
    name: string;
  }>;
  initialValue?: Array<{
    id: string;
    name: string;
  }>;
}

function Select({
  id,
  type,
  name,
  label,
  data,
  initialValue = [],
}: SelectInputProps) {
  const [value, handleCheckbox, handleRadio] = useHandleCheck(initialValue);

  return (
    <div>
      <label>{label || name}</label>
      <div id={id} className="input-wrapper">
        <input type="hidden" name={name} value={JSON.stringify(value)} />
        <DropdownMenu id={id} selectedOptions={value}>
          {/* Drop Down Menu */}
          {data.map((item) => {
            const checked = value.some((obj) => obj.id === item.id);
            return (
              <Option
                type={type}
                key={item.id}
                id={item.id}
                name={item.name}
                handleChange={
                  type === "checkbox" ? handleCheckbox : handleRadio
                }
                checked={checked}
              />
            );
          })}
        </DropdownMenu>
        <span className="icon">
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </div>
    </div>
  );
}

export default Select;
