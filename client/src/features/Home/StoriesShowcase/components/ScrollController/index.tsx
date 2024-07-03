
import React from "react";
import styles from "./Styles.module.css";
import Button from "./Button";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function ScrollController( { scroll }: { scroll: (scrollTo: string) => void }) {
  return (
    <div className={styles.scrollCtrl}>
      <Button scrollTo="right" handleScroll={scroll}>
      <FontAwesomeIcon icon={faAngleLeft} />
      </Button>
      <Button scrollTo="left" handleScroll={scroll}>
      <FontAwesomeIcon icon={faAngleRight} />
      </Button>
    </div>
  );
}

export default ScrollController;
