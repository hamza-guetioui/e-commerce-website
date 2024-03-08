import React from "react";
import styles from "./Styles.module.css";
import Image from "next/image";
import Link from "next/link";

// TypeScript
interface SlideProps {
  id: number;
  title: string;
  description?: string | JSX.Element;
  imageSrc: string;
  alt: string;
  path: string;
}

export default function Slide({
  title,
  description,
  imageSrc,
  alt,
  path,
}: SlideProps) {
  return (
    <div  className={ styles.slide } >
      <Image
        src={`/images/${imageSrc}`}
        priority={true}
        alt={`${alt}`}
        width={945}
        height={568}
        className={ styles.image }
      />

      <div className={ styles.slideContent }>
        <h1 className={ styles.slideTitle }> {title }</h1>
        <p className={ styles.slideDescription }>{ description }</p>
        <button className={ styles.redirectBtn }>
          <Link href={ path }>Discover Now</Link>
        </button>
      </div>
    </div>
  );
}
