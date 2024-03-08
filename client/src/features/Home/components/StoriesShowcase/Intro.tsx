import React from "react";
import styles from "./Styles.module.css";
import ScrollController from "@/features/Home/shared/components/ScrollController";

// context
import { useScroll } from "@/features/Home/shared/context/scrollContext";

function Intro() {
  const { handleScroll } = useScroll();

  return (
    <div>
      <div className={ styles.intro }>
        <div className={ styles.head }>
          <h4 className={ styles.subTitle } >Amzigh Fashion</h4>
          <h1 >Stories</h1>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt et
          ex eveniet neque dolore quidem illo.
        </p>
        <ScrollController scroll={handleScroll} />
      </div>
    </div>
  );
}

export default Intro;
