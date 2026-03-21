import React from "react";
import { PiContactlessPayment } from "react-icons/pi";
import { AiFillBank } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

const Support = () => {
  const features = [
    {
      id: 1,
      title: "Free Shipping",
      subtitle: "Free shipping on all US order or order above $200",
      icon: <PiContactlessPayment className="text-4xl cp mx-auto" />,
    },
    {
      id: 2,
      title: "24x7 Support",
      subtitle: "Contact us 24 hours a day, 7 days a week",
      icon: <AiFillBank className="text-4xl cp mx-auto" />,
    },
    {
      id: 3,
      title: "30 Days Return",
      subtitle: "Simply return it within 30 days for an exchange",
      icon: <IoCartOutline className="text-4xl cp mx-auto" />,
    },
    {
      id: 4,
      title: "Payment Secure",
      subtitle: "Secure payment processing available 24/7",
      icon: <BiSupport className="text-4xl cp mx-auto" />,
    },
  ];

  return (
    <div className="container mx-auto px-24 py-10">
      {/* grid layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {features.map((f) => (
          <div key={f.id} className="p-6 bg-gray-100 rounded-lg">
            {/* icon */}
            <div>{f.icon}</div>

            {/* title */}
            <h3 className="font-semibold mt-4">{f.title}</h3>

            {/* subtitle */}
            <p className="text-sm text-gray-500 mt-2">{f.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
