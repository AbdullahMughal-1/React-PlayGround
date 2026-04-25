import AppStore from "./component/AppStore"
import Banner from "./component/Banner"
import Hero from "./component/Hero/Hero"
import Navbar from "./component/Navbar"
import Services from "./component/Services"



function App() {
  

  return (
   <>
   <div className="bg-white dark:bg-gray-900 dark:text-white">

  <Navbar/>
  <Hero/>
  <Services/>
  <Banner/>
  <AppStore/>
   </div>
   </>
  )
}

export default App
