import React from "react";
import ExploreSection from "./ExploreSection";
import Slidebar from "./Slidebar";

import styles from "./HeroStyles.module.css";

function Hero() {
  return (
    <div className={`flex-center shadow-[-1px_20px_20px_-16px_rgba(0,0,0,0.24)] ${styles.container}`}>
      {/* slidebar */}
      <Slidebar />
      {/*  ExploreSection: Curates items for user discovery and exploration */}
      <ExploreSection />
    </div>
  );
}

export default Hero;
