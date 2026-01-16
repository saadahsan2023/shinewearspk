import React from 'react'
import Navbar from '../../component/Navbar';
import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';
const Necklaces = () => {

  const necklaces = [
    {
      name: "Diamond Pendant Necklace",
      price: "$1,850",
      description: "18K gold necklace with radiant diamond pendant",
    },
    {
      name: "Royal Gold Chain",
      price: "$1,200",
      description: "Pure gold chain with timeless elegance",
    },
    {
      name: "Pearl Luxury Necklace",
      price: "$1,480",
      description: "Classic pearls crafted for modern luxury",
    },
    {
      name: "Black Gold Statement Necklace",
      price: "$2,100",
      description: "Bold black & gold design for standout style",
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
          Necklaces <span className="text-[#D0AF65]">Collection</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-black">
          Explore exquisite necklaces designed to elevate elegance and define
          timeless luxury.
        </p>
      </motion.section>


      <section className="px-8 py-16 bg-white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {necklaces.map((necklace,i) => (
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
                {necklace.name}
              </h3>
              <p className="text-sm text-[#D0AF65] mt-2">
                {necklace.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold text-black">{necklace.price}</span>
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
          Necklaces That Define <span className="text-[#D0AF65]">Elegance</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-white">
          Designed to complement every look — explore our premium necklace
          collection today.
        </p>
        <button className="cursor-pointer mt-8 px-10 py-3 bg-transparent border-2 border-[#D0AF65] hover:text-black hover:bg-gradient-to-r from-[#ECD28E] to-[#C9A44D] text-[#D0AF65] rounded-full font-medium hover:bg-white transition">
          Shop Necklaces
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

export default Necklaces
function NecklaceIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M4 6c2 6 6 10 8 10s6-4 8-10" />
      <circle cx="12" cy="17" r="1.5" />
    </svg>
  );
}
