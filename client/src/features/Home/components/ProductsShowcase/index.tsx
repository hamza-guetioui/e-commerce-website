import React from "react";
import Styles from "./Styles.module.css";
import { ScrollProvider } from "./ScrollContext";

import ProductShowcase from "./ProductShowcase";
import Products from "./Products";

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
