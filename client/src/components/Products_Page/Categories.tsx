import React from "react";
import Link from "next/link";
import { categoriesOptions } from "@/data";
import styles from "./ShopSection.module.css";

interface Category {
  parent_category: string;
  child_categories: {
    id: number;
    name: string;
  }[];
}

const fetchCategories = async ()=>{
  const data =  await fetch('http://localhost:4040/products/categories')
  return await data.json()
}

 async function Categories() {
  const categories = await fetchCategories()
  
  return (
    <div className={ styles.categoriesContainer }>
       <div className={styles.categoryLinkWrapper}>
                <Link
                  href="/products"
                  className={styles.pageLink}
                >
                  All Categories
                </Link>
              </div>
      {categoriesOptions.map((option) => {
        return (
          <div key={option.optionsGroupName}>
            <span className={styles.subMenuGroup}>
              {option.optionsGroupName}
            </span>
            {option.categories.map((category) => (
              <div key={category.name} className={styles.categoryLinkWrapper}>
                <Link
                  href={
                    `/products?category=${category.path?.toString()}&opt=${
                      option.optionsGroupName
                    }` || "#"
                  }
                  className={styles.pageLink}
                >
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
