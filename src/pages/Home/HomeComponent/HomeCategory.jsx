import React, { useEffect, useState } from "react";

const HomeCategory = () => {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);

  return (
    <div className="container mx-auto px-24">
      
      {/* grid use করো (flex না) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {categorys.map((category) => (
          <div
            key={category.id}
            className="bg-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition"
          >
            {/* image */}
            <img
              className="w-16 mx-auto mb-4"
              src={category.image}
              alt={category.name}
            />

            {/* name */}
            <h2 className="text-lg font-semibold text-gray-700">
              {category.name}
            </h2>

            {/* items */}
            <p className="text-sm text-gray-400">
              {category.items} Items
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default HomeCategory;