import React from 'react';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import SliderImport from "react-slick";

const Slider = SliderImport.default || SliderImport;

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, sed labore recusandae qui vitae architecto.",
    img: img1,
  },
  {
    id: 2,
    name: "Good",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, sed labore recusandae qui vitae architecto.",
    img: img2,
  },
  {
    id: 3,
    name: "Abby",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, sed labore recusandae qui vitae architecto.",
    img: img3,
  }
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <>
      <div className="py-10" data-aos="fade-up" data-aos-duration="400">
        <div className="">
          <div className="text-center mb-5 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-[#5a503f]">
              Testimonial
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className='text-xs text-gray-400'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, repudiandae corporis. Ipsum soluta odit itaque. Voluptas dolore voluptatibus officiis commodi.
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-duration="300" className="max-w-[600px] mx-auto">
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div className="my-6" key={id}>
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow mx-4 rounded-xl dark:bg-gray-800 bg-[#ff9c01]/10 relative p-4">
                      <img 
                        src={img} 
                        alt={name} 
                        className='rounded-full block mx-auto w-20 h-20 object-cover'
                      />
                      <p className="text-gray-500 text-sm">{text}</p>
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-black/10 text-9xl font-serif absolute top-0 right-4 dark:text-gray-400 pointer-events-none">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;