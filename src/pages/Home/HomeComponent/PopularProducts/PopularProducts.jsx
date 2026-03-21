import React, { useState } from "react";
import SectionHading from "../../../../components/SharedComponent/SectionHading";
import useHook from "../../../../CustomHooks/useHook";
import ProductsCard from "../../../../components/SharedComponent/ProductsCard";
import { GrView } from "react-icons/gr";
import { Link } from "react-router";

const PopularProducts = () => {
  const { products, categorys } = useHook();
  const [categoryId, setcategoryId] = useState();

  const HandleCategoryId = (id) => {
    setcategoryId(id);
  };

  const filterProduct = categoryId
    ? products.filter((p) => p.categoryId === categoryId)
    : products;

  return (
    <div className="container mx-auto min-h-[640px] px-4 md:px-10 lg:px-24 py-10">
      
      {/* categorys section */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <SectionHading
          heading={"popular"}
          colorheading={"Products"}
          discription={"Shop online for new arrivals and get free shipping!"}
        />

        <div className="flex gap-6 flex-wrap">
          {categorys?.map((category) => (
            <p
              key={category.id}
              onClick={() => HandleCategoryId(category.id)}
              className={`cursor-pointer ${
                categoryId === category.id
                  ? "text-[#5caf90] font-semibold"
                  : ""
              }`}
            >
              {category.name}
            </p>
          ))}
        </div>
      </div>

      {/* products section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {filterProduct
          ?.sort((a, b) => b.rating - a.rating)
          .slice(0, 8)
          .map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
      </div>

      {/* view all button */}
      <div className="flex justify-center mt-10">
        <Link to="/shop">
          <div className="flex items-center gap-2 bg-[#5caf90] py-3 px-6 rounded-md text-white font-semibold cursor-pointer hover:opacity-90 transition">
            <p>View ALL Products</p>
            <GrView />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PopularProducts;