import React from "react";
import Image from "next/image";

interface classProp extends React.HtmlHTMLAttributes<HTMLDivElement> {}

function ExploreSection({ className }: classProp) {
  return (
    <div className={className}>
      <div className="relative w-full h-3/6">
        <Image
          src="/images/shoes.webp"
          alt="amazigh-shoes"
          width={1000}
          height={560}
          className="hero-bar"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 p-8 mt-4"
          style={{ maxWidth: "70%" }}
        >
          <h1 className="font-black text-3xl leading-8 mb-2">
            {"Men's Shoes"}
          </h1>
          <p className="font-bold text-base leading-">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt
          </p>
          <button className="button">Discover Now</button>
        </div>
      </div>
      <div className="relative w-full h-3/6">
        <Image
          src="/images/jewelry.webp"
          alt="amazigh-jewelry"
          width={1000}
          height={560}
          className="hero-bar"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 p-8 mt-4"
          style={{ maxWidth: "70%" }}
        >
          <h1 className="font-black text-3xl leading-8 mb-2">
            {"Women's Jewelry"}
          </h1>
          <p className="font-bold text-base leading-">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt
          </p>
          <button className="button">Discover Now</button>
        </div>
      </div>
    </div>
  );
}

export default ExploreSection;
