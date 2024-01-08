import React from "react";
import styles from "./ProdShowStyles.module.css";
import Image from "next/image";

interface CardProps {
  title: string;
  imageSrc?: string;
  description?: string | JSX.Element;
  price: string;
}

function Card({ title, description, imageSrc, price }: CardProps) {
  return (
    <div
      className={`${styles.cardBox}  min-w-[50%] sm:min-w-[30%] md:min-w-[19%] lg:min-w-[15%]`}
    >
      <Image
        className={styles.cardImage}
        src={`/images/${imageSrc}`}
        alt="Card image"
        width={400}
        height={400}
      />
      <div className={styles.cardContent}>
        <h1 className={styles.cardTitle}>{`${title.slice(0 , 11)}...`}</h1>
        <p className={styles.cardDescription}>{ description }</p>
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardPrice}>{price}</div>
        <button className={styles.cardAdd}>add</button>
      </div>
    </div>
  );
}

export default Card;
