import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { MdCall, MdMessage } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white px-5 relative z-50' >
      <section className="max-w-[1200px] mx-auto text-white px-5">
        <div className="grid md:grid-cols-3 py-5">
            {/* first cell */}
            <div className=" py-8 px-4">
                <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3' >Be Ready to Grow</h1>
                <p className="">
                    Get Exclusive < span className="font-bold">
                        Update
                    </span>
                    Straight to your Inbox
                </p>
                <br />
                <div className="flex items-center h-10">
                    <input type="text" className='py-1 px-3 w-full h-[100%] inline-block
                    focus:outline-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800
                    border-gray-200 border-2  ' placeholder='Email' />
                    <button className="primary-button">OK</button>
                </div>
            </div>
            {/* second section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                <div className="">
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold mb-3">
                            Quick Links
                        </h1>
                        <ul  className='flex flex-col gap-3'>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold mb-3">
                            Quick Links
                        </h1>
                        <ul  className='flex flex-col gap-3'>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold mb-3">
                            Contact Links
                        </h1>
                        <div>
                            <div className='flex items-center gap-3'>
                                <HiLocationMarker/>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <MdMessage/>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <MdCall/>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
