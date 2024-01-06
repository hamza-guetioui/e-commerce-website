import React from "react";
import Image from "next/image";

function Slidebar() {
  return (
    <div className="w-8/12 h-full">
      <div className="relative w-full h-full">
        <Image
          src="/images/clothes.webp"
          alt="amazigh-clothes"
          width={945}
          height={568}
          className="hero-bar"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 p-8 mt-4"
          style={{ maxWidth: "70%" }}
        >
          <h1 className="font-black text-5xl leading-12 mb-4">
            Traditional Amazigh Dress{" "}
          </h1>
          <p className="font-bold text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt
            vel at reiciendis numquam consequuntur quas, nobis dolorem beatae
            provident? Nam, sed dolor at neque distinctio in esse temporibus.
          </p>
          <button className="button">Discover Now</button>
        </div>
      </div>
    </div>
  );
}

export default Slidebar;
