"use client";
import React, { useMemo, useState } from "react";

function Input() {
  const [value, setValue] = useState("");

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <p>{}</p>

    </div>
  );
}

export default Input;
