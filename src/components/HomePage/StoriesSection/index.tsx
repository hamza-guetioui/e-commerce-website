"use client";
import React, { useRef } from "react";
import styles from "./StoriesSection.module.css";
import ScrollController from "./ScrollController";
import Card from "./Card";

const clothesData = [
  {
    id: 1,
    name: "Tunics",
    image: "clothes1.jpg",
    story:
      "The tunics are a vital part of Amazigh clothing, representing their rich cultural heritage...",
  },
  {
    id: 2,
    name: "Headscarves",
    image: "clothes2.jpg",
    story:
      "Headscarves are intricately woven, often reflecting the wearer's tribe, status, or beliefs...",
  },
  {
    id: 3,
    name: "Robes",
    image: "clothes3.jpg",
    story:
      "Robes showcase exquisite patterns and designs, elements of nature...",
  },
  {
    id: 4,
    name: "Shawls",
    image: "clothes1.jpg",
    story:
      "Shawls are versatile accessories, crafted with vibrant colors and others...",
  },
  {
    id: 5,
    name: "Vests",
    image: "clothes2.jpg",
    story:
      "Vests are worn on special occasions, adorned with intricate beadwork...",
  },
  {
    id: 6,
    name: "Belts",
    image: "clothes3.jpg",
    story:
      "Belts serve both functional and decorative purposes, showcasing stunning...",
  },
  {
    id: 7,
    name: "Jewelry",
    image: "clothes1.jpg",
    story:
      "Jewelry holds immense cultural significance, often passed down through...",
  },
  {
    id: 8,
    name: "Sandals",
    image: "clothes2.jpg",
    story:
      "Sandals exhibit traditional craftsmanship, providing comfort and style...",
  },
];

function StoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollProducts(scrollTo: string): void {

    if (scrollRef.current) {
      switch (scrollTo) {
        case "btnScrollRight":
          scrollRef.current.scrollLeft += 300;
          break;

        case "btnScrollLeft":
          scrollRef.current.scrollLeft -= 300;
          break;
      }
    }
  }
  return (
    <div className={styles.container}>
      <div className={ styles.introBox}>
        <h1 className={styles.introTitle}>
          <span className="block text-sm md:text-base">Amzigh Fashion</span>
          <span className="block text-3xl md:text-4xl">Stories</span>
        </h1>
        <p className={styles.introDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt et
          ex eveniet neque dolore quidem illo.
        </p>
        <ScrollController scroll={scrollProducts} />
      </div>
      <div
        ref={scrollRef}
        className={ styles.cardsContainer}
      >
        {clothesData.map(({ id, ...data }) => {
          return <Card key={id} {...data} />;
        })}
      </div>
    </div>
  );
}

export default StoriesSection;
