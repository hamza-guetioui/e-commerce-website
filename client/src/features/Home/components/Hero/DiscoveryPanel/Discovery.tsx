import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../Styles.module.css";

// TypeScript
interface DiscoveryProps {
  id: number;
  title: string;
  description?: string | JSX.Element;
  imageSrc: string;
  alt: string;
  path: string;
}

function Discovery({
  title,
  description,
  imageSrc,
  alt,
  path,
}: DiscoveryProps) {
  return (
      <div className={styles.discovery}>
        <Image
          src={`/images/${imageSrc}`}
          alt={`${alt}`}
          width={1000}
          height={560}
          className={styles.image}
        />
        <div
          className={styles.discoveryContent}
        >
          <h1 className={styles.discoveryTitle}>{title}</h1>
          <p className={styles.discoveryDescription}>{description} </p>
          <button className={styles.redirectBtn}>
            <Link href={path}>Discover Now</Link>
          </button>
        </div>
      </div>
  );
}
export default Discovery;