import React from "react";
import Styles from "./Styles.module.css";
import ProductShowcase from "./components/ProductShowcase";
import Products from "./components/Products";

// context
import { ScrollProvider } from "./context/scrollContext";


function index() {
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

export default index;
