import React from "react";
import styles from "./Styles.module.css"

// fontAwsome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function index() { 
  return (
    <div className="text-right md:basis-auto order-3">
      {/* search-icon */}
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={ styles.icon}
      />
      {/* heart for favorite items */}
      <FontAwesomeIcon icon={faHeart} className={ styles.icon} />
      {/* shopping-cart */}
      <FontAwesomeIcon
        icon={faCartShopping}
        className={ styles.icon}
      />
    </div>
  );
}

export default index;
