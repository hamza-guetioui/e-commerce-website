import React from "react";
import Link from "next/link";
import styles from "../ShopSection.module.css";

// TypeScript Interfaces
interface Category {
  id: number;
  categoryName: string;
}
interface ParentCategory {
  id: Number;
  categoryName: string;
  children: Category[];
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// fetching Categories (SSG)
const getCategories = async () => {
  try {
    const response = await fetch(`${apiUrl}/categories`);
    if (!response.ok) {
      throw new Error(`Failed to fetch categories. Status: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

async function Categories() {
  const categories = await getCategories();
  return (
    <div className={styles.categoriesContainer}>
      <div className={styles.categoryLinkWrapper}>
        {/* All Categories Header */}
        <Link href="/store" className={styles.pageLink}>
          All Categories
        </Link>
        {/* Categories Looped through here */}
      </div>
      {categories.map((parentCategory: ParentCategory) => (
        <div key={parentCategory.id.toString()}>
          {/* Parent category */}
          <Link href="#" className={styles.subMenuGroup}>
            {parentCategory.categoryName}
          </Link>
          
          {/* Children categories */}
          {parentCategory.children.map((category: Category) => (
            <div key={category.id} className={styles.categoryLinkWrapper}>
              <Link
                href={
                  `/store?category=${category.categoryName}&opt=${parentCategory.categoryName}` ||
                  "#"
                }
                className={styles.pageLink}
              >
                {category.categoryName}
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Categories;
