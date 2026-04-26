import AppStore from "./component/AppStore"
import Banner from "./component/Banner"
import Footer from "./component/Footer"
import Hero from "./component/Hero/Hero"
import Navbar from "./component/Navbar"
import Services from "./component/Services"
import Testimonial from "./component/Testimonial"
import "aos/dist/aos.css";
import AOS from  "aos";
import React from "react"



function App() {
  
  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration:500,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  }, [] ); 

  return (
   <>
   <div className="bg-white dark:bg-gray-900 dark:text-white">

  <Navbar/>
  <Hero/>
  <Services/>
  <Banner/>
  <AppStore/>
  <Testimonial/>
  <Footer/>
   </div>
   </>
  )
}

export default App
