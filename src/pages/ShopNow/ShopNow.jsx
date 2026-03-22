import React, { useState } from "react";
import useHook from "../../CustomHooks/useHook";
import ProductsCard from "../../components/SharedComponent/ProductsCard";

const ShopNow = () => {
  const { products, categorys } = useHook();

  const [id, setId] = useState(null);
  const [width, setwidth] = useState(null);

  // category select
  const handelClik = (newId) => {
    setId(id === newId ? null : newId); // toggle
  };

  // width select
  const handelClikwIdth = (w) => {
    setwidth(width === w ? null : w); // toggle
  };

  // clear all filter
  const handleClear = () => {
    setId(null);
    setwidth(null);
  };

  // filter logic
  const filterData = products.filter((p) => {
    const matchCategory = id ? p.categoryId === id : true;
    const matchWidth = width ? p.width === width : true;
    return matchCategory && matchWidth;
  });

  return (
    <div>
      <div className="grid gap-8 grid-cols-12 container mx-auto mt-12 px-4 md:px-10 lg:px-24">
        
        {/* sidebar */}
        <div className="col-span-3">
          <div className="border border-gray-200 p-4 rounded-md">

            {/* header + clear */}
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold">Filters</p>
              <button
                onClick={handleClear}
                disabled={!id && !width}
                className="text-xs bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 disabled:opacity-50"
              >
                Clear
              </button>
            </div>

            {/* Category */}
            <p className="border-b border-gray-200 pb-2 mb-3 font-medium">
              Category
            </p>

            {categorys.map((category) => (
              <div
                key={category.id}
                className="flex gap-2 items-center mb-2"
              >
                <input
                  type="checkbox"
                  checked={id === category.id}
                  onChange={() => handelClik(category.id)}
                />

                <p
                  className="cursor-pointer"
                  onClick={() => handelClik(category.id)}
                >
                  {category.name}
                </p>
              </div>
            ))}

            {/* Width */}
            <div className="mt-8">
              <p className="border-b border-gray-200 pb-2 mb-3 font-medium">
                Width
              </p>

              {[...new Set(products.map((p) => p.width))].map((w) => (
                <div
                  key={w}
                  className="flex gap-2 items-center mb-2"
                >
                  <input
                    type="checkbox"
                    checked={width === w}
                    onChange={() => handelClikwIdth(w)}
                  />

                  <p
                    className="cursor-pointer"
                    onClick={() => handelClikwIdth(w)}
                  >
                    {w}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* products */}
        <div className="col-span-9">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterData.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShopNow;