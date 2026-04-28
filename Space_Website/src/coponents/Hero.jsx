import React from 'react'
import moon from "../assets/moon.png"

const Hero = () => {
  return (
    <div className='bg-black/20 h-full text-white relative z-50'>
        <div className="h-full flex justify-center items-center p-4">
            <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='space-y-4 lg:pr-36'>
                    <h1 className='uppercase text-5xl font-bold'>Orbit The Earth</h1>
                    <p className=""> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus labore ducimus quibusdam soluta iste omnis sed nisi consectetur consequuntur suscipit reprehenderit neque sit repellendus aliquid, sapiente, autem velit. Voluptas hic autem ducimus a perferendis odio porro possimus officia labore dolorum.</p>
                    <button
                    className='bg-blue-400 text-white hover:bg-blue-500 px-4 py-2 rounded-md duration-200 cursor-pointer '>Learn More</button>
                </div>
                <div className=""></div>
            </div>
        </div>
      <img src={moon} alt=""
      className='absolute right-0 bottom-0 w-full brightness-50 z-10 ' />
      <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from to-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px] "></div>
    </div>
  )
}

export default Hero
