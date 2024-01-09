"use client";
import Image from "next/image";
import React from "react";
import styles from "./StoriesSection.module.css";

interface CardProps {
  name: string;
  image: string;
  story: string;
}

function Card({ name, image, story }: CardProps) {
  return (
    <div className={styles.cardBox}>
      <div className="w-full h-full">
        <Image
          className={styles.cardImage}
          src={`/images/${image}`}
          alt="title"
          width={400}
          height={400}
        />
      </div>
      <div className={styles.cardContent}>
        <h1 className={styles.cardTitleContent}>{name}</h1>
        <p className={styles.cardDescriptionContent}>{story}</p>
      </div>
    </div>
  );
}

export default Card;
