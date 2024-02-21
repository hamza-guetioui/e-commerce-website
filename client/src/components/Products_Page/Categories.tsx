import React from "react";
import Link from "next/link";
import styles from "./ShopSection.module.css";

// TypeScript Interfaces
interface Category {
  id: number;
  name: string;
}
interface CategoryGroup {
  parent_category: string;
  child_categories: Category[];
}
// fetching Categories (SSG)
const fetchCategoriesFromServer = async () => {
  try {
    const response = await fetch('http://localhost:4040/products/categories');
    if (!response.ok) {
      throw new Error(`Failed to fetch categories. Status: ${response.status}`);
    };
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

 async function Categories() {

  const categories = await fetchCategoriesFromServer()

  return (
<div className={styles.categoriesContainer}>
  <div className={styles.categoryLinkWrapper}>
    <Link href="/products" className={styles.pageLink}>
      All Categories
    </Link>
  </div>
  {categories.map((categoryGroup : CategoryGroup) => (
    <div key={categoryGroup.parent_category}>
      <span className={styles.subMenuGroup}>{categoryGroup.parent_category}</span>
      {categoryGroup.child_categories.map((category : Category) => (
        <div key={category.id} className={styles.categoryLinkWrapper}>
          <Link
            href={`/products?category=${category.name}&opt=${categoryGroup.parent_category}` || "#"}
            className={styles.pageLink}
          >
            {category.name}
          </Link>
        </div>
      ))}
    </div>
  ))}
</div>
  );
}

export default Categories;
