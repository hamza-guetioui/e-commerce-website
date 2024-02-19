import React from "react";
import styles from "./ProdShowStyles.module.css";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  title: string;
  imageSrc?: string;
  description?: string | JSX.Element;
  price: string;
}

function Card({ title, description, imageSrc, price }: CardProps) {
  return (
    <div className={styles.cardBox}>
      <FontAwesomeIcon icon={faHeart} className={styles.cardHeart}/>
      <FontAwesomeIcon icon={faCartPlus} className={styles.cardCart}/>
      <Image
        className={styles.cardImage}
        src={`/images/${imageSrc}`}
        alt="Card image"
        width={300}
        height={300}
      />
      <div className={styles.cardContent}>
      
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardDescription}>{description}</p>
        <span className={styles.cardPrice}>{price}</span>
      </div>
    </div>
  );
}

export default Card;
