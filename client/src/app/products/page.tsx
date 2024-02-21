import React from "react";
import {
  Categories,
  ProductsSection,
  AdSidebar,
  FilterBar,
} from "@/components/Products_Page";


function Products(){
  return (
    <>
      <FilterBar />
      <div className="grid grid-cols-12 gap-4 p-4">
        <Categories />
        <ProductsSection/>
        <AdSidebar />
      </div>
    </>
  );
};

export default Products;