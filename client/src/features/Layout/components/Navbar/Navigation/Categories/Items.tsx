import React from "react";
import Link from "next/link";
import styles from "./Styles.module.css";

// TypeScript Interfaces
interface Category {
  id: number;
  name: string;
}
interface PCategory {
  id: Number;
  name: string;
  children: Category[];
}

// fetching Categories (SSG)
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
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

async function Items() {
  const categories = await getCategories();

  return (
    <>
      {categories.map((pCategory: PCategory) => {
        return (
          <div key={pCategory.id.toString()}>
            <Link
              href={`/store?section=${pCategory.name}`}
              className={styles.pCategory}
            >
              {pCategory.name}
            </Link>

            {pCategory.children.map((category: Category) => (
              <div key={category.id} className={styles.category}>
                <Link
                  href={`/store?section=${pCategory.name}&category=${category.name}`}
                  className={styles.link}
                >
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
}

export default Items;
