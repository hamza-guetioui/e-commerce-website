"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Navigator from "./Navigator";
import ClientOptions from "./ClientOptions";
import Categories from "./Categories";

import styles from "./Styles.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* blur div covers the body if menu open */}
      <div
        className={` ${
          isMenuOpen ? "fixed z-10 opacity-60 w-full h-full bg-black" : ""
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <nav className={styles.navbar}>
        {/* logo */}
        <Logo />
        {/* Navigation */}
        <Navigator isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
          <Categories />
        </Navigator>
        {/* client options: search, favorites, and shopping cart */}
        <ClientOptions />
      </nav>
    </>
  );
}

export default Navbar;
