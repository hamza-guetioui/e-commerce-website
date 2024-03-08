import React from "react";
import Styles from "./Styles.module.css";
import ProductShowcase from "./ProductShowcase";
import Products from "./Products";

// context
import { ScrollProvider } from "@/features/Home/shared/context/scrollContext";


function ProductShowcases() {
  return (
    <div className={Styles.container}>
      {/* ----------- New Collection */}
      <ScrollProvider>
        <ProductShowcase title={"New Collection"}>
          <Products />
        </ProductShowcase>
      </ScrollProvider>
      {/* ----------- Trending Now */}
      <ScrollProvider>
        <ProductShowcase title={"Trending Now"}>
          <Products />
        </ProductShowcase>
      </ScrollProvider>
    </div>
  );
}

export default ProductShowcases;
