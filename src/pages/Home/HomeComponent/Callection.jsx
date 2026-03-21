import { Link } from "react-router";
import image1 from "../../../assets/images/12.jpg";
import image2 from "../../../assets/images/13.jpg";
import image3 from "../../../assets/images/14.jpg";

const Callection = () => {
  return (
    <div>
      <div className="container mx-auto px-24 flex justify-between my-20">
        <div
          className=" flex flex-col w-100 items-end px-8 py-8 "
          style={{ backgroundImage: `url(${image1})` }}>
          <h3 className="text-3xl text-white text-end  font-semibold ">
            Women's <br /> Collection
          </h3>
          <Link to="/shop">
            {" "}
            <button className="btn shadow-none  bgp"> Shop Now</button>
          </Link>
        </div>
        <div
          className=" flex flex-col w-100  items-end px-8 py-8 "
          style={{ backgroundImage: `url(${image2})` }}>
          <h3 className="text-3xl text-white text-end  font-semibold ">
            Children's <br /> Collection
          </h3>
          <Link to="/shop">
            {" "}
            <button className="btn shadow-none  bgp"> Shop Now</button>
          </Link>
        </div>
        <div
          className=" flex flex-col w-100  items-end px-8 py-8 "
          style={{ backgroundImage: `url(${image3})` }}>
          <h3 className="text-3xl text-white text-end  font-semibold ">
            Men's <br /> Collection
          </h3>
          <Link  to="/shop">
            {" "}
            <button className="btn shadow-none  bgp"> Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Callection;
