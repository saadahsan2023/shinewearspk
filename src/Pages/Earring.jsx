import React from 'react'
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';
const Earrings = () => {

const earrings = [
{
name: "Diamond Stud Earrings",
price: "$1,150",
description: "Classic diamond studs with refined brilliance",
},
{
name: "Gold Hoop Earrings",
price: "$890",
description: "Elegant hoops crafted in pure gold",
},
{
name: "Pearl Drop Earrings",
price: "$1,320",    
description: "Luxury pearls with graceful drop design",
},
{
name: "Black Gold Statement Earrings",
price: "$1,680",
description: "Bold black & gold design for modern elegance",
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
          <EarringIcon className="w-16 h-16 text-[#D0AF65]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          Earrings <span className="text-[#D0AF65]">Collection</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-black">
          Explore exquisite necklaces designed to elevate elegance and define
          timeless luxury.
        </p>
      </motion.section>


      <section className="px-8 py-16 bg-white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {earrings.map((earring,i) => (
            <motion.div
            initial={{ opacity: 0, y: "40px" }}
         whileInView={{ opacity: 1, y: 0 }}  
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration:0.5, delay:i*0.2 }}           
              key={i}
              className="group bg-white border border-gray-200 rounded-3xl p-6 hover:border-[#68563A] hover:shadow-xl transition"
            >
              <div className="h-40 bg-black rounded-2xl flex items-center justify-center mb-6">
                <EarringIcon className="w-14 h-14 text-[#D0AF65]" />
              </div>
              <h3 className="text-lg font-semibold group-hover:text-[#D0AF65] transition">
                {earring.name}
              </h3>
              <p className="text-sm text-[#D0AF65] mt-2">
                {earring.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold text-black">{earring.price}</span>
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
          Earrings That Radiate <span className="text-[#D0AF65]">Luxury</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-white">
       Perfectly crafted earrings to elevate every look — explore our
exclusive collection today.
        </p>
        <button className="cursor-pointer mt-8 px-10 py-3 bg-transparent border-2 border-[#D0AF65] hover:text-black hover:bg-gradient-to-r from-[#ECD28E] to-[#C9A44D] text-[#D0AF65] rounded-full font-medium hover:bg-white transition">
          Shop Earrings
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

export default Earrings
function EarringIcon({ className }) {
return (
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
<path d="M12 4v6" />
<circle cx="12" cy="14" r="4" />
</svg>
);
}