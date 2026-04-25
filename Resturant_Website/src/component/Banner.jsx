import React from 'react'
import Food1 from "../assets/biryani5.png"
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
   <>
   <div className="min-h-[550px] py-10  ">
    <div className="">
        <div
         data-aos="slide-up"
         data-aos-duration="300"
         className='container'
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* {image Section} */}
                <div className="">
                    <img src={Food1} alt=""
                    className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]"/>
                </div>
                {/* Text-content Section */}
                <div className="flex flex-col justify-center gap-6 sm:pt-0">
                    <h1 className="text-3xl sm:text-4xl font-bold">
                        Lorem, ipsum dolor.
                    </h1>
                    <p className="text-sm text-gray-500 tracking-wide leading-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iusto ullam molestiae libero eius atque. Praesentium quidem tempora molestias 
                        <br />
                        <br />
                        neque possimus? Voluptatum, atque facilis quisquam molestias laudantium nam similique repellendus. Veritatis odio ex deserunt nostrum labore corrupti nisi, odit explicabo perferendis officia fugit eum, nam omnis quidem mollitia assumenda amet!
                    </p>
                    <div className='flex gap-6'>
                        <div className="">
                            <GrSecure className="text-4xl h-20 w-20 shadow
                             p-5 rounded-full bg-violet-100 dark:bg-violet-400  "/>
                        </div>
                        <div className="">
                            <IoFastFood className="text-4xl h-20 w-20 shadow
                             p-5 rounded-full bg-orange-100 dark:bg-orange-400  "/>
                        </div>
                        <div className="">
                            <GiFoodTruck className="text-4xl h-20 w-20 shadow
                             p-5 rounded-full bg-green-100 dark:bg-green-400  "/>
                        </div>
                    </div>
                    <div className="">
                        <button className="bg-[#ff9c01] text-white px-6 py-3 rounded-full hover:scale-105 duration-200">
                            Order Now
                        </button>
                    </div>


                </div>


            </div>
           
        </div>
    </div>
   </div>
   </>
  )
}

export default Banner
