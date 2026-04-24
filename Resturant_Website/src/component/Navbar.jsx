import React from 'react'

import { FaShoppingCart } from "react-icons/fa";
import Darkmode from './Darkmode';

 

const Navbar = () => {
  return (
    <>
    <div className="shadow bg-white dark:bg-gray-900 dark:text-white duration-200 py-3 sm:py-0">
        <div className="container">
            <div className="flex justify-between items-center">
                <div className="">
                    <a href="#" className='flex text-2xl sm:text-3xl font-bold items-center gap-2'>
                    <img src="/Logo.png" alt="Logo" className='w-14  ml-3' />
                    Tastey
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <div className="">
                        <Darkmode/>
                    </div>
                    <ul className='sm:flex gap-4 hidden '>
                        <li>
                            <a href="#" className='inline-block py-4 px-4 hover:text-[#ff9c01]'>Home</a>
                        </li>
                        <li>
                            <a href="#" className='inline-block py-4 px-4 hover:text-[#ff9c01]'>About</a>
                        </li>
                        <li>
                            <a href="#" className='inline-block py-4 px-4 hover:text-[#ff9c01]'>Contact</a>
                        </li>
                    </ul>
                    
                    <button className="bg-[#ff9c01] text-white px-4 py-1 rounded-full sm:hidden hover:scale-105 duration-300 flex items-center gap-2">
                        Order
                        <FaShoppingCart
                        className='text-xl text-white drop-shadow-sm cursor-pointer'
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
