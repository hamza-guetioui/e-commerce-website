import React from "react";
import Link from "next/link";
import { categoriesOptions } from "@/data";
import styles from "./ShopSection.module.css";

function Categories() {
  return (
    <div className={ styles.categoriesContainer}>
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
