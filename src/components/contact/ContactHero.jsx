import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion'; // Using Framer Motion for premium UI

const ContactHero = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-[#050505] flex items-center justify-center pt-20 pb-12 px-6 md:px-20 overflow-hidden">
      
      {/* 1. ANIMATED BACKGROUND TEXT */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.02, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <h1 className="text-[25vw] font-black italic uppercase text-white leading-none">
          Contact
        </h1>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full"
      >
        
        {/* Left Side: Branding & Info */}
        <div className="flex flex-col">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-0.5 bg-[#FFC107]"
            ></motion.div>
            <span className="text-[#FFC107] uppercase tracking-[0.4em] font-bold text-xs italic">
              Expedition Support
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-black italic text-white uppercase leading-[0.85] mb-8"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            Reach The <br />
            <span className="text-zinc-700">Outpost</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-zinc-400 text-lg mb-12 max-w-md leading-relaxed">
            Ready to track the elusive leopard? Our team is available 24/7 to help you plan the ultimate Sri Lankan safari.
          </motion.p>

          {/* Contact Details Cards */}
          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: <MapPin />, label: "The Base", val: "Yala Block 1, Sri Lanka" },
              { icon: <Phone />, label: "Radio Line", val: "+94 77 123 4567" },
              { icon: <Mail />, label: "Dispatch", val: "safari@wildpack.com" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#FFC107] transition-all group-hover:bg-[#FFC107] group-hover:text-black group-hover:rotate-[15deg]">
                  {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">{item.label}</p>
                  <p className="text-white font-black italic uppercase text-sm tracking-tighter">{item.val}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: The Form Card */}
        <motion.div 
          variants={fadeInUp}
          className="relative"
        >
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-zinc-900/40 backdrop-blur-md p-8 md:p-12 border border-zinc-800 relative shadow-2xl z-20"
          >
            {/* Decorative Corner notch */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFC107] flex items-start justify-end p-2" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}>
               <Send size={16} className="text-black rotate-12" />
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                {['Your Name', 'Email Address'].map((placeholder, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="relative group">
                    <input 
                      type={idx === 1 ? "email" : "text"} 
                      placeholder={placeholder} 
                      className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:outline-none focus:border-[#FFC107] transition-colors placeholder:text-zinc-700 uppercase font-bold text-xs tracking-widest" 
                    />
                  </motion.div>
                ))}
                <motion.div variants={fadeInUp} className="relative group">
                  <textarea 
                    rows="4" 
                    placeholder="Your Inquiry" 
                    className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:outline-none focus:border-[#FFC107] transition-colors placeholder:text-zinc-700 uppercase font-bold text-xs tracking-widest resize-none"
                  ></textarea>
                </motion.div>
              </div>

              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="w-full group relative py-5 bg-[#FFC107] text-black font-black uppercase italic tracking-[0.3em] text-sm overflow-hidden transition-transform"
              >
                <span className="relative z-10 flex items-center justify-center gap-4">
                  Send Dispatch 
                  <motion.div
                    animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Send size={16} />
                  </motion.div>
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </motion.button>
            </form>
          </motion.div>
          
          {/* Decorative floating border with animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-4 -left-4 w-full h-full border-2 border-zinc-800 -z-10 translate-x-2 translate-y-2"
          ></motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default ContactHero;