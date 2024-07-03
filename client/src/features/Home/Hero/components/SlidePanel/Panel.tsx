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
interface SwiperItem {
    id: number;
    title: string;
    description: string;
    image: string;
    path: string;
    type: {
      id: number;
      name: string;
    };
  }
  
  interface PanelProps {
    swiperData: SwiperItem[];
}

interface Swiper {
    id: number;
    title: string;
    description: string;
    image : string;
    path: string;
    type: {
      id: number;
      name: string;
    }; 
  }


const Panel : React.FC<PanelProps> = ({ swiperData }) => {
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

export default Panel;
