import React from "react";

const SectionHading = ({ heading, colorheading, discription }) => {
  return (
    <div >
      <div>
        <h3 className="text-4xl text-gray-700 font-semibold ">
          {heading} <span className="cp">{colorheading}</span>
        </h3>
        <p className="ts">{discription}</p>
      </div>
    </div>
  );
};

export default SectionHading;
