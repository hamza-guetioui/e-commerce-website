"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";

import "swiper/css/bundle";

import styles from "./HeroStyles.module.css";

function Slidebar() {
  return (
    <div className={styles.sildeBox}>
      <Swiper
        modules={[Autoplay, Pagination]}
        className="h-full w-full"
        spaceBetween={0}
        slidesPerView={1}
        speed={3000}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <Image
            src="/images/clothes.webp"
            alt="amazigh-clothes"
            width={945}
            height={568}
            className={styles.boxImage}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 px-8 lg:mt-4"
            style={{ maxWidth: "70%" }}
          >
            <h1 className={styles.slideboxTitle}>Traditional Amazigh Dress</h1>
            <p className={styles.slideBoxDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt
              vel at reiciendis numquam consequuntur quas, nobis dolorem beatae
              provident? Nam, sed dolor at neque distinctio in esse temporibus.
            </p>
            <button className={styles.boxButton}>Discover Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/jewelry.webp"
            alt="amazigh-clothes"
            width={945}
            height={568}
            className={styles.boxImage}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 px-8 lg:mt-4"
            style={{ maxWidth: "70%" }}
          >
            <h1 className={styles.slideboxTitle}>Traditional Amazigh Dress</h1>
            <p className={styles.slideBoxDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt
              vel at reiciendis numquam consequuntur quas, nobis dolorem beatae
              provident? Nam, sed dolor at neque distinctio in esse temporibus.
            </p>
            <button className={styles.boxButton}>Discover Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/shoes.webp"
            alt="amazigh-clothes"
            width={945}
            height={568}
            className={styles.boxImage}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 px-8 lg:mt-4"
            style={{ maxWidth: "70%" }}
          >
            <h1 className={styles.slideboxTitle}>Traditional Amazigh Dress</h1>
            <p className={styles.slideBoxDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt
              vel at reiciendis numquam consequuntur quas, nobis dolorem beatae
              provident? Nam, sed dolor at neque distinctio in esse temporibus.
            </p>
            <button className={styles.boxButton}>Discover Now</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slidebar;
