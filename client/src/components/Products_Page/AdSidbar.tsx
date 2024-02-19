import React from "react";
import Image from "next/image";
import styles from "./ShopSection.module.css";

function AdSidbar() {
  return (
    <div className={styles.adSidebar}>
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
