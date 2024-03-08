"use client";
import React from "react";
import styles from "./Styles.module.css";
import Intro from "./Intro";
import StoriesShowcase from "./StoriesShowcase";

// scroll context
import { ScrollProvider } from "./ScrollContext";





function Stories() {
  return (
    <div className={styles.container}>
      <ScrollProvider>
        <Intro />
        <StoriesShowcase />
      </ScrollProvider>
    </div>
  );
}

export default Stories;
