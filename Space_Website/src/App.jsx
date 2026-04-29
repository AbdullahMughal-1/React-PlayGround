import React from "react";
import video from "./assets/Video.mp4";
import Navbar from "./coponents/Navbar";
import Hero from "./coponents/Hero";
import Services from "./coponents/Services";
import Banner from "./coponents/Banner";
import Banner2 from "./coponents/Banner2";
import Footer from "./coponents/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() =>{
    AOS.init({
      duration:1200,
      easing:"ease-in-out",
    });
  });



  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            src={video}
            autoPlay
            loop
            muted
            className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          ></video>
          <Navbar />
          <Hero />
        </div>
          <Services/>
          <Banner/>
          <Banner2/>
          <Footer/>
      </div>
    </>
  );
}

export default App;
