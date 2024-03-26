'use client'
import React from "react";
import styles from "./Styles.module.css";
import StoryCard from "./StoryCard";

// scroll context
import { useScroll } from "@/features/Home/shared/context/scrollContext";

const stories = [
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

function StoriesShowcase() {
    
  const { scrollRef } = useScroll();

  return (
    <div ref={scrollRef} className={styles.storiesShowcase}>
      {stories.map((story) => {
        return <StoryCard key={story.id} {...story} />;
      })}
    </div>
  );
}

export default StoriesShowcase;
