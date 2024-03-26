import React from "react";
import styles from "./Styles.module.css"

function Logo() {
  return (
    <div className="text-center basis-full order-2 md:order-1 md:basis-auto">
      {/* <Image src="/assests/logo.jpg" alt="logo" width={30} height={30} className=" mr-1 rounded" /> */}
      <span className={`text-2xl font-semibold font-cursive [word-spacing:-5px] ${ styles.logoFont}`}>
        Bab Shop
      </span>
    </div>
  );
}

export default Logo;
