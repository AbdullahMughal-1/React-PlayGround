import React from 'react'
import bg from "../../assets/Vector.png"
import food from "../../assets/biryani2.png"
import food1 from "../../assets/biryani3.png"
import food2 from "../../assets/biryani5.png"

const ImageList =[
    {
        id:1,
        img:food,
    },
     {
        id:2,
        img:food1,
    },
     {
        id:3,
        img:food2,
    },
];

const bgStyle={
    backgroundImage:`url(${bg})`,
    backgroundPosition:"Center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    width:"100%",
    height:"100%",
}

const Hero = () => {
    const [imageId, setimageId] = React.useState(food1)
  return (
    <div
    style={bgStyle}
    className="min-h-[550px] sm:min-h-[600px]
    bg-gray-100 dark:bg-gray-950 dark:text-white
    duration-200 flex justify-center items-center"
    >
     <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* text content section */}
        <div className="flex flex-col justify-center gap-4 
         pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1
        ">
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                Welcome to the Tastey Zone
            </h1>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, veniam natus. Ad, dolorem ducimus ullam aliquam corrupti a dicta reprehenderit.
            </p>
            <div className="bg-[#ff9c01] px-4 py-2 rounded-full hover:scale-150
            duration w-fit">
                <button className="">Order Now</button>
            </div>

        </div>

        {/* image section */}
        <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450]
        flex justify-center items-center relative">
            {/* main image section */}
            <div className="flex justify-center items-center h-[300px]
            sm:h-[450px] overflow-hidden">
                <img 
                src={imageId} alt=""
                className="w-[300px] sm:w-[450px] mx-auto spin" />
            </div>
            {/* List of images section - Fixed positioning */}
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[10px] lg:-right-10 bg-white/30 rounded-full">
                {ImageList.map((item) => (
                    <img 
                    key={item.id}
                    src={item.img} 
                    onClick={() => setimageId(item.img)}
                    alt="pic"
                    className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200 cursor-pointer"   
                    />
                ))}
            </div>
        </div>
        </div>
     </div>
    </div>
  )
}

export default Hero