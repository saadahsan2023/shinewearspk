import React from 'react'
import { Award, Gem, HeartHandshake } from "lucide-react";
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import { motion } from 'framer-motion'

const arry=[
  {
    icon:<Gem className="mx-auto mb-4 text-[#D0AF65]" size={36}/>,
    heading:"Premium Quality",
    para:"Only the finest materials and gemstones make it into our collections."
  },
  {
    icon:<Award className="mx-auto mb-4 text-[#D0AF65]" size={36}/>,
    heading:"Craftsmanship",
    para:"Handcrafted by skilled artisans with years of expertise."
  },
  {
    icon:<HeartHandshake className="mx-auto mb-4 text-[#D0AF65]" size={36}/>,
    heading:"Trust & Care",
    para:"We believe in transparency, ethics, and long-term relationships."
  },
]

const Aboutus = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white text-black">
    
      <motion.section
       initial={{ opacity: 0, y: "40px" }}
         whileInView={{ opacity: 1, y: 0 }}  
         viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
      className="px-6 md:px-10 py-20 text-center bg-gradient-to-b from-white to-gray-50">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-black">
          About <span className="text-[#D0AF65]">Shine wears</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-black">
          Crafting timeless jewelry that celebrates elegance, emotion, and individuality.
        </p>
      </motion.section>

      {/* Our Story */}
      <motion.section 
       initial={{ opacity: 0, y: "40px" }}
         whileInView={{ opacity: 1, y: 0 }}  
         viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, delay:0.2}}
      className="px-6 md:px-10 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">
              Our <span className="text-[#D0AF65] ">Story</span>
            </h2>
            <p className="text-black leading-relaxed text-center">
              Shine wears was founded with a simple vision: to create jewelry that transcends trends and becomes a part of your story. Each piece is designed with passion and precision, blending classic craftsmanship with modern luxury.
            </p>
            <p className="mt-4 text-center text-black leading-relaxed">
              From sourcing premium materials to the final polish, we ensure every detail reflects excellence and authenticity.
            </p>
          </div>

        </div>
      </motion.section>

      {/* Values */}
      <section className="px-6 md:px-10 py-20 bg-black text-white">
        <motion.h2 
        initial={{ opacity: 0, y: "40px" }}
         whileInView={{ opacity: 1, y: 0 }}  
         viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
        className="text-3xl font-bold text-center mb-14">
          Our <span className="text-[#D0AF65]">Values</span>
        </motion.h2>

          
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {arry.map((e,i)=>(
          <motion.div 
        initial={{ opacity: 0, y: "40px" }}
        whileInView={{ opacity: 1, y: 0 }}  
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration:0.5, delay:i*0.2 }} 
          key={i} className="text-center p-8 rounded-2xl bg-[#978461]">
            {e.icon}
            <h3 className="font-semibold text-lg mb-2">{e.heading}</h3>
            <p className="text-[#D0AF65] text-sm">{e.para}</p>
          </motion.div>

))
}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 md:px-10 py-20">
        <motion.div 
        initial={{ opacity: 0, y: "20px" }}
         whileInView={{ opacity: 1, y: 0 }}  
         viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
        className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose <span className="text-[#D0AF65]">Us</span>
          </h2>
          <p className="text-black leading-relaxed">
            We combine luxury aesthetics with ethical practices to bring you jewelry that not only looks beautiful but feels meaningful. Every purchase is backed by quality assurance and dedicated customer support.
          </p>
        </motion.div>
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: "20px",zIndex:0 }}
        whileInView={{ opacity: 1, y: 0,zIndex:10 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
      className="px-6 md:px-10 py-20 bg-white  text-center">
        <h2 className="text-3xl font-bold mb-6">
          Discover Your <span className="text-[#D0AF65]">Sparkle</span>
        </h2>
        <p className="text-black max-w-xl mx-auto mb-8">
          Explore our collections and find jewelry that tells your story.
        </p>
        <button className="px-10 py-3  rounded-full  cursor-pointer  bg-gradient-to-r from-[#ECD28E] to-[#C9A44D] text-white rounded-full  hover:text-black transition transition">
          Explore Collection
        </button>
      </motion.section>

      {/* Footer */}

    </div>
<Footer/> 
    </>
  )
}

export default Aboutus
