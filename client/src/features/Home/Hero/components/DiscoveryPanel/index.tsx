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

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// const getDiscovery = async () => {
//   try {
//     const response = await fetch(`${apiUrl}/panels?type=discovery&limit=2`, {
//       next: { tags: ["panels"] },
//     });

//     if (!response.ok){
//       throw new Error(response.statusText);
//     } 
//     const { data } = await response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
 



async function DiscoveryPanel() {
  // const discoveryData = await getDiscovery()

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
