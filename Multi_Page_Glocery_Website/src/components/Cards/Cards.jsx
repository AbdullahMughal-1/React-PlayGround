import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/button'

const Cards = ({image, name, price}) => {
  return (
    <div className='bg-zinc-100 p-5 rounded-xl'>
        
        {/* card icons  */}
        <div className="flex  justify-between ">
            <span className='text-2xl text-zinc-300'>  <FaHeart/></span>
            <button className='bg-gradient-to-b from-orange-400 to bg-orange-500 text-xl px-4 py-3 rounded-lg'>
                <FaPlus/>
            </button>
</div>

            {/* card img */}
            <div className="w-full h-50">
                <img src={image} className='w-full h-full mx-auto  object-contain'  />
            </div>



            {/* card content  */}
            <div className="text-center ">
                <h3 className='text-xl font-semibold '>{name}
                </h3>
                <p className='text-lg font-bold mt-4 mb-3'>${price.toFixed(2)}</p>
                <Button content="Shop Now"/>
            </div>
        
      
    </div>
  )
}

export default Cards
