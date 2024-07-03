import React from "react";
import Link from "next/link";

import styles from "./Styles.module.css";

type NavItemProps = {
  path?: string;
  children: React.ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({ path, children }) => {
  return (
    <div className={styles.item}>
      {path ? (
        <Link href={path} className={styles.link}>
          {children}
        </Link>
      ) : (
        children
      )}
    </div>
  );
};

export default NavItem;
