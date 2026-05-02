import React from "react";

const Heading = (props) => {
  return (
    <div className="mx-auto w-fit">
      <h2 className="md:text-5xl text-2xl font-bold">
        {" "}
        <span className="text-orange-500">{props.highlight} </span>
       {props.heading}
      </h2>
      <div className="md:w-36 w-18  md:mt-6 mt-2  h-1 bg-orange-300 ml-auto"></div>
    </div>
  );
};

export default Heading;
