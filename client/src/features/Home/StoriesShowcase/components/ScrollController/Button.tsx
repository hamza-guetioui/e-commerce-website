import React from "react";
import styles from "./Styles.module.css";

interface ButtonProps {
  scrollTo: "left" | "right";
  handleScroll: (scrollTo: "left" | "right") => void;
  children: React.ReactNode;
}

function Button({ scrollTo, handleScroll, children }: ButtonProps) {
  return (
    <>
      <button
        className={styles.scrollBtn}
        onClick={() => handleScroll(scrollTo)}
      >
        {children}
      </button>
    </>
  );
}

export default Button;