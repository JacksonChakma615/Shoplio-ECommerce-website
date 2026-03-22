import React from "react";
import useHook from "../../CustomHooks/useHook";
import { useParams } from "react-router";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

const SingleProductPage = () => {
  const { id } = useParams();
  const { products } = useHook();

  const product = products.find((p) => p.id === Number(id));

  return (
    <div className="container mx-auto px-24 py-16">
      {product && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* left image */}
          <div className="bg-gray-100 rounded-xl p-10">
            <img className="w-full object-contain" src={product.image} alt="" />
          </div>

          {/* right content */}
          <div>
            {/* category */}
            <p className="text-gray-400">{product.categoryName}</p>

            {/* title */}
            <h1 className="text-4xl font-bold my-2">{product.name}</h1>

            {/* rating */}
            <div className="flex items-center gap-3 my-3">
              <div className="flex text-orange-500">
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
              </div>
              <p className="text-gray-500">Total Rating: {product.rating}</p>
            </div>

            {/* price */}
            <div className="flex items-center gap-4 my-4">
              <p className="text-2xl font-semibold flex items-center gap-1">
                {product.price}
                <TbCurrencyTaka />
              </p>

              <p className="line-through text-gray-400 flex items-center gap-1">
                {product.mrp}
                <TbCurrencyTaka />
              </p>
            </div>

            {/* description */}
            <p className="text-gray-500 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            {/* extra info */}
            <p className="mb-1">
              <span className="font-semibold">SKU:</span> WH12
            </p>
            <p className="mb-1">
              <span className="font-semibold">Stock:</span> In Stock
            </p>
            <p className="mb-4">
              <span className="font-semibold">Closure:</span> Hook & Loop
            </p>

            {/* size */}
            <div className="flex gap-2 mb-6">
              {["250g", "500g", "1kg", "2kg"].map((s) => (
                <button
                  key={s}
                  className="border px-3 py-1 rounded hover:bg-gray-200">
                  {s}
                </button>
              ))}
            </div>

            {/* quantity + button */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded px-4 py-2 gap-4">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              <button className="bg-[#5caf90] text-white px-6 py-2 rounded">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
