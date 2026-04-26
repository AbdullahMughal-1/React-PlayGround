import React from 'react'
import appstore from "../assets/applestore.png"
import playstor from "../assets/gplay.png"
import gif from "../assets/hex.gif"

const AppStore = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 max-w-6xl mx-auto px-4"
       data-aos="fade-up"
                  data-aos-duration="300">
        
        {/* Left side: text + buttons */}
        <div className="space-y-6 "   >
          <h1 className="text-2xl sm:text-4xl font-semibold text-center sm:text-left dark:text-gray-400 text-gray-700">
            Tastey is Available for Android and iOS
          </h1>
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
            <a href="#">
              <img src={playstor} alt="Google Play Store" 
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
            </a>
            <a href="#">
              <img src={appstore} alt="Apple App Store" 
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
            </a>
          </div>
        </div>

        {/* Right side: GIF illustration */}
        <div className="flex justify-center sm:justify-end">
          <img src={gif} alt="Delivery illustration" className="max-w-[300px]" />
        </div>
      </div>
    </div>
  )
}

export default AppStore
