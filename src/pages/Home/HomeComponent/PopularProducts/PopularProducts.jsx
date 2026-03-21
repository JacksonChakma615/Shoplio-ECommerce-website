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
    <div className="container mx-auto h-160  px-24 py-10">
      {/* categorys section */}
      <div className="flex justify-between items-center">
        <SectionHading
          heading={"popular"}
          colorheading={"Products"}
          discription={
            "Shop online for new arrivals and get free shipping!"
          }></SectionHading>
        <div className="flex gap-8">
          {categorys.map((category) => (
            <div>
              <p
                onClick={() => HandleCategoryId(category.id)}
                className="cursor-pointer">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* products  section */}
      <div>
        <div className="flex grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-2 mt-12">
          {filterProduct
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 8)
            .map((product) => (
              <ProductsCard product={product}></ProductsCard>
            ))}
        </div>
      </div>
      <div>
        <div className="justify-center flex">
          <Link to="/shop">
            <div className="flex justify-center items-center gap-2 bgp py-3 rounded-md w-60 text-white font-semibold cursor-pointer ">
              <p>View ALL Products</p>
              <GrView />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
