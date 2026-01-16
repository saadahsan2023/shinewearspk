import React from 'react'
import Hero from '../../component/hero'
import Footer from '../../component/Footer'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <div>

    <Hero/>

      {/* About Us */}
      <motion.section 
       initial={{ opacity: 0, y: "40px" }}
         whileInView={{ opacity: 1, y: 0 }}  
         viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
      className="px-8 py-20 bg-white ">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-[#D0AF65]">Us</span>
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At LUXEGOLD, we believe jewelry is more than an accessory — it is a reflection of elegance, emotion, and timeless beauty. Our collections are handcrafted using premium materials, inspired by classic luxury and modern sophistication.
          </p>
        </div>
      </motion.section>

      {/* Categories */}
      <section className="px-8 py-16 bg-white">
        <motion.h3
        initial={{ opacity: 0, y: "40px" }}
         whileInView={{ opacity: 1, y: 0 }}  
         viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
        className="text-3xl font-bold text-center mb-12">
          Shop by <span className="text-[#D0AF65]">Category</span>
        </motion.h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {["Rings", "Necklaces", "Earrings", "Bracelets"].map((cat,i) => (
            <motion.div
        initial={{ opacity: 0, y: "40px" }}
         whileInView={{ opacity: 1, y: 0 }}  
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration:0.5, delay:i*0.2 }} 
            key={i}
              className="h-40 flex items-center justify-center rounded-2xl bg-white border border-gray-200 text-lg font-semibold hover:border-[#68563A] hover:text-[#D0AF65] transition cursor-pointer"
            >
              {cat}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-8 py-16 bg-white">
        <motion.h3 
        initial={{ opacity: 0, y: "40px" }}
         whileInView={{ opacity: 1, y: 0 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
        className="text-3xl font-bold text-center mb-12">
          Featured <span className="text-[#D0AF65]">Jewelry</span>
        </motion.h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item,i) => (
            <motion.div
             initial={{ opacity: 0, y: "40px" }}
         whileInView={{ opacity: 1, y: 0 }}  
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration:0.5, delay:i*0.2 }} 
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-lg transition"
            >
              <div className="h-48 rounded-xl bg-gradient-to-r from-[#ECD28E] to-[#C9A44D] mb-4" />
              <h4 className="font-semibold">Gold Necklace</h4>
              <p className="text-sm text-[#68563A]">18K Premium Gold</p>
              <p className="mt-2 font-bold text-[#D0AF65]">$899</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Luxury Banner */}


    <Footer/>
      
    </div>
  )
}

export default Home
