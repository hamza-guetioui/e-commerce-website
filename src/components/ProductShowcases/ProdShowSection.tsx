"use client";
import React, { useRef } from "react";
import styles from "./ProdShowStyles.module.css";
import Card from "./Card";
import ScrollController from "./ScrollController";

const products = [
  {
    id: 1,
    title: "men's shoes",
    description: "Lorem ipsum dolor sit officiis corrupti saepe",
    imageSrc: "card1.jpg",
    price: "290 MAD",
  },
  {
    id: 2,
    title: "women's shoes",
    description: "dolor sit officiis corrupti saepe drivn ou fhumk daugh",
    imageSrc: "card2.jpg",
    price: "349.99 MAD",
  },
  {
    id: 3,
    title: "Men's Formal Jacket",
    description: "Classic design, perfect for any occasion.",
    imageSrc: "card3.jpg",
    price: "599.99 MAD",
  },
  {
    id: 4,
    title: "Women's Summer Dress",
    description: "Lightweight and stylish dress for hot days.",
    imageSrc: "card2.jpg",
    price: "199.50 MAD",
  },
  {
    id: 5,
    title: "Men's Casual Jeans",
    description: "Comfortable denim jeans, ideal for everyday wear.",
    imageSrc: "card1.jpg",
    price: "149.99 MAD",
  },
  {
    id: 6,
    title: "Women's Sports Shoes",
    description: "Supportive and trendy footwear for workouts.",
    imageSrc: "card3.jpg",
    price: "279.00 MAD",
  },
  {
    id: 7,
    title: "Men's Smartwatch",
    description: "Stay connected with this stylish tech accessory.",
    imageSrc: "card1.jpg",
    price: "899.00 MAD",
  },
  {
    id: 8,
    title: "Women's Handbag",
    description: "Elegant and spacious, perfect for any occasion.",
    imageSrc: "card2.jpg",
    price: "349.00 MAD",
  },
];
type ProdShowProps = {
  title: string;
};
function ProdShowSection({ title }: ProdShowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollProducts(scrollTo: string): void {
    if (scrollRef.current) {
      console.log(scrollRef.current.scrollLeft, scrollTo);
      switch (scrollTo) {
        case "btnScrollRight":
          scrollRef.current.scrollLeft += 400;
          break;

        case "btnScrollLeft":
          scrollRef.current.scrollLeft -= 400;
          break;
      }
    }
  }

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3 px-4 lg:px-20 ">
        <ScrollController scroll={scrollProducts} />
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <div
        ref={scrollRef}
        className="flex items-center w-full p-1 gap-3 overflow-x-scroll md:overflow-x-hidden scroll-smooth md:w-[95%] md:m-auto md:shadow-md"
      >
        {products.map(({ id, ...data }) => {
          return <Card key={id} {...data} />;
        })}
      </div>
      <div className="text-center mt-3">
        <button
          className={`${styles.moreBtn} before:w-[calc(100%*5)] after:w-[calc(100%*5)] `}
        >
          more
        </button>
      </div>
    </div>
  );
}

export default ProdShowSection;
