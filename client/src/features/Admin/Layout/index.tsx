import React from "react";
import Navigation from "./components/Navigation";
import Content from "./components/Content";

import styles from "./Styles.module.css";


function index({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Navigation />
      <Content>
        {children}
      </Content>
    </div>
  );
}

export default index;
