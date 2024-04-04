"use client";
import React from "react";
import useEventListener from "../hooks/useEventListener";
import style from "./Style.module.css";

interface SelectedProps  {
  id: string;
  children: React.ReactNode;
  selectedOptions: Array<{
    id: string;
    name: string;
  }>;
};

function DropdownMenu({ id, selectedOptions, children }: SelectedProps) {
  const [isOpened, handleClick] = useEventListener(id);

  return (
    <>
      <div className={style.selectInput} onClick={handleClick}>
        {/* palace holder */}
        {selectedOptions.length === 0 && (
          <div className={style.selectPlaceholder}>select your option(s)</div>
        )}
        {/* selected options */}
        {selectedOptions.map((selectedOption) => (
          <div key={selectedOption.id} className={style.selectedOption}>
            {selectedOption.name}
          </div>
        ))}
      </div>
      {/*  dropdown menu */}
      {isOpened && <div className={style.dropDownMenu}>{children}</div>}
    </>
  );
}
export default DropdownMenu;

