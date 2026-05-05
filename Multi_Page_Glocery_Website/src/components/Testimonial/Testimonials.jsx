import React from "react";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import img1 from "../../assets/customer1.jpg";
import img2 from "../../assets/customer2.jpg";
import img3 from "../../assets/customer3.jpg";
import img4 from "../../assets/customer4.jpg";
import img5 from "../../assets/customer5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from "react-icons/fa";

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    Rating: "3",
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    image: img1,
  },
  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    Rating: "4",
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    image: img2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    profession: "Model",
    Rating: "5",
    para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable",
    image: img3,
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    Rating: "5",
    para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
    image: img4,
  },
  {
    id: 4,
    name: "Natcha Phongchai",
    profession: "Nutritionis",
    Rating: "4",
    para: "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
    image: img5,
  },
];

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Customers" heading="Sayings" />

        <div className="py-5 flex justify-end gap-x-3">
          <button className=" text-2xl text-zinc-800 hover:bg-orange-500 duration-300 hover:text-white cursor-pointer   w-11 h-11 rounded-lg bg-zinc-100 flex  justify-center items-center custom-prev">
            <IoIosArrowBack />
          </button>
          <button className=" text-zinc-800 hover:bg-orange-500 duration-300 hover:text-white cursor-pointer text-2xl w-11 h-11 rounded-lg bg-zinc-100 flex justify-center items-center custom-next">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper loop={true} navigation={{
            nextEl:".custom-next",
            prevEl:".custom-prev"
        }}
        breakpoints={{  
            640:{slidesPerView:1, spaceBetween: 20},
            768:{slidesPerView:2, spaceBetween: 20},
            1024:{slidesPerView:3, spaceBetween: 20}
    
    
    }}
        modules={[Navigation]} className="mySwiper">
          {review.map((item) => {
            return (
              <SwiperSlide className="bg-zinc-100 rounded-xl p-8">
                <div className="flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden ">
                    <img src={item.image} className="w-full h-full"  />
                  </div>
                  <div className="">
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex text-yellow-400 mt-2 text-xl gap-1">
                        {Array.from({length: item.Rating}, (_, index)=>(
<FaStar/>
                        ))}
                    </span>
                  </div>
                </div>

                <div className="mt-10 min-h-[15vh]">
                  <p className="text-zinc-600">
                    {item.para}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* <div className="bg-zinc-100 rounded-xl p-8">
          <div className="flex gap-5 items-center">
            <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 "></div>
            <div className="">
              <h5 className="text-xl font-bold">Name</h5>
              <p className="text-zinc-600">Profession</p>
              <span>stars</span>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-zinc-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              animi expedita eum enim optio dolore cumque harum quod laborum
              corrupti?
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
