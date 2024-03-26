"use client"
import React from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";

import styles from "./Styles.module.css";

const navigationData = [
  {
    title: "Create a new item",
    options: [
      {
        link: "/dashboard/panel/create",
        text: "panel",
      },
      {
        link: "/dashboard/product/create",
        text: "product",
      },
      {
        link: "/dashboard/article/create",
        text: "article",
      },
      {
        link: "/dashboard/fashion/create",
        text: "fashion",
      },
    ],
  },
];

function Navigation() {
  const pathname = usePathname()
  return (
    <div className={styles.navigation}>
      <h1 className={styles.title}>
        <Link href="/dashboard">Dashboard</Link>
      </h1>
      <div>
        {navigationData.map((section) => {
          return (
            <ul key={section.title}>
              <h4 className={styles.subTitle}>{section.title} </h4>
              {section.options.map((option) => {
                const isActive = pathname === option.link
                const style ={
                  backgroundColor : isActive ? "#2e3a4d" :"" 
                }
                return (
                  <li key={option.text} className={styles.option} style={style}  >
                    <Link href={option.link}>{option.text}</Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
{/* 
      <ul>
        <h4 className={styles.subTitle}>Create a new item </h4>
        <li className={styles.option}>
          <Link href="/dashboard/panel/create">panel</Link>
        </li>
        <li className={styles.option}>
          <Link href="/dashboard/product/create">product</Link>
        </li>
        <li className={styles.option}>
          <Link href="/dashboard/article/create">article</Link>
        </li>
        <li className={styles.option}>
          <Link href="/dashboard/fashion/create">fachion</Link>
        </li>
      </ul> */}
    </div>
  );
}

export default Navigation;
