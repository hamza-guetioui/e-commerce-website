import React from "react";
import SlidePanel from "./components/SlidePanel";
import DiscoveryPanel from "./components/DiscoveryPanel";

import styles from "./Styles.module.css";



function Hero() {
  return (
    <div className={styles.container}>
      <SlidePanel />
      <DiscoveryPanel />
    </div>
  );
}

export default Hero;
