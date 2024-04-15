import React from "react";

import Logo from "./Logo";
import Navigation from "./Navigation";
import UserTools from "./UserTools";

import styles from "./Styles.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Navigation />
      <UserTools />
    </nav>
  );
}

export default Navbar;
