import React from "react";
import styles from "../ShopSection.module.css";
import Image from "next/image";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  id:number,
  name: string;
  image: string;
  description?: string | JSX.Element;
  price: string;
}

function Card({id, name, description, image }: CardProps) {
  return (
    <div className={styles.cardBox} key={id}>
      <FontAwesomeIcon icon={faHeart} className={styles.cardHeart}/>
      <FontAwesomeIcon icon={faCartPlus} className={styles.cardCart}/>
      <Image
        className={styles.cardImage}
        src={`${apiUrl}/images?imageSrc=${image}`}
        alt="Card image"
        width={300}
        height={300}
      />
      <div className={styles.cardContent}>
      
        <h1 className={styles.cardTitle}>{name}</h1>
        <p className={styles.cardDescription}>{description}</p>
        <span className={styles.cardPrice}>{144.99}</span>
      </div>
    </div>
  );
}

export default Card;
