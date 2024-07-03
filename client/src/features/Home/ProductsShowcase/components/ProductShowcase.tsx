"use client";
import React from "react";
import styles from "./Styles.module.css";
import Header from "./Header";

// context
import { useScroll } from "../context/scrollContext";

// TypeScript
type ProductShowcaseProps = {
  title: string;
  children: React.ReactNode;
};

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  title,
  children,
}) => {
  const { scrollRef } = useScroll();

  return (
    <div className={styles.productShowcase}>
      <Header title={title} />
      <div ref={scrollRef} className={`${styles.products}`}>
        {children}
      </div>
    </div>
  );
};

export default ProductShowcase;
