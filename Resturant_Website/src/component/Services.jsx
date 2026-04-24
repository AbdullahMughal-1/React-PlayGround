
import React from 'react'
import Img2 from "../assets/biryani2.png"


const ServicesData=[
  {
    id:1, 
    img:Img2,
    name:"Biryani",
    discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, velsit amet, consectetur adipisicing elit. Distinctio, vel?"
  },
  {
    id:2, 
    img:Img2,
    name:"Chiken kari",
    discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, vel sit amet, consectetur adipisicing elit. Distinctio, vel? "
  },
  {
    id:3, 
    img:Img2,
    name:"cold cofee",
    discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, vel sit amet, consectetur adipisicing elit. Distinctio, vel?"
  },
]

const Services = () => {
  return (
    <>
    <div className="py-10">
        <div className="container">
            <div className="text-center mb-20 max-w-[400px]
            mx-auto">
              <p className="text-sm bg-clip-text text-transparent bg-[#ff9c01]">
                Our Services
              </p>
              <h1 className="text-3xl font-bold">Services</h1>
              <p className='text-xs text-gray-400'>
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, repudiandae corporis. Ipsum soluta odit itaque. Voluptas dolore voluptatibus officiis commodi.
              </p>
            </div>
            <div className="">
              <div className="">
                {ServicesData.map (({id, img, name,discription,})=>{
                  return(
                    <div className="" key={id}>
                      <div className="">
                        <img src={img} alt="" />
                      </div>
                      <div className="">
                        <h1 className='text-xl font-bold'>{name}</h1>
                        <p className='text-gray-500 text-sm line-clamp-2'>{discription}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services
