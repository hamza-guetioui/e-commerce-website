import React from "react";
import Link from "next/link";
import styles from "./Styles.module.css";

// TypeScript Interfaces

interface Section {
  id: Number;
  categoryName: string;
  children: Category[];
}
interface Category {
  id: number;
  categoryName: string;
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
      {/* All Categories Link */}
      <div className={styles.category}>
        <Link href="/store" className={styles.link}>
          All Categories
        </Link>
      </div>
      
      {/* Categories */}
      {/* section = parentCategoty + Children (categories)*/}
      {categories.map((section: Section) => (
        <div key={section.id.toString()}>
          {/* Parent category */}
          <Link href="#" className={styles.parentCategory}>
            {section.categoryName}
          </Link>

          {/* Children categories */}
          {section.children.map((category: Category) => (
            <div key={category.id} className={styles.category}>
              <Link
                href={
                  `/store?category=${category.categoryName}&opt=${section.categoryName}`
                }
                className={styles.link}
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
