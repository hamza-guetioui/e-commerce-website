import React from "react";
import styles from "./Styles.module.css";
import Image from "next/image";

// Font Azsome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

// TypeScript
interface CardProps {
  id: number;
  name: string;
  image: string;
  description?: string | JSX.Element;
  price: string;
}
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function Card({ name, description, image, price }: CardProps) {
  return (
    <div className={styles.card}>
      <FontAwesomeIcon icon={faHeart} className={styles.heartIcon} />
      <FontAwesomeIcon icon={faCartPlus} className={styles.shoppingCartIcon} />
      <Image
        className={styles.image}
        src={`${apiUrl}/images?src=${image}`}
        alt="Card image"
        width={300}
        height={300}
      />

      <div className={styles.content}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.description}>{description}</p>
        <span className={styles.price}>{price}144.99 MAD</span>
      </div>
    </div>
  );
}

export default Card;
