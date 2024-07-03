
import React from "react";
import styles from "./Styles.module.css";
import Intro from "./components/Intro";
import Stories from "./components/Stories";

// scroll context
import { ScrollProvider } from "./context/scrollContext";

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
