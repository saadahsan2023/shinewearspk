import React from 'react'
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import { motion } from 'framer-motion';
const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white text-black">
      <motion.section
           initial={{ opacity: 0, y: "40px" }}
         whileInView={{ opacity: 1, y: 0 }}  
         viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, delay:0.2}}  
      className="px-6 md:px-10 py-20 text-center bg-gradient-to-b from-white to-gray-50">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          Contact <span className="text-[#D0AF65]">Us</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-gray-600">
          We’re here to help you with any questions about our jewelry, orders, or services.
        </p>
      </motion.section>

      <section className="px-6 md:px-10 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          <div>
            <motion.h2 
        initial={{ opacity: 0, x: "-40px" }}
        whileInView={{ opacity: 1, x: 0 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
            className="text-3xl font-bold mb-8">
              Get in <span className="text-[#D0AF65]">Touch</span>
            </motion.h2>

            <div className="space-y-6">
              <motion.div
        initial={{ opacity: 0, x: "-40px" }}
        whileInView={{ opacity: 1, x: 0 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
              className="flex items-start gap-4">
                <Mail className="text-[#D0AF65]" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-black">abc@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
        initial={{ opacity: 0, x: "-40px" }}
        whileInView={{ opacity: 1, x: 0 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}      
              className="flex items-start gap-4">
                <Phone className="text-[#D0AF65]" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-black">123456</p>
                </div>
              </motion.div>

              <motion.div
            initial={{ opacity: 0, x: "-40px" }}
        whileInView={{ opacity: 1, x: 0 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}          
              className="flex items-start gap-4">
                <MapPin className="text-[#D0AF65]" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-black">
                    .....<br />
                    ......
                  </p>
                </div>
              </motion.div>
            </div>
          </div>


          <motion.div
        initial={{ opacity: 0, x: "40px" }}
        whileInView={{ opacity: 1, x: 0 }}  
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}      
          
          className="bg-white border border-[#68563A] rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-[#68563A]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-[#68563A]"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-[#68563A]"
              />
              <button
                type="submit"
                className="w-full py-3 cursor-pointer  bg-gradient-to-r from-[#ECD28E] to-[#C9A44D] text-white rounded-full  hover:text-black 
                transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>


    </div>


    <Footer/>



    </>
  )
}

export default Contact
