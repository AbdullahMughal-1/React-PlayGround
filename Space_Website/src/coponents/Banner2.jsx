import React from "react";
import View from "../assets/View.jpg";

const Banner2 = () => {
  return (
    <div className="bg-black text-white pb-10 relative z-50 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 items-center">
         
          <div className="space-y-3 xl:pl-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800">
            <p  data-aos="fade-up"  className="text-sky-800 uppercase" >Our Mission</p>
            <h1  data-aos="fade-up" data-aos-delay="300" className="uppercase text-5xl" >Rapidcast</h1>
            <p  data-aos="fade-up" data-aos-delay="500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              nihil harum in quos doloremque recusandae possimus suscipit maxime
              aliquam ipsa ratione tempore, nemo reiciendis iste exercitationem
              porro doloribus quo? Error.
            </p>
            <button   data-aos="fade-up" data-aos-delay="700" className="primary-button">
              Learn More
            </button>
          </div>
           <div className=""  data-aos="zoom-in"  >
            <img src={View} alt="" className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
