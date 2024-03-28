"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from "next/link";
import styles from "./Styles.module.css";
import LogoutButton from './logoutButton';


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
  
function Navigator() {
    const pathname = usePathname()
  return (
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
        <LogoutButton/>
      </div>
  )
}

export default Navigator

