import { Link } from "react-router";
import cover from "../../../assets/images/execulisive colloction.jpg";

const LatestExclusive = () => {
  return (
    <div className="py-16">
      <div
        className="h-[70vh] bg-cover bg-center relative rounded-xl overflow-hidden"
        style={{ backgroundImage: `url(${cover})` }}>
        {/* overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-10 lg:px-24 text-right">
            <p className="text-xl md:text-2xl text-white mb-3">30% off sale</p>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Latest Exclusive <br /> Summer Collection
            </h1>

            <Link to="/shop">
              {" "}
              <button className="mt-6 px-6 py-3 bg-[#5caf90] text-white rounded-md text-lg hover:opacity-90 transition">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestExclusive;
