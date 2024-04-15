import React from "react";
import Link from "next/link";
import styles from "./Styles.module.css";

// TypeScript Interfaces
interface Category {
  id: number;
  name: string;
}
interface ParentCategory {
  id: Number;
  name: string;
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
              href={`/store?section=${parentCategory.name}`}
              className={styles.parentCategory}
            >
              {parentCategory.name}
            </Link>

            {parentCategory.children.map((category: Category) => (
              <div key={category.id} className={styles.childCategory}>
                <Link
                  href={`/store?section=${parentCategory.name}&category=${category.name}`}
                  className={styles.link}
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
