"use client";
import React, { useState } from "react";
import styles from "./Styles.module.css";
import ToggleButton from "./ToggleButton";

function Navigation({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="relative order-1 md:order-2">
      <ToggleButton
        isOpen={isOpen}
        toggleEvent={() => {
          setOpen(!isOpen);
        }}
      />
      <nav className={`${styles.container} ${isOpen ? "" : "hidden"}`}>
        {children}
      </nav>
    </div>
  );
}

export default Navigation;
