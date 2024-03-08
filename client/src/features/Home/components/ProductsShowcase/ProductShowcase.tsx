"use client";
import React from "react";
import styles from "./Styles.module.css";
import Header from "./Header";

// context
import { useScroll } from "@/features/Home/shared/context/scrollContext";

// TypeScript
type ProductShowcaseProps = {
  title: string;
  children: React.ReactNode
};


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
