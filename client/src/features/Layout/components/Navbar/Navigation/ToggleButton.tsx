import React from "react";

import styles from "./Styles.module.css";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type ToggleButtonProps = {
  isOpen: boolean;
  toggleEvent: () => void;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ toggleEvent, isOpen }) => {
  return (
    <>
      <button
        className={`${styles.toggleBtn} ${isOpen ? styles.open : ""}`}
        onClick={toggleEvent}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </>
  );
};

export default ToggleButton;
