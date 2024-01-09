"use client"
import React from "react";
import styles from "./StoriesSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function ScrollController( { scroll }: { scroll: (scrollDest: string) => void }) {
  return (
    <div className="flex items-center justify-start ">
      <button className={`${styles.sectionScrollBtn} mr-1 lg:mr-2`}
      onClick={()=> scroll('btnScrollLeft')}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button className={styles.sectionScrollBtn}
      onClick={()=> scroll('btnScrollRight')}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}

export default ScrollController;
