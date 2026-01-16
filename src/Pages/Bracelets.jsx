import React from 'react'
import Navbar from '../../component/Navbar';
import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';
const Bracelet = () => {

const bracelets = [
{
name: "Diamond Tennis Bracelet",
price: "$2,450",
description: "Luxury tennis bracelet with premium diamonds",
},
{
name: "Classic Gold Bangle",
price: "$1,100",
description: "Timeless gold bangle with polished finish",
},
{
name: "Pearl Charm Bracelet",
price: "$1,380",
description: "Elegant pearls blended with modern charm",
},
{
name: "Black Gold Statement Bracelet",
price: "$1,950",
description: "Bold black & gold bracelet for luxury styling",
},
];



    return (
    <>


<Navbar/>
    <div className="min-h-screen bg-white text-black">

      <motion.section 
              initial={{ opacity: 0, y: "40px" }}
         whileInView={{ opacity: 1, y: 0 }}  
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration:0.5,  }}       
      className="px-8 py-20 text-center">
        <div className="flex justify-center mb-6">
          <NecklaceIcon className="w-16 h-16 text-[#D0AF65]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          Bracelets <span className="text-[#D0AF65]">Collection</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-black">
         Discover exquisite bracelets crafted to reflect elegance, luxury,
         and timeless beauty.
        </p>
      </motion.section>


      <section className="px-8 py-16 bg-white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {bracelets.map((bracelet,i) => (
            <motion.div
            initial={{ opacity: 0, y: "40px" }}
         whileInView={{ opacity: 1, y: 0 }}  
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration:0.5, delay:i*0.2 }}           
              key={i}
              className="group bg-white border border-gray-200 rounded-3xl p-6 hover:border-[#68563A] hover:shadow-xl transition"
            >
              <div className="h-40 bg-black rounded-2xl flex items-center justify-center mb-6">
                <NecklaceIcon className="w-14 h-14 text-[#D0AF65]" />
              </div>
              <h3 className="text-lg font-semibold group-hover:text-[#D0AF65] transition">
                {bracelet.name}
              </h3>
              <p className="text-sm text-[#D0AF65] mt-2">
                {bracelet.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold text-black">{bracelet.price}</span>
                <button className="px-4 py-2 text-sm bg-black text-white rounded-full cursor-pointer  bg-gradient-to-r from-[#ECD28E] to-[#C9A44D]  hover:text-black transition">
                  View
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      <section className="px-8 py-20 bg-black text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Bracelets That Define <span className="text-[#D0AF65]">Luxury</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-white">
          Designed to complement every look — explore our premium necklace
          collection today.
        </p>
        <button className="cursor-pointer mt-8 px-10 py-3 bg-transparent border-2 border-[#D0AF65] hover:text-black hover:bg-gradient-to-r from-[#ECD28E] to-[#C9A44D] text-[#D0AF65] rounded-full font-medium hover:bg-white transition">
          Shop Bracelets
        </button>




<footer className="px-8 py-10  text-sm text-gray-600">



       <section className="px-8 py-10 mt-5 border-t border-white text-sm text-balck">
        <div className="flex flex-col md:flex-row justify-between gap-6 ">
          <p className='text-[#D0AF65]'>© 2026 Shine wears. All rights reserved.</p>
          <div className="flex text-[#D0AF65] gap-6">
            <a className="hover:text-[#D0AF65]" href="#"><Instagram/></a>
            <a className="hover:text-[#D0AF65]" href="#"><Facebook/></a>
          </div>
        </div>
        
      </section>
</footer>



      </section>


    </div>


     
      
    </>
  )
}

export default Bracelet
function NecklaceIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M4 6c2 6 6 10 8 10s6-4 8-10" />
      <circle cx="12" cy="17" r="1.5" />
    </svg>
  );
}
