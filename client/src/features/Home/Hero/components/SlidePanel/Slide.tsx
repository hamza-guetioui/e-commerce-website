import React from "react";
import styles from "./Styles.module.css";
import Image from "next/image";
import Link from "next/link";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// TypeScript
interface SlideProps {
  id: number;
  title: string;
  image: string;
  description: string | JSX.Element;
  path: string;
  type: {
    id: number;
    name: string;
  };
}

export default function Slide({
  title,
  description,
  image,
  path,
  type,
}: SlideProps) {
  return (
    <div className={styles.slide}>
      <Image
        src={`${apiUrl}/images?src=${image}`}
        priority={true}
        alt={`${title}`}
        width={945}
        height={568}
        className={styles.image}
      />

      <div className={styles.slideContent}>
        <h1 className={styles.slideTitle}> {title}</h1>
        <p className={styles.slideDescription}>{description}</p>
        <button className={styles.redirectBtn}>
          <Link href={path}>Discover Now</Link>
        </button>
      </div>
    </div>
  );
}
