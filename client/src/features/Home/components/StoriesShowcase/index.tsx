
import React from "react";
import styles from "./Styles.module.css";
import Intro from "./Intro";
import Stories from "./Stories";

// scroll context
import { ScrollProvider } from "@/features/Home/shared/context/scrollContext";

function StoriesShowcase() {
  return (
    <div className={styles.container}>
      <ScrollProvider>
        <Intro />
        <Stories />
      </ScrollProvider>
    </div>
  );
}

export default StoriesShowcase;
