import React from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Free Shipping",
    description: "Free shipping available for orders within Morocco",
    image: "image1.svg",
  },
  {
    id: 2,
    title: "24/7 Customer Support",
    description: "Dedicated customer service available round the clock",
    image: "image2.svg",
  },
  {
    id: 3,
    title: "Fast & Secure checkout",
    description:
      "Secure, hassle-free payment process.",
    image: "image3.svg",
  },
  {
    id: 4,
    title: "Quality Guarantee",
    description:
      "Assured quality products backed by our satisfaction guarantee",
    image: "image4.svg",
  },
];

function FeatureShowcase() {
  return (
    <div className="flex-center flex-wrap gap-2 lg:flex-nowrap w-full px-10 py-2 ">
      {data.map(({ id, title, description, image }) => {
        return (
          <div key={id} className="flex items-center text-center flex-col basis-full sm:basis-[calc(50%-0.5rem)]  sm:text-left sm:flex-row lg:w-1/4 ">
            <Image
            className="sm:mr-3"
              src={`/assests/${image}`}
              alt="image"
              width={40}
              height={40}
            />
            <div>
              <h3 className="font-black " style={{fontFamily:"system-ui"}}>{title}</h3>
              <p className="text-xs">{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FeatureShowcase;
