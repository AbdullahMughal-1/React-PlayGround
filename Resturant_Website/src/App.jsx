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
   </div>
   </>
  )
}

export default App
