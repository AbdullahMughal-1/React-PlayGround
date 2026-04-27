import React from "react"
import video from "./assets/Video.mp4"
import Navbar from "./coponents/Navbar"

function App() {

  return (
  <>
  <div>
    <div className="h-[700px] relative">
      <video src={video}
      autoPlay
      loop
      muted
      className="fixed right-0 top-0 h-[700[px] w-full object-cover z-[-1]"
    
      >

      </video>
      <Navbar/>
    </div>
  </div>
  </>
  )
}

export default App
