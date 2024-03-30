"use client";
import React, { useState, useMemo } from "react";
import style from "./Style.module.css";

// fontAwsome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type SelectedProps = {
  children: React.ReactNode;
  selectedOptions: Array<{
    id: string;
    name: string;
  }>;
};

function Selected({ selectedOptions, children }: SelectedProps) {
  const [dropMenu, setDropMenu] = useState(false);

  function handleClick() {
    setDropMenu((dropMenu) => !dropMenu);
  }
  return (
    <>
      <div className="selectInput" onClick={handleClick}>
        {selectedOptions.length == 0 && <div className="text-slate-400 opacity-65">select your option(s)</div>}
        {selectedOptions.map((s) => (
          <div key={s.id} className="px-4 py-1 rounded-lg bg-green-500 text-md">
            {s.name}
          </div>
        ))}
      </div>
      <span>
        <FontAwesomeIcon icon={faChevronDown} />
      </span>

      {dropMenu && <div className={style.dropDownMenu}>{children}</div>}
    </>
  );
}

export default Selected;
