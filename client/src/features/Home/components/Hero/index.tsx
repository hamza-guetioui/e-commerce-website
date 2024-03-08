import React from "react";
import styles from "./Styles.module.css";

import SlidePanel from "./SlidePanel";
import DiscoveryPanel from "./DiscoveryPanel";

function Hero() {
  return (
    <div className={styles.container}>
      <SlidePanel />
      <DiscoveryPanel />
    </div>
  );
}

export default Hero;
