import React from "react";
import Heading from "../Heading/Heading";
import fruits from "../../assets/fruits-and-veggies.png";
import seafood from "../../assets/meat-and-seafood.png";
import dairy from "../../assets/dairy-and-eggs.png";
import Button from "../Button/button";

// 1. Move the data array above the component
const catagoryData = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crips vegetables.",
    image: fruits,
  },
  {
    id: 2,
    title: "Dairy and Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yougurt to artisanal cheeses.",
    image: dairy,
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from freah cuts, marinated options, and more.",
    image: seafood,
  },
];

const Catagory = () => {
  // 2. Map through the correct variable name (catagoryData)
  const renderCards = catagoryData.map((card) => {
    return (
      // 3. Added the required 'key' prop
      <div key={card.id} className="lg:flex-1 basis-[300px] mx-auto">
        <div className=" relative min-h-[25vh] w-full -mb-10">
          <img src={card.image} className="absolute bottom-0" />
        </div>

        <div className="bg-zinc-100 pt-11 p-8 rounded-xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
          <Button content="See All" />
        </div>
      </div>
    );
  });

  return (
    <section className="max-w-[1400px] mx-auto px-10">
      <div className="py-18">
        <Heading highlight="Shop" heading="by Category" />

        {/* category cards */}
        <div className="flex flex-wrap gap-10 md:mt-14 ">{renderCards}</div>
      </div>
    </section>
  );
};

export default Catagory;
