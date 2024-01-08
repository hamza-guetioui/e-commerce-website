import React from "react";
import styles from "./NavStyles.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigator() {
  return (
    <>
      {/* links to different pages of the site */}
      <div className=" text-left basis-full text-2xl order-1 md:hidden md:basis-auto">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className="hidden md:flex md:justify-evenly order-2">
        <li>
          <a href="#" className={ styles.pageLink }>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={ styles.pageLink }>
            fachion
          </a>
        </li>
        <li>
          <a href="#" className={ styles.pageLink }>
            new collaction
          </a>
        </li>
        <li>
          <a href="#" className={ styles.pageLink }>
            about us
          </a>
        </li>
        <li>
          <a href="#" className={ styles.pageLink }>
            contact us
          </a>
        </li>
      </ul>
    </>
  );
}

export default Navigator;
