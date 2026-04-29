import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div
    data-aos="fade-down"
    className="fixed top-0 right-0 w-full z-[99] bg-black/10 backdrop-blur-sm py-4 sm:py-4">
      <div className="ml-16 mr-14">
        <div className="flex justify-between items-center">
          <div className="flex text-white items-center gap-4 font-bold text-2xl ">
            <img src={Logo} alt="" className="w-10" />
            <span>Space-X</span>
          </div>
          <div className="text-white hidden md:block">
            <ul className="flex items-center gap-6 text-xl py-4 sm:py-0">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Galaxy</a>
              </li>
              <li>
                <a href="#">Satelite</a>
              </li>
            </ul>
          </div>
          <div className=" ">
            <button className="text-white border-2 border-white px-3 rounded-md py-1">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
