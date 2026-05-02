import React from "react";
import Grocery from "../../assets/grocery.png";
import Button from "../Button/button";

const Hero = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 flex  md:flex-row flex-col items-center  min-h-[80vh] md:pt-1 pt-36 -pb ">
        <div className="flex-1 ">
          <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full ">
            Export Best Quality...
          </span>
          <h1 className="md:text-6xl/18 font-bold mt-4  text-4xl/12  ">
            Tasty and Orgenic <span className="text-orange-500">Fruits</span> &{" "}
            <span className="text-orange-500">Veggies</span>
            <br /> In Your City{" "}
          </h1>
          <p className="text-zinc-600 text-lg max-w-[530px] mb-10">
            Bread for a high content of beneficial substance. Our products are
            all fresh and healthy
          </p>
          <Button content="Shop Now" />
        </div>

        {/* img section */}
        <div className="flex-1">
          <img src={Grocery} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
