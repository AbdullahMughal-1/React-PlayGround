import React from 'react'
import Button from '../Button/button'
import Bgfruits from "../../assets/fresh-fruits.png"

const Discount = () => {
  return (
    <section 
      className="bg-zinc-100 bg-right bg-contain bg-no-repeat " 
      style={{ backgroundImage: `url(${Bgfruits})` }}
    >
      <div className="md:py-20 md:bg-transparent bg-zinc-100 py-10 flex flex-col md:flex-row  max-w-[1400px] mx-auto px-6 md:px-10 :">
        
        {/* Discount Badge */}
        <span className="md:text-9xl text-5xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center ">
          20%
        </span>
        
        {/* Text Content */}
        <div className="w-full max-w-[700px]  md:text-left">
          <h3 className="md:text-6xl text-4xl sm:text-5xl lg:text-7xl text-zinc-800 font-bold">
            First Order Discount
          </h3>
          <p className="text-zinc-600 my-6">
            Enjoy an exclusive first order discount on our grocery website! 
            Shop fresh essentials and save big on your first purchase. 
            Fast delivery and quality guaranteed.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button content="Get a Discount" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discount
