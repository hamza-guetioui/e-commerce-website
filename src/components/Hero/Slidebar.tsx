import React from "react";
import Image from "next/image";

import styles from "./HeroStyles.module.css";

function Slidebar() {
  return (
    <div className={styles.sildeBox}>
      <Image
        src="/images/clothes.webp"
        alt="amazigh-clothes"
        width={945}
        height={568}
        className={styles.boxImage}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 px-8 lg:mt-4"
        style={{ maxWidth: "70%" }}
      >
        <h1 className={styles.slideboxTitle}>Traditional Amazigh Dress</h1>
        <p className={styles.slideBoxDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt vel
          at reiciendis numquam consequuntur quas, nobis dolorem beatae
          provident? Nam, sed dolor at neque distinctio in esse temporibus.
        </p>
        <button className={styles.boxButton}>Discover Now</button>
      </div>
    </div>
  );
}

export default Slidebar;
