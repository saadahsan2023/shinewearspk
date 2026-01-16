import { Facebook, Instagram } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <div className=''>
            <footer className="px-8 py-20  bg-black text-[#D0AF65] text-center">
             <motion.div
               
                           initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}  
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration:0.5, delay:0 }} 
              >
              <h3 className="text-3xl md:text-4xl font-bold">
                Pure Gold. Pure Elegance.
              </h3>
              <p className="mt-4 text-white max-w-xl mx-auto">
                Designed for those who appreciate timeless beauty and unmatched craftsmanship.
              </p>
              <button className="cursor-pointer mt-8 px-10 py-3 bg-transparent border-2 border-[#D0AF65] hover:text-black hover:bg-gradient-to-r from-[#ECD28E] to-[#C9A44D] text-[#D0AF65] rounded-full font-medium hover:bg-white transition">
                Explore Luxury
              </button>
             </motion.div>
      
       <section className="px-8 py-10 mt-5 border-t border-white text-sm text-balck">
        <div className="flex flex-col md:flex-row justify-between gap-6 ">
          <p className='text-'>© 2026 Shine wears. All rights reserved.</p>
          <div className="flex text-[#D0AF65] gap-6">
            <a className="hover:text-[#D0AF65]" href="#"><Instagram/></a>
            <a className="hover:text-[#D0AF65]" href="#"><Facebook/></a>
          </div>
        </div>
        
      </section>
            </footer>
    </div>
  )
}

export default Footer
