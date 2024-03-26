import React from "react";
import Link from "next/link";
import styles from "./Styles.module.css";
import Button from "./Button";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// TypeScript
type NavigatoreProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const links = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Categories",
    path: "#",
  },
  {
    id: 3,
    name: "Store",
    path: "/store",
  },
  {
    id: 4,
    name: "Fashion",
    path: "/fashion",
  },
  {
    id: 5,
    name: "Articles",
    path: "/articles",
  },
  {
    id: 6,
    name: "More",
    path: "#",
  },
];
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


function Navigator({ isMenuOpen, setIsMenuOpen, children }: NavigatoreProps) {
  return (
    <>
      {/* links to different pages of the site */}
      <div className={styles.navContainer}>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <ul className={`${styles.navigation} z-30 ${isMenuOpen ? "" : "hidden"}`}>
        {links.map((link) => {
          if (link.name === "Categories") {
            return (
              <li key={link.id} className={`${styles.linkWrapper} group`}>
                <Button>{link.name}</Button>
                <div className={`${styles.dropDownMenu} group-hover:block`}>
                  {children}
                </div>
              </li>
            );
          }
          if (link.name === "More") {
            return (
              <li key={link.id} className={`${styles.linkWrapper} group`}>
                <Button>{link.name}</Button>
                <ul className={`${styles.moreOptionsMenu} group-hover:block`}>
                  {options.map((option) => {
                    return (
                      <li key={option.id} className={`${styles.moreLinkWrapper}`} >
                        <Link href={option.path} className={styles.link}>
                          {option.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          }
          return (
            <li key={link.id} className={`${styles.linkWrapper}`}>
              <Link href={link.path} className={styles.link}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Navigator;
