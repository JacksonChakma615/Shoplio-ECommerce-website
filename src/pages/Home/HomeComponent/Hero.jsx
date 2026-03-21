import bg from "../../../assets/images/HERO-COVER.jpg";

const Hero = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="container h-[70vh]  bg-cover my-8  px-24 mx-auto">
        <div className=" flex  flex-col h-full justify-center items-start gap-2 ">
          <p className="cp text-2xl font-semibold">70% Off For This Winter</p>
          <h1 className="text-5xl font-semibold text-[#4b5966]">Bigest Sale For Winter <br/>Man & Woman</h1>
          <button className="btn bgp rounded-md text-white">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
