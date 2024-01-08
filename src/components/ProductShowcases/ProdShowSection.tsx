import React from "react";
import Card from "./Card";

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

function ProdShowSection() {
  return (
    <div>
      <div>
        <h2 className="text-center my-5">Product Showcase</h2>
      </div>
      <div className="flex overflow-x-scroll max-w-full p-4 gap-4">
        {products.map(({ id, ...data }) => {
          return <Card key={id} {...data} />;
        })}
      </div>
    </div>
  );
}

export default ProdShowSection;
