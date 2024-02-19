import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <div className="flex-center md:w-10/12 m-auto  h-96">
      <Image
        src={"/images/about.jpg"}
        alt="about"
        width={500}
        height={300}
        className="w-2/6 h-full object-cover rounded-md"
      />
      <div>
        <h1 className="text-3xl md:text-7xl w-3/4 mx-auto font-black text-stone-300 ">About Us</h1>
        <p className="w-3/4 mx-auto mb-8 mt-1 text-base font-bold text-stone-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Done c diam
          lorium ipsum donec vulputate eros quis luctus fr iacsa. Quisque
          cursus, metus sed auctor imperdiet, risus leo venenatis est, vel
          faucibus sapien nibh eget orci. Pellentesque condimentum semper justo.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
