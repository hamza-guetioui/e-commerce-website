import React from "react";
import ExploreSection from "./ExploreSection";
import Slidebar from "./Slidebar";

import styles from "./Styles.module.css";

function Hero() {
  return (
    <div className={`${styles.container}`}>
      {/* slidebar */}
      <Slidebar />
      {/*  ExploreSection: Curates items for user discovery and exploration */}
      <ExploreSection />
    </div>
  );
}

export default Hero;
