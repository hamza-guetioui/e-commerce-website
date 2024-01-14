import React from "react";
import Card from "./Card";
import styles from "../ShopSection.module.css";

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
    price: "349 MAD",
  },
  {
    id: 3,
    title: "Men's Formal",
    description: "Classic design, perfect for any occasion.",
    imageSrc: "card3.jpg",
    price: "599 MAD",
  },
  {
    id: 4,
    title: "Summer Dress",
    description: "Lightweight and stylish dress for hot days.",
    imageSrc: "card2.jpg",
    price: "199 MAD",
  },
  {
    id: 5,
    title: "Casual Jeans",
    description: "Comfortable denim jeans, ideal for everyday wear.",
    imageSrc: "card1.jpg",
    price: "149 MAD",
  },
  {
    id: 6,
    title: "Sports Shoes",
    description: "Supportive and trendy footwear for workouts.",
    imageSrc: "card3.jpg",
    price: "279 MAD",
  },
  {
    id: 7,
    title: "Smartwatch",
    description: "Stay connected with this stylish tech accessory.",
    imageSrc: "card1.jpg",
    price: "899 MAD",
  },
  {
    id: 8,
    title: "Handbag",
    description: "Elegant and spacious, perfect for any occasion.",
    imageSrc: "card2.jpg",
    price: "349 MAD",
  },
];

function ProductsSection() {
  return (
    <div
      className={` ${styles.productsContainer} `}
    >
      {products.map(({ id, ...data }) => {
        return <Card key={id} {...data} />;
      })}
    </div>
  );
}

export default ProductsSection;
