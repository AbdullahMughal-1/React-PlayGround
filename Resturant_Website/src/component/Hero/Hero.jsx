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
        <div className="">
            <h1>
                Welcome to the Tastey Zone
            </h1>

        </div>

        {/* image section */}
        <div className=""></div>
        </div>
     </div>
    </div>
  )
}

export default Hero
