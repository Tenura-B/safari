import React from 'react';
import { motion } from 'framer-motion'; // Importing Framer Motion for advanced UI
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();
  
  // Animation variant for the continuous floating effect
  const floatingVariant = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0], // Subtle up and down motion
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      className="relative w-full min-h-screen text-white py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
      style={{ backgroundColor: '#050505' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Side: Timeline & Text Content */}
        <div data-aos="fade-right" data-aos-duration="2000" className="lg:col-span-5 flex gap-4 md:gap-8">
          <div className="hidden md:flex flex-col items-center gap-6 mt-10 md:mt-20">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex flex-col items-center gap-4">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-yellow-500/50 flex items-center justify-center text-[8px] md:text-[10px] text-yellow-500 font-bold">
                  0{item}
                </div>
                {item !== 4 && <div className="w-px h-8 md:h-12 bg-linear-to-b from-yellow-500/50 to-transparent"></div>}
              </div>
            ))}
          </div>

          <div className="flex-1">
            <header data-aos="fade-up" data-aos-duration="1500" className="mb-6 md:mb-10">
              <h4 className="text-yellow-500 text-lg sm:text-xl md:text-2xl font-bold tracking-tighter" style={{ fontFamily: '"Permanent Marker", cursive' }}>
                WILD SHOW
              </h4>
              <p className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gray-500 mb-4 md:mb-6">
                Sri Lanka Jeep Safari
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase mb-3 md:mb-4" style={{ fontFamily: '"Permanent Marker", cursive' }}>
                OUR JOURNEY
              </h2>
              <p className="text-[10px] sm:text-xs tracking-widest text-yellow-500 font-bold uppercase">Passion for the untamed</p>
            </header>

            <div data-aos="fade-up" data-aos-duration="1500" className="space-y-4 md:space-y-6 text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md">
              <p>
                The journey through is to bring nature's wilderness. Committing to the passion for majestic landscapes and spectacular wildlife, capturing the essence of the wild.
              </p>
            </div>

            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/about')}
              className="mt-6 md:mt-10 bg-yellow-500 text-black font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg text-[10px] sm:text-xs tracking-widest hover:bg-yellow-400 transition"
            >
              ABOUT US
            </motion.button>
          </div>
        </div>

        {/* Right Side: Animated Staggered Gallery */}
        <div className="lg:col-span-7 relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center mt-8 lg:mt-0">
          
          {/* 1. Rhino Image (Center-Back) */}
          <motion.div
            variants={floatingVariant}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
            className="absolute top-0 left-2 sm:left-5 md:left-10 w-32 h-40 sm:w-48 sm:h-60 md:w-64 md:h-80 rounded-xl md:rounded-2xl border-2 md:border-4 border-white overflow-hidden z-10 shadow-2xl rotate-[-4deg] bg-cover bg-center cursor-pointer transition-all duration-300"
            style={{ backgroundImage: "url('/images/rhino.jpg')" }}
          />

          {/* 2. Elephant Image (Middle-Left) */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
            className="absolute top-12 sm:top-16 md:top-24 left-16 sm:left-24 md:left-40 w-40 h-48 sm:w-56 sm:h-64 md:w-72 md:h-80 rounded-xl md:rounded-2xl border-2 md:border-4 border-white overflow-hidden z-30 shadow-2xl cursor-pointer transition-all duration-300"
          >
            <img src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Elephant" />
          </motion.div>

          {/* 3. Elephant 2 (Bottom-Left) */}
          <motion.div
            variants={floatingVariant}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
            className="absolute bottom-[-20px] sm:bottom-[-30px] md:bottom-[-40px] left-[10px] sm:left-[15px] md:left-[20px] w-32 h-40 sm:w-48 sm:h-56 md:w-64 md:h-72 rounded-xl md:rounded-2xl border-2 md:border-4 border-white overflow-hidden z-40 shadow-2xl rotate-[-8deg] cursor-pointer transition-all duration-300"
          >
            <img src="../../src/assets/images/elephant2.jpg" className="w-full h-full object-cover" alt="Elephant 2" />
          </motion.div>

          {/* 4. Fox Image (Back-Right - Pulse effect) */}
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="hidden sm:block absolute top-5 sm:top-8 md:top-10 right-5 sm:right-8 md:right-10 w-32 h-40 sm:w-40 sm:h-52 md:w-48 md:h-64 rounded-xl md:rounded-2xl border-2 border-white/50 overflow-hidden z-0 blur-[1px]"
          >
            <img src="https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover" alt="Fox" />
          </motion.div>

          {/* 5. Tiger Image (Bottom-Right) */}
          <motion.div
            variants={floatingVariant}
            initial="initial"
            animate="animate"
            transition={{ duration: 3.5, repeat: Infinity }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
            className="absolute bottom-10 sm:bottom-16 md:bottom-20 right-0 sm:right-2 md:right-0 w-32 h-40 sm:w-48 sm:h-56 md:w-64 md:h-72 rounded-xl md:rounded-2xl border-2 md:border-4 border-white overflow-hidden z-20 shadow-2xl rotate-3 bg-cover bg-center cursor-pointer transition-all duration-300"
            style={{ backgroundImage: "url('/images/tiger.jpg')" }}
          />

        </div>
      </div>
    </section>
  );
};

export default AboutUs;