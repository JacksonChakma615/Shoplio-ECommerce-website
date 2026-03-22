import React from "react";
import img1 from "../../../assets/images/about.png";
import img2 from "../../../assets/images/about-2.png";
import img3 from "../../../assets/images/about-3.png";

const AboutHero = () => {
  return (
    <div className="container mx-auto px-24 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="grid grid-cols-2 gap-6">

          {/* big image */}
          <div className="row-span-2">
            <img
              src={img1}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* top right */}
          <div>
            <img
              src={img2}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* bottom right */}
          <div>
            <img
              src={img3}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

        </div>

        {/* RIGHT TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Who <span className="text-[#5caf90]">We Are?</span>
          </h2>

          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            WE’RE HERE TO SERVE ONLY THE BEST PRODUCTS FOR YOU.
            ENRICHING YOUR HOMES WITH THE BEST ESSENTIALS.
          </h3>

          <p className="text-gray-500 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          <p className="text-gray-500 mb-4">
            Lorem Ipsum has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>

          <p className="text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutHero;