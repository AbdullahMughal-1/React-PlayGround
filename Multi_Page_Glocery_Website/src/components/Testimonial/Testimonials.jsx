import React from "react";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Customers" heading="Sayings" />

        <div className="py-5 flex justify-end gap-x-3">
          <button className=" text-2xl text-zinc-800 hover:bg-orange-500 duration-300 hover:text-white cursor-pointer   w-11 h-11 rounded-lg bg-zinc-100 flex  justify-center items-center">
            <IoIosArrowBack />
          </button>
          <button className=" text-zinc-800 hover:bg-orange-500 duration-300 hover:text-white cursor-pointer text-2xl w-11 h-11 rounded-lg bg-zinc-100 flex justify-center items-center">
            <IoIosArrowForward />
          </button>
        </div>

        <div className="bg-zinc-100 rounded-xl p-8">
            <div className="flex">

          <div className="w-16 h-1/6 rounded-full outline-2 outline-orange-500 outline-offset-4">
          <div className="">
            <h5 className="text-xl font-bold"></h5>
          </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
