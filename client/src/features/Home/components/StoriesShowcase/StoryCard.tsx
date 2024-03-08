import Image from "next/image";
import React from "react";
import styles from "./Styles.module.css";

interface CardProps {
  name: string;
  image: string;
  story: string;
}

function Card({ name, image, story }: CardProps) {
  return (
    <div className={styles.card}>
      <div className="w-full h-4/5">
        <Image
          className={styles.image}
          src={`/images/${image}`}
          alt="title"
          width={400}
          height={400}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.description}>{story}</p>
      </div>
    </div>
  );
}

export default Card;
