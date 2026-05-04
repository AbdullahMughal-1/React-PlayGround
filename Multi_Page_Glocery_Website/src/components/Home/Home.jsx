import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Catagory from '../Category/Catagory'
import Values from '../Values/Values'
import Products from '../Products/Products'
import Discount from '../Discount/Discount'
import Process from '../Process/Process'


const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Catagory/>
    <Values/>
    <Products/>
    <Discount/>
    <Process/>
    </div>
  )
}

export default Home
