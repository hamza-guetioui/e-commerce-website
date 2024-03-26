import React from "react";
import Link from "next/link";
import styles from "./Styles.module.css";

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
    <div className={styles.categories}>
      {categories.map((parentCategory: ParentCategory) => {
        return (
          <div key={parentCategory.id.toString()}>
            <Link
              href={`/store?section=${parentCategory.categoryName}`}
              className={styles.parentCategory}
            >
              {parentCategory.categoryName}
            </Link>

            {parentCategory.children.map((category: Category) => (
              <div key={category.id} className={styles.childCategory}>
                <Link
                  href={`/store?section=${parentCategory.categoryName}&category=${category.categoryName}`}
                  className={styles.link}
                >
                  {category.categoryName}
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
