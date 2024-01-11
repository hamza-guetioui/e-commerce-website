import Image from "next/image";
import React from "react";

function OfferBox() {
  return (
    <div className="flex w-10/12 md:w-9/12 h-80 md:h-44 m-auto mb-12 flex-wrap md:flex-nowrap gap-4">
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full rounded-md overflow-hidden shadow-lg">
        <Image
          className="object-fit w-full h-full "
          src="/images/shoesOffer.jpg"
          alt="Offer Box"
          width={500}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
          height={300}
        />
        <div className="absolute w-1/2 right-0 top-1/2 -translate-y-1/2 ">
          <h3 className="text-lg mb-1 font-black cursor-pointer leading-5">
            Get Your Shoes Now On
            <span className="text-yellow-900 ">{" 15% "}</span>Discount
          </h3>
          <p                                          
            className="text-xs mb-1 leading-4"                                                  
          >                         
            We repair all brands of laptops, desktops and tablets. Our team
          </p>
          <button className="text-xs font-bold p-1 ml-1 border text-black">{"Let's Go"}</button>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full rounded-md overflow-hidden shadow-lg">
        <Image
          className="object-fit w-full h-full "
          src="/images/jewelryOffer.jpg"
          alt="Offer Box"
          width={500}
          height={300}
        />
        <div className="absolute w-1/2 right-0 top-1/2 -translate-y-1/2 ">
          <h3 className="text-lg mb-1 font-black cursor-pointer leading-5">
            Get Your Shoes Now On
            <span className="text-yellow-900 ">{" 15% "}</span>Discount
          </h3>
          <p
            className="text-xs mb-1 leading-4"
          >
            We repair all brands of laptops, desktops and tablets. Our team
          </p>
          <button className="text-xs font-bold p-1 ml-1 border text-black">{"Let's Go"}</button>
        </div>
      </div>
    </div>
  );
}

export default OfferBox;
