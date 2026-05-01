import React from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { useState } from "react";

const Navbar = () => {

const [showMenu, setshowMenu] = useState(false)

const ToggleMenu= ()=>{
  setshowMenu(!showMenu)
}

  return (
    <header className="bg-white fixed top-0 left-0 right-0">
      <nav className="flex justify-between md:h-[14vh] h-[10vh] items-center px-10 max-w-[1400px]  mx-auto">
        <a href="#" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>

        <ul className="flex items-center gap-x-15 hidden md:flex ">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 inline-block hover:scale-125 transition-all duration"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 inline-block hover:scale-125 transition-all duration"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 inline-block hover:scale-125 transition-all duration"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 inline-block hover:scale-125 transition-all duration"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-x-5 ">
          <div className="md:flex hidden p-1 border-2 border-orange-500 rounded-full ">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="search..."
              className="flex-1 h-[4vh] px-3
            focus:outline-none"
              autoComplete="off"
            />
            <button
              className="text-white  w-10 h-10 rounded-full flex items-center justify-center text-xl
             bg-gradient-to-b from-red-400 to-orange-500 cursor-pointer  "
            >
              <IoSearch />
            </button>
          </div>

          <a href="#" className="text-2xl text-zinc-800 hover:text-orange-500">
            <GoHeartFill />
          </a>
          <a href="#" className="text-2xl text-zinc-800 hover:text-orange-500">
            <HiShoppingBag />
          </a>

          <a href="#" className="text-zinc-800 text-3xl md:hidden" onClick={ToggleMenu}>
            {showMenu ? <TbMenu3/> : <TbMenu2 /> }
            
          </a>
        </div>

        {/* Mobile Seciton */}
  <ul className={`flex flex-col items-center gap-x-15 gap-y-11 md:hidden bg-orange-500/15 backdrop-blur-xl p-10 absolute top-36 -left-full transform -translate-x-1/2 rounded-xl transition-all duration-500 ${showMenu ? "left-1/2" : ""}`  }  >
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 inline-block hover:scale-125 transition-all duration"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 inline-block hover:scale-125 transition-all duration"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 inline-block hover:scale-125 transition-all duration"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 inline-block hover:scale-125 transition-all duration"
            >
              Contact Us
            </a>
          </li>
          <li className="flex md:hidden p-1 border-2 border-orange-500 rounded-full ">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="search..."
              className="flex-1 h-[4vh] px-3
            focus:outline-none"
              autoComplete="off"
            />
            <button
              className="text-white  w-10 h-10 rounded-full flex items-center justify-center text-xl
             bg-gradient-to-b from-red-400 to-orange-500 cursor-pointer  "
            >
              <IoSearch />
            </button>
          </li>
        </ul>

        
      </nav>
    </header>
  );
};

export default Navbar;
