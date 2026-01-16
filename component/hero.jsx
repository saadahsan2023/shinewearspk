import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <>
    <Navbar/>
      <section className=" container  min-w-full">
        <div className=" sub-container h-full flex items-center justify-center">
        <motion.div
        
                           initial={{ opacity: 0, scale: 0 }}
                       animate={{ opacity: 1, scale: 1 }}  
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration:0.5, delay:0.2}}
        className='flex flex-col justify-center items-center p-2'>
          <h2 className="text-4xl text-center md:text-5xl font-extrabold leading-tight">
            Timeless <span className="text-[#D0AF65]">Jewelry</span>
            Crafted in Gold
          </h2>
          <p className="mt-6 text-center text-white max-w-md">
            Discover premium handcrafted jewelry designed to bring elegance and luxury to every moment.
          </p>
          <button className="mt-8 px-8 py-3 w-2xs cursor-pointer bg-gradient-to-r from-[#ECD28E] to-[#C9A44D] text-white rounded-full  hover:text-black transition">
            Shop Collection
          </button>
        </motion.div>
        </div>
      </section>
    </>
  )
}

export default Hero
