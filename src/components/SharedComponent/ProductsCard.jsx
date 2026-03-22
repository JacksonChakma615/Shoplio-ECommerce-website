import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router";

const ProductsCard = ({ product }) => {
  return (
    <div>
      <div className="w-72  border border-gray-200 rounded-md ">
        <img className="w-72" src={product.image} alt="" />
        <Link to={`/shop/${product.id}`}>
          <div className="p-3 pl-5">
            <p className="text-gray-400">{product.categoryName}</p>
            <h3 className="font-semibold">{product.name}</h3>
            <div className="flex text-xl py-2 text-orange-500">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
            <div className="flex  gap-2">
              <p className="cp flex items-center ">
                {product.price}
                <p>
                  <TbCurrencyTaka />
                </p>
              </p>

              <p className="line-through flex items-center text-gray-400 ">
                {product.mrp}
                <TbCurrencyTaka />
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductsCard;
