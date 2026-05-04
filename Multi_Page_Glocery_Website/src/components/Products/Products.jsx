import React from 'react'
import Heading from '../Heading/Heading'
import Cards from '../Cards/Cards'
import { useState } from 'react'
import productlist from "../ProductList/ProductList"
import Button from '../Button/button'

const Products = () => {
    const categories = ['All' , 'Fruits', 'Vegetables' , 'Dairy', 'SeaFood']
    const [activeTab, setactiveTab] = useState('All')

    let filteredItems = activeTab === 'All' ? productlist : 
    productlist.filter(items =>items.category === activeTab);


const renderCards = filteredItems.slice(0,8).map(product =>{
    return(
        <Cards  image={product.image} name={product.name} price={product.price}/>
    )
})

  return (
  <section>
    <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products"/>

                {/* tabs */}
            <div className="flex flex-wrap gap-3 justify-center mt-10">
            {categories.map(category=>{
                return(
                    <button key={category} className={`px-5 py-2 text-lg rounded-lg  ${activeTab === category ? 'bg-orange-500 text-white ' : 'bg-zinc-100'} cursor-pointer `}  onClick={()=>setactiveTab(category)}>
                        {category}
                    </button>
                )
            })}
            </div>    
                {/* product listing  */}
                <div className=" grid grid-cols-1 md:grid-cols-4 gap-9 mt-20">
                    {renderCards}
                </div>

                <div className="mx-auto w-fit mt-10">
                    <Button content="View All"/>
                </div>
    </div>
  </section>
  )
}

export default Products
