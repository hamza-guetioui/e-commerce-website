"use client";
import React from "react";
import styles from "./Styles.module.css";
import Slide from "./Slide";
// swiper setUp
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

// Typescript
interface Swiper {
  id: number;
  title: string;
  description?: string | JSX.Element;
  imageSrc: string;
  alt: string;
  path: string;
}

const swiperData = [
  {
    id: 1,
    title: "Traditional Amazigh Dress",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam suntvel at reiciendis numquam consequuntur quas, nobis dolorem beataeprovident.`,
    imageSrc: "shoes.webp",
    alt: "Amazigh Dress",
    path: "/store",
  },
  {
    id: 2,
    title: "Traditional Amazigh Dress",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt vel...",
    imageSrc: "clothes.webp",
    alt: "amazigh-clothes",
    path: "/store",
  },
  {
    id: 3,
    title: "Traditional Amazigh Jewelry",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt vel...",
    alt: "amazigh-jewelry",
    imageSrc: "jewelry.webp",
    path: "/store",
  },
];

// const getSwipers = async function(){
//   const response = await fetch()
// }

function SlidePanel() {

  // const swiperData = await getSlideSwiper()
  return (
    <div className={styles.slidePanel}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full"
        spaceBetween={0}
        slidesPerView={1}
        speed={2000}
        pagination={{ clickable: true }}
        navigation={false}
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        {swiperData &&
          swiperData.map((swiper: Swiper) => {
            return (
              <SwiperSlide key={swiper.id}>
                <Slide {...swiper} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default SlidePanel;
