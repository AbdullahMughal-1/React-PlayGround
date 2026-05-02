import React from 'react'
import Heading from '../Heading/Heading'
import fruits from "../../assets/fruits-and-veggies.png"
import seafood from "../../assets/meat-and-seafood.png"
import dairy from "../../assets/dairy-and-eggs.png"

const Catagory = () => {
  return (
    <div className='py-18'>
        <Heading highlight="Shop" heading="by Category" />
    </div>
  )
}

export default Catagory


const catagory=[
    {
        id:1,
        title:"Fruits & Veggies",
        description:"Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crips vegetables.",
        image: fruits
    },
      {
        id:2,
        title:"Dairy and Eggs",
        description:"Wholesome dairy products and free-range eggs. From creamy milk and yougurt to artisanal cheeses.",
        image: dairy
    },  {
        id:3,
        title:"Meat & SeaFood",
        description:"High-quality, responsibly sourced meat and seafood. Choose from freah cuts, marinated options, and more.",
        image: seafood
    },

]