import React from "react";
import Image from "next/image";

import styles from "./Styles.module.css";

function ExploreSection() {
  return (
    <div className={`flex-center ${styles.exploreContainer}`}>
      <div className={styles.exploreBox}>
        <Image
          src="/images/shoes.webp"
          alt="amazigh-shoes"
          width={1000}
          height={560}
          className={styles.boxImage}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 p-8 lg:mt-4"
          style={{ maxWidth: "75%" }}
        >
          <h1 className={styles.exploreBoxTitle}>{"Men's Shoes"}</h1>
          <p className={styles.exploreBoxDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt
          </p>
          <button className={styles.boxButton}>Discover Now</button>
        </div>
      </div>
      <div className={styles.exploreBox}>
        <Image
          src="/images/jewelry.webp"
          alt="amazigh-jewelry"
          width={1000}
          height={560}
          className={styles.boxImage}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 p-8 lg:mt-4"
          style={{ maxWidth: "75%" }}
        >
          <h1 className={styles.exploreBoxTitle}>{"Women's Jewelry"}</h1>
          <p className={`  ${styles.exploreBoxDescription} h-8 mb-2`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt
          </p>
          <button className={styles.boxButton}>Discover Now</button>
        </div>
      </div>
    </div>
  );
}

export default ExploreSection;
