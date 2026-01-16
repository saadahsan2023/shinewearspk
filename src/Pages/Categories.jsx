import React from 'react'
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import { motion } from 'framer-motion';
const Categories = () => {
    const categories = [
      {
        title: "Rings",
        description: "Elegant rings crafted in premium gold and diamonds",
        // Icon: RingIcon,
      },
      {
        title: "Necklaces",
        description: "Luxury necklaces designed for timeless beauty",
        // Icon: NecklaceIcon,
      },
      {
        title: "Earrings",
        description: "Sophisticated earrings for every occasion",
        // Icon: EarringIcon,
      },
      {
        title: "Bracelets",
        description: "Refined bracelets with modern elegance",
        // Icon: BraceletIcon,
      },
    ];
  return (
  
  
  
  <>



<Navbar/>


  
    <div className="min-h-screen bg-white text-black">

      <motion.section
        initial={{ opacity: 0, y: "20px" }}
         whileInView={{ opacity: 1, y: 0 }}  
         viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}      
      className="px-8 py-20 text-center bg-white">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          Our <span className="text-[#D0AF65]">Categories</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-gray-600">
          Explore our curated jewelry collections, crafted with precision,
          elegance, and luxury to match every style.
        </p>
      </motion.section>


      <section className="px-8 py-16 bg-white">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {categories.map((e,i) => (
            <motion.div
                initial={{ opacity: 0, y: "20px" }}
         whileInView={{ opacity: 1, y: 0 }}  
         viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, delay:i*0.2 }}      
              key={i}
              className="group bg-white border border-gray-200 rounded-3xl p-8 text-center hover:border-[#68563A] hover:shadow-xl transition cursor-pointer"
            >
              <div className="flex justify-center mb-6">
                {/* <Icon className="w-12 h-12 text-black group-hover:text-yellow-500 transition" /> */}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#D0AF65] transition">
                {e.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {e.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* <section className="px-8 py-20 bg-black text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Discover Jewelry That Defines <span className="text-yellow-500">Luxury</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-300">
          Each category reflects elegance, craftsmanship, and timeless design
          inspired by modern luxury.
        </p>
        <button className="mt-8 px-10 py-3 bg-yellow-500 text-black rounded-full font-medium hover:bg-white transition">
          Shop Now
        </button>
      </section> */}

    </div>



<Footer/>


    </>
  )
}

export default Categories
