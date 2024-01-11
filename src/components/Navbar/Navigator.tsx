"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./NavStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type navProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
function Navigator({ isMenuOpen, setIsMenuOpen }: navProps) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* links to different pages of the site */}
      <div className={styles.navContainer}>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <ul className={`${styles.nav} z-30 ${isMenuOpen ? "" : "hidden"}`}>
        <li className={styles.linkWrapper}>
          <a href="#" className={styles.pageLink}>
            Home
          </a>
        </li>
        <li className={styles.linkWrapper}>
          <a href="#" className={styles.pageLink}>
            fachion
          </a>
        </li>
        <li className={styles.linkWrapper}>
          <a href="#" className={styles.pageLink}>
            new collaction
          </a>
        </li>
        <li className={styles.linkWrapper}>
          <a href="#" className={styles.pageLink}>
            about us
          </a>
        </li>
        <li className={styles.linkWrapper}>
          <a href="#" className={styles.pageLink}>
            contact us
          </a>
        </li>
      </ul>
    </>
  );
}

export default Navigator;
