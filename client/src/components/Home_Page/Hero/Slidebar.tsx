"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle";

import styles from "./HeroStyles.module.css";

function Slidebar() {
  return (
    <div className={styles.sildeBox}>
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
        <SwiperSlide>
          <Image
            src="/images/clothes.webp"
            priority={true}
            alt="amazigh-clothes"
            width={945}
            height={568}
            className={styles.boxImage}
          />
          <div className="absolute top-1/2 -translate-y-1/2 px-8 lg:mt-4 max-w-[60%]">
            <h1 className={styles.slideboxTitle}>Traditional Amazigh Dress</h1>
            <p className={styles.slideBoxDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt
              vel at reiciendis numquam consequuntur quas, nobis dolorem beatae
              provident.
            </p>
            <button className={styles.boxButton}>Discover Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/jewelry.webp"
            priority={true}
            alt="amazigh-clothes"
            width={945}
            height={568}
            className={styles.boxImage}
          />
          <div className="absolute top-1/2 -translate-y-1/2 px-8 lg:mt-4 max-w-[60%]">
            <h1 className={styles.slideboxTitle}>Traditional Amazigh Dress</h1>
            <p className={styles.slideBoxDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt
              vel at reiciendis numquam consequuntur quas, nobis dolorem beatae
              provident.
            </p>
            <button className={styles.boxButton}>Discover Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/shoes.webp"
            priority={true}
            alt="amazigh-clothes"
            width={945}
            height={568}
            className={styles.boxImage}
          />
          <div className="absolute top-1/2 -translate-y-1/2 px-8 lg:mt-4 max-w-[60%]">
            <h1 className={styles.slideboxTitle}>Traditional Amazigh Dress</h1>
            <p className={styles.slideBoxDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt
              vel at reiciendis numquam consequuntur quas, nobis dolorem beatae
              provident.
            </p>
            <button className={styles.boxButton}>Discover Now</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slidebar;
