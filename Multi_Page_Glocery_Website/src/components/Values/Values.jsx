import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import basket from "../../assets/basket-full-vegetables.png";

const value = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the reader",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the reader",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Saftey",
    para: "It is a long established fact that a reader will be distracted by the reader",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "It is a long established fact that a reader will be distracted by the reader",
    icon: <FaSeedling />,
  },
];



const Values = () => {

  const leftValues= value.slice(0,2).map(item=>{
    return(
      <div className="flex md:flex-row-reverse items-center gap-5">
        <div className="">
          <span className="flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full text-3xl text-white" >{item.icon}</span>
        </div>

        <div className="md:text-right">
          <h3 className="text-zinc-800 text-2xl font-bold ">{item.title}</h3>
          <p className="text-zinc-600 mt-2" >{item.para}</p>
        </div>

      </div>
    )
  })

const RightValues= value.slice(2).map(item=>{
    return(
      <div className="flex items-center gap-5">
        <div className="">
          <span className="flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full text-3xl text-white" >{item.icon}</span>
        </div>

        <div className="" >
          <h3 className="text-zinc-800 text-2xl font-bold ">{item.title}</h3>
          <p className="text-zinc-600 mt-2" >{item.para}</p>
        </div>

      </div>
    )
  })

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Values" />

        <div className="flex md:gap-10 gap-15 items-center mt-15 md:flex-row flex-col">
          {/* left values  */}
          <div className="md:min-h-100 gap-15 flex flex-col  justify-between">
            {leftValues}
          </div>



          <div className="w-1/2 hidden md:flex">
            <img src={basket} />
          </div>



          {/* Right values  */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {RightValues}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Values;
