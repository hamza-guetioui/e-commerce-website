import React from "react";
import Image from "next/image";
import styles from "../Styles.module.css";

function AdSidbar() {
  return (
    <div className={styles.adbar}>
      <Image
        className="w-full max-w-full h-full"
        src="/images/ad.png"
        alt="ad"
        width={195}
        height={656}
      />
    </div>
  );
}

export default AdSidbar;
