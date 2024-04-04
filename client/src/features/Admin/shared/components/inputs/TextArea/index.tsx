"use client";
import React, { useState } from "react";

interface TextAriaProps {
  name: string;
  label?: string;
  length: number;
  initialValue?: string;
};

function index({ name, label, length, initialValue = "" }: TextAriaProps) {
  const [value, setValue] = useState(initialValue);

  const style = {
    color: value.length === length ? " #e2e8f0" : " #64748b",
  };
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }
  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    const key = event.key;
    if (key === "Backspace" || key === "Entry") return;
    if (value.length >= length) {
      event.preventDefault();
    }
  }

  return (
    <>
      <label>{label || name}</label>
      <div className="input-wrapper">
        <textarea
          name={name}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          rows={4}
        />
        <span className="absolute right-3 bottom-3" style={style}>
          {value.length}/{length}
        </span>
      </div>
    </>
  );
}

export default index;
