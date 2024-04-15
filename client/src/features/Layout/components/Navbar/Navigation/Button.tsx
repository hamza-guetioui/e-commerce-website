import React from "react";
import styles from "../Styles.module.css";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

    // TypeScript
type ButtonProps = {
    children: React.ReactNode
  };
  

function Button({ children } : ButtonProps ) {
  return (
    <>
        <button className={styles.link}>
                  { children}
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="ml-[6px] mt-[6px]"
                  />
                </button>
    </>
  )
}

export default Button