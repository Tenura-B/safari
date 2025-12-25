import React from 'react';
import { motion } from 'framer-motion';
import blogHeroBg from '../../assets/images/journal-hero-dark.jpg'; // Ensure path is correct

const BlogHomeSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* FULL BACKGROUND IMAGE WITH ANIMATION */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src={blogHeroBg} 
          alt="Dark Jungle" 
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">

        {/* LARGE BACKGROUND WATERMARK */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <h2 className="text-[15vw] md:text-[12vw] font-black text-white uppercase tracking-tighter leading-none">
            JOURNAL
          </h2>
        </motion.div>

        {/* HEADLINE AND DESCRIPTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } }
          }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase text-[#FFC107] drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)] leading-tight mb-6"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            WILD TALES <span className="text-white">&</span> CITY TRAILS
          </motion.h1>

          <motion.p
            className="text-white text-lg md:text-xl font-medium tracking-wide drop-shadow-md mb-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Stories from the heart of adventure
          </motion.p>

          {/* Decorative line */}
          <motion.div 
            className="h-1 bg-[#FFC107] mx-auto mb-10"
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.6 }}
          ></motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <button className="bg-[#FFC107] text-black px-10 py-4 rounded-xl font-black uppercase italic tracking-widest text-sm hover:bg-white transition-all shadow-2xl active:scale-95">
              READ ALL POSTS
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHomeSection;
