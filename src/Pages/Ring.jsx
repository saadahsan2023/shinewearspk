import React, { useState } from 'react'
import Navbar from '../../component/Navbar';
import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';
import Modal from '../../component/Modal';
const Ring = () => {

const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true)

};
//   const closeModal = () => setIsModalOpen(false);
  const rings = [
    {
      name: "Diamond Elegance Ring",
      price: "$1,250",
      description: "18K gold ring with premium diamond finish",
    },
    {
      name: "Royal Gold Band",
      price: "$980",
      description: "Minimal luxury band crafted in pure gold",
    },
    {
      name: "Classic Engagement Ring",
      price: "$1,750",
      description: "Timeless engagement ring with modern cut",
    },
    {
      name: "Black Gold Signature Ring",
      price: "$1,420",
      description: "Bold black & gold design for premium style",
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
          <RingIcon className="w-16 h-16 text-[#D0AF65]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          Rings <span className="text-[#D0AF65]">Collection</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-black">
          Discover handcrafted rings that symbolize elegance, commitment, and
          timeless luxury.
        </p>
      </motion.section>

         
        {/* {isModalOpen &&

         <Modal />
        }   */}
      
      <section className="px-8 py-16 bg-white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {rings.map((ring,i) => (
            <motion.div
        initial={{ opacity: 0, y: "40px" }}
         whileInView={{ opacity: 1, y: 0 }}  
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration:0.5, delay:i*0.2 }}   
            key={i}
              className="group bg-white border border-gray-200 rounded-3xl p-6 hover:border-[#68563A] hover:shadow-xl transition"
            >
              <div className="h-40 bg-black rounded-2xl flex items-center justify-center mb-6">
                <RingIcon className="w-14 h-14 text-[#D0AF65]" />
              </div>
              <h3 className="text-lg font-semibold group-hover:text-[#D0AF65] transition">
                {ring.name}
              </h3>
              <p className="text-sm text-[#D0AF65] mt-2">
                {ring.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold text-black">{ring.price}</span>
                <button className="px-4 py-2 text-sm bg-black text-white rounded-full cursor-pointer  bg-gradient-to-r from-[#ECD28E] to-[#C9A44D]  hover:text-black transition"
                onClick={openModal}
                    
                   
                
                >
                  View
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>



    </div>
<section className="px-8 py-20 bg-black text-white text-center">
<h2 className="text-3xl md:text-4xl font-bold">
Rings That Speak <span className="text-[#D0AF65]">Luxury</span>
</h2>
<p className="mt-4 max-w-xl mx-auto text-gray-300">
Designed for moments that last forever — explore our exclusive ring
collection today.
</p>
<button className="cursor-pointer mt-8 px-10 py-3 bg-transparent border-2 border-[#D0AF65] hover:text-black hover:bg-gradient-to-r from-[#ECD28E] to-[#C9A44D] text-[#D0AF65] rounded-full font-medium hover:bg-white transition">
Shop Rings
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










    </>
  )
}

export default Ring


function RingIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="12" cy="14" r="6" />
      <path d="M8 6h8" />
    </svg>
  );
}
