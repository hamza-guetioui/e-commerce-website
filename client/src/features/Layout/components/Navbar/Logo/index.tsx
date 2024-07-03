import React from "react";
import styles from "./Styles.module.css";
import Image from "next/image";


function index() {
  return (
    <div className={styles.container}>
      {/* <Image
        src="/assests/logo.jpg"
        className={styles.image}
        width={30}
        height={30}
        alt="logo"
      /> */}
      <span className={styles.logoFont}>GUETIX</span>
    </div>
  );
}

export default index;
