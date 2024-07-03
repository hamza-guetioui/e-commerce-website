import React from "react";
import Link from "next/link";
import styles from "./Styles.module.css";
import Button from "./Button";

const options = [
  {
    id: 7,
    name: "Contact Us",
    path: "/contactUs",
  },
  {
    id: 8,
    name: "About Us",
    path: "/about",
  },
  {
    id: 9,
    name: "FAQ's",
    path: "/faqs",
  },
  {
    id: 10,
    name: "Terms & Conditions",
    path: "/terms",
  },
];

function More() {
  return (
    <div className={`relative group`}>
      <Button>More</Button>
      <ul className={`${styles.dropMenu} z-30 group-hover:block`}>
        {options.map((option) => {
          return (
            <li key={option.id} className={`${styles.more_opt}`}>
              <Link href={option.path} className={styles.link}>
                {option.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default More;
