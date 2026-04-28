import React from "react";
import { FaShuttleSpace, FaSpaceAwesome , FaReact} from "react-icons/fa6";
import gif from "../assets/gif.gif"

const ServiceData=[
    {
        title:"HST",
        content:"300-1500KM",
        description:"Used for astronomical observation capturing stunning images of the universe.",
        icon: <FaReact className="text-7xl"/>,
        aosDelay:"300",
    },
    {
         title:"GPS",
        content:"300-1500KM",
        description:"Part of the Global Positioning System (GPS) used for navigation.",
        icon: <FaShuttleSpace className="text-7xl"/>,
        aosDelay:"500",
    },
    {
         title:"ISS",
        content:"300-1500KM",
        description:"It's a habitable artificial satellite orbiting Earth and serves as a space enviroment reserch laboratory ",
        icon: <FaSpaceAwesome className="text-7xl"/>,
        aosDelay:"700",
    }
]



const Services = () => {
  return (
    <div className="bg-black text-white relative z-50">
      <div content="container">
        <div className="min-h-[400px]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                {
                    ServiceData.map((data, index) => (
                            <div
                            className="min-h-[180px] gap-2 flex flex-col justify-center items-center rounded-xl bg-sky-900/60
                            backdrop-blur-sm text-center text-2xl py-10 px-3 w-full lg:w-[300px] mx-auto  "
                            >
                                {data.icon}
                                <h1>{data.title}</h1>
                                <p>{data.content}</p>
                                <p className="text-sm" >{data.description}</p>
                            </div>
                        )
                    )
                }
            </div>
            <img src={gif} alt="" 
            className="h-[200px] w-full object-cover mix-blend-screen -translate-y-20
            relative z-[0]" />
        </div>
      </div>
    </div>
  );
};

export default Services;
