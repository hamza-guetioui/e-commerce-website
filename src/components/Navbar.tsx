import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-1 h-14 border-b">
      {/* logo */}
      <div className="flex-center">
        {/* <Image src="/assests/logo.jpg" alt="logo" width={30} height={30} className=" mr-1 rounded" /> */}
        <span className="logo-font text-lg font-semibold font-cursive [word-spacing:-5px]">Bab Shop</span>
      </div>
      {/* links to different pages of the site */}
      <ul className="flex justify-evenly ">
        <li>
          <a href="#" className="page-link">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="page-link">
            fachion
          </a>
        </li>
        <li>
          <a href="#" className="page-link">
            new collaction
          </a>
        </li>
        <li>
          <a href="#" className="page-link">
            about us
          </a>
        </li>
        <li>
          <a href="#" className="page-link">
            contact us
          </a>
        </li>
      </ul>
      {/* client options: search, favorites, and shopping cart */}
      <div>
        {/* search-icon */}
        <FontAwesomeIcon icon={faMagnifyingGlass} className="client-options__icon "/>
        {/* heart for favorite items */}
        <FontAwesomeIcon icon={faHeart} className="client-options__icon "/>
        {/* shopping-cart */}
        <FontAwesomeIcon icon={faCartShopping} className="client-options__icon "/>
      </div>
    </nav>
  );
}

export default Navbar;
