import React from "react";
import SectionHading from "../../../components/SharedComponent/SectionHading";
import useHook from "../../../CustomHooks/useHook";
import ProductsCard from "../../../components/SharedComponent/ProductsCard";


const NewProducts = () => {
    const { products } = useHook();
  return (
    <div>
      <div className="container mx-auto px-24">
        <div>
          <SectionHading
            discription={"Don't wait. The time will never be just right."}
            heading={"Day off "}
            colorheading={"  The deal"}></SectionHading>
        </div>
        {/* newProducts section */}
        <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {
                products.slice(-4).map(p=><ProductsCard product={p}></ProductsCard>)
            }
        </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
