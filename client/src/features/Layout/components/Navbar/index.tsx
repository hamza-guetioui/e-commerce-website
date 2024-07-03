import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserTool from "./UserTool";

import styles from "./Styles.module.css";

function index() {
  return (
    <div className={styles.container}>
      <Logo />
      <Navigation/>
      <UserTool />
    </div>
  );
}

export default index;
