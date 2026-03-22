import React from "react";
import { PiTruckLight } from "react-icons/pi";
import { AiOutlineBank } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

const Services = () => {
  const data = [
    {
      id: 1,
      title: "Free Shipping",
      desc: "Free shipping on all US order or order above $200",
      icon: <PiTruckLight className="text-4xl text-[#5caf90]" />,
    },
    {
      id: 2,
      title: "24x7 Support",
      desc: "Contact us 24 hours a day, 7 days a week",
      icon: <AiOutlineBank className="text-4xl text-[#5caf90]" />,
    },
    {
      id: 3,
      title: "30 Days Return",
      desc: "Simply return it within 30 days for an exchange",
      icon: <IoCartOutline className="text-4xl text-[#5caf90]" />,
    },
    {
      id: 4,
      title: "Payment Secure",
      desc: "Secure payment processing available 24/7",
      icon: <BiSupport className="text-4xl text-[#5caf90]" />,
    },
  ];

  return (
    <div className="container mx-auto px-24 py-16">
      
      {/* heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Our <span className="text-[#5caf90]">Services</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Customer service should not be a department. It should be the entire company.
        </p>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-500 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Services;