import React from 'react'
 

const Navbar = () => {
  return (
    <>
    <div className="shadow bg-white
    duration-200 py-2">
        <div className="container">
            <div className="flex justify-between items-center">
                <div className="">
                    <a href="#" className='flex text-2xl sm:text-3xl font-bold items-center gap-2'>
                    <img src="/Logo.png" alt="Logo" className='w-14  ml-3' />
                    Tastey
                    </a>
                </div>
                <div className="">
                    <ul className='sm:flex gap-4 hidden '>
                        <li>
                            <a href="#" className='inline-block py-4 px-4 hover:text-[#ff9c01]'>Home</a>
                        </li>
                        <li>
                            <a href="#" className='inline-block py-4 px-4 hover:text-[#ff9c01]'>About</a>
                        </li>
                        <li>
                            <a href="#" className='inline-block py-4 px-4 hover:text-[#ff9c01]'>Contact</a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
