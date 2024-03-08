"use client";
import React from "react";
import styles from "./Styles.module.css";
import Header from "./Header";

// context
import { useScroll } from "./ScrollContext";

// TypeScript
type ProductShowcaseProps = {
  title: string;
  children: React.ReactNode
};
interface Product {
  id: number;
  name: string;
  image: string;
  description?: string | JSX.Element;
  price: string;
}


 function ProductShowcase({ title , children }: ProductShowcaseProps) {

  const { scrollRef } = useScroll();
  
  return (
    <div className={styles.productShowcase}>
      <Header title={title} />
      <div ref={scrollRef} className={`${styles.products}`}>
      { children }
      </div>
    </div>
  );
}

export default ProductShowcase;
