import React from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between h-[14vh] items-center px-10 max-w-[1400px] mx-auto">
        <a href="#" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>

        <ul className="flex items-center gap-x-15">
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Home</a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">About</a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Process</a>
          </li>  
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">Contact Us</a>
          </li>
        </ul>



        <div className="flex items-center gap-x-5 ">
          <div className="flex p-1 border-2 border-orange-500 rounded-full " >
            <input type="text" name="text" id="text" placeholder="search..."  className="flex-1 h-[4vh] px-3
            focus:outline-none"
            autoComplete="off" />
            <button className="text-white  w-10 h-10 rounded-full flex items-center justify-center text-xl
             bg-gradient-to-b from-red-400 to-orange-500 cursor-pointer  ">
              <IoSearch/>
            </button>
          </div>


          <a href="#" className="text-2xl text-zinc-800 hover:text-orange-500">
            <GoHeartFill/>
          </a>
          <a href="#" className="text-2xl text-zinc-800 hover:text-orange-500">
            <HiShoppingBag/>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
