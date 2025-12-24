import React from 'react';
import Navbar from '../Navbar';
import { motion } from 'framer-motion';

const Hero = () => {
  const navbarItems = [
    { label: "Home", bgColor: "#0D0716", textColor: "#fff", links: [{ label: "Home Page", href: "/" }] },
    { label: "About", bgColor: "#170D27", textColor: "#fff", links: [{ label: "About Us", href: "/about" }] },
    { label: "Services", bgColor: "#271E37", textColor: "#fff", links: [{ label: "Our Services", href: "/" }] },
    { label: "Contact", bgColor: "#0D0716", textColor: "#fff", links: [{ label: "Contact Us", href: "/" }] },
    { label: "Gallery", bgColor: "#170D27", textColor: "#fff", links: [{ label: "Gallery", href: "/" }] },
    { label: "Blog", bgColor: "#271E37", textColor: "#fff", links: [{ label: "Blog", href: "/" }] }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <section className="relative w-full min-h-screen bg-black text-white flex items-center px-8 md:px-16 lg:px-24 overflow-hidden">
      
      <Navbar
        logo={null}
        items={navbarItems}
        baseColor="#1a1a1a"
        menuColor="#fff"
        buttonBgColor="#FFC107"
        buttonTextColor="#000"
      />

      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&q=80&w=2000')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Content Section */}
        <div className="flex flex-col">
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-2 text-[#FFC107]">
            <span className="uppercase tracking-[0.4em] text-xs font-bold italic">Into the Wild</span>
            <span className="text-xs">✈</span>
          </motion.div>

          <h1
            className="text-8xl md:text-9xl font-black italic uppercase leading-[0.8] mb-8"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            <motion.span variants={fadeInUp} className="block">Wild</motion.span>
            <motion.span variants={fadeInUp} className="text-zinc-500 block">Show</motion.span>
          </h1>

          <motion.p variants={fadeInUp} className="tracking-[0.6em] text-xs uppercase text-gray-400 mb-16">
            Adventure in the forest
          </motion.p>

          <motion.div variants={fadeInUp} className="flex items-start gap-8 max-w-xl">
            <div className="border-l-2 border-[#FFC107] pl-4 min-w-[140px]">
              <h4 className="text-[#FFC107] font-black text-lg leading-tight uppercase italic">
                Wildlife Safari
              </h4>
              <p className="text-[10px] text-zinc-500 mt-1 uppercase font-bold tracking-widest">20th October 2025</p>
            </div>
            <p className="text-[11px] leading-relaxed text-zinc-400 uppercase font-medium tracking-tighter">
              We invest in bold people with transformative ideas that help millions understand,
              value, and protect life on our planet.
            </p>
          </motion.div>
        </div>

        {/* Right Content - Cards removed, Social Links preserved */}
        <div className="relative flex justify-end items-center h-[500px]">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute right-0 flex flex-col gap-6 text-xs text-zinc-500 font-bold"
          >
            {['f', '𝕏', 'in'].map((social, i) => (
              <motion.span 
                key={i} 
                whileHover={{ scale: 1.6, color: '#FFC107' }} 
                className="cursor-pointer transition-colors uppercase tracking-widest"
              >
                {social}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;