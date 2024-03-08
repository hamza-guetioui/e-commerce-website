import React from "react";
import styles from "./Styles.module.css";

import Discovery from "./Discovery";

// TypeScript
interface Item {
  id: number;
  title: string;
  description?: string | JSX.Element;
  imageSrc: string;
  alt: string;
  path: string;
}

const discoveryData = [
  {
    id: 1,
    title: "Women's Jewelry",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt",
    imageSrc: "shoes.webp",
    alt: "amazigh-jewelry",
    path: "/store",
  },
  {
    id: 2,
    title: "Women's Jewelry",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt",
    imageSrc: "jewelry.webp",
    alt: "amazigh-jewelry",
    path: "/store",
  },
];

// const getDiscoveryData = async ()=>{
//   const response = await fetch()
// }

async function DiscoveryPanel() {
  // const discoveryData = await getDiscoveryData()

  return (
    <div className={styles.discoveryPanel}>
      {discoveryData &&
        discoveryData.map((item) => {
          return <Discovery key={item.id} {...item} />;
        })}
    </div>
  );
}

export default DiscoveryPanel;
