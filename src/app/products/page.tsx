import React from "react";
import {
  Categories,
  ProductsSection,
  AdSidebar,
} from "@/components/ShopSection";


function Products() {
  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      <Categories />
      <ProductsSection />
      <AdSidebar />
    </div>
  );
}

export default Products;
