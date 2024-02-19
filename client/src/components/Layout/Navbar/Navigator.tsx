"use client";
import React from "react";
import styles from "./NavStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { NavigationPages } from "@/data";
import Link from "next/link";

type navProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navigator({ isMenuOpen, setIsMenuOpen }: navProps) {
  return (
    <>
      {/* links to different pages of the site */}
      <div className={styles.navContainer}>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Navigation Pages */}
      <ul className={`${styles.nav} z-30 ${isMenuOpen ? "" : "hidden"}`}>
        {NavigationPages.map((page) => {
          return (
            <li key={page.name} className={`${styles.linkWrapper} group`}>
              {page.name === "Categories" ? (
                <>
                  <Link href={"/products"} className={styles.pageLink}>
                    {page.name}
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="ml-[6px] mt-[6px]"
                    />
                  </Link>
                  <div className={`${styles.dropDownMenu} group-hover:block`}>
                    {page.options?.map((option) => {
                      if ("optionsGroupName" in option) {
                        // categories Drop Menu
                        return (
                          <div key={option.optionsGroupName}>
                            <span className={styles.subMenuGroup}>
                              {option.optionsGroupName}
                            </span>
                            {option.categories.map((category) => (
                              <div
                                key={category.name}
                                className={styles.categoryLinkWrapper}
                              >
                                <Link
                                  href={
                                    `/products?category=${category.path?.toString()}&opt=${
                                      option.optionsGroupName
                                    }` || "#"
                                  }
                                  className={styles.pageLink}
                                >
                                  {category.name}
                                </Link>
                              </div>
                            ))}
                          </div>
                        );
                      }
                    })}
                  </div>
                </>
              ) : page.name === "More" ? (
                <React.Fragment key={page.name}>
                  <Link href={"#"} className={`${styles.pageLink}`}>
                    {page.name}
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="ml-[6px] mt-[6px]"
                    />
                  </Link>
                  <ul className={`${styles.dropDownMenu} group-hover:block`}>
                    {page.options?.map(
                      (option) =>
                        "name" in option &&
                        "path" in option && (
                          <li
                            key={option.name}
                            className={`${styles.moreLinkWrapper}`}
                          >
                            <Link
                              href={`${option.path!}` || "#"}
                              className={styles.pageLink}
                            >
                              {option.name}
                            </Link>
                          </li>
                        )
                    )}
                  </ul>
                </React.Fragment>
              ) : (
                <Link
                  href={page.path?.toString() || "#"}
                  className={styles.pageLink}
                >
                  {page.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Navigator;
