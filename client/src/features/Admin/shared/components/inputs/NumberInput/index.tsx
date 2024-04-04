"use client";
import React, { useState } from "react";
import "./Style.css";

// fontAwsome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface InputProps {
  label?: string;
  name: string;
  span?: string;
  initialValue?: number;
}

function index({ name, span, label, initialValue = 1 }: InputProps) {
  const [value, setValue] = useState(initialValue);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(Number.parseFloat(event.target.value));
  }

  //   function handleKeydown(event: React.KeyboardEvent<HTMLInputElement>) {
  //     const key = event.key;
  //     if (key === "Backspace" || key === "Entry") return;
  //     if (value.length >= length) {
  //       event.preventDefault();
  //     }
  //   }

  return (
    <div>
      <label>{label || name}</label>
      <div className="input-wrapper">
        <input
          value={value}
          type="number"
          min="1"
          name={name}
          onChange={handleChange}
        />
        <div className="controller">
          <div>
            <button onClick={() => setValue((v) => v + 1)}>
              <FontAwesomeIcon icon={faCaretUp} />
            </button>
          </div>
          <div>
            <button
              onClick={() => setValue((v) => v - 1)}
              disabled={value <= 1}
            >
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
          </div>
        </div>
        <span className="counter">{span}</span>
      </div>
    </div>
  );
}

export default index;
