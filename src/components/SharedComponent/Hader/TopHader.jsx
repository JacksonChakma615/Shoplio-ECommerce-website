import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const TopHader = () => {
  return (
    <div className="bg-[#F8F8FB] py-2  ">
      <div className="flex items-center justify-between container mx-auto px-24 ">
        {/* call or wp section */}
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <FiPhoneCall />
            <p className="text-[12px]  ">01608601230</p>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp />
            <p className="text-[12px] ">01608601230</p>
          </div>
        </div>
        {/*  */}
        <div className="">
          <p className="text-[12px] ct ">
            World's Fastest Online Shopping Destination
          </p>
        </div>
        <div className="text-[12px] flex gap-5 ct items-center">
          <p>Help?</p>
          <p> Trac Order?</p>
          <p> English</p>
          <p> Concact us</p>
        </div>
      </div>
    </div>
  );
};

export default TopHader;
