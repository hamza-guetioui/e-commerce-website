import React from "react";
import Link from "next/link";

import styles from "./Styles.module.css";
import Navigator from "./Navigator";

function Navigation() {
  
  return (
    <div className={styles.navigation}>
      <h1 className={styles.title}>
        <Link href="/dashboard">Dashboard</Link>
      </h1>
      <Navigator/>
    </div>
  );
}

export default Navigation;
