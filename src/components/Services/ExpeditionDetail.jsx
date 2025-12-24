import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import elephantImg from '../../assets/images/elephant.jpg'; // Path to your elephant image

const ExpeditionDetail = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: IMAGE WITH PRICING BADGE */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={elephantImg} 
              alt="Full Day Expedition Elephant" 
              className="w-full h-[450px] object-cover" 
            />
          </div>
          
          {/* Pricing Badge */}
          <div className="absolute bottom-8 right-8 bg-zinc-900/90 backdrop-blur-md text-[#FFC107] px-6 py-3 rounded-xl font-bold text-sm shadow-2xl border border-zinc-800">
            From $120 / Person
          </div>
        </motion.div>

        {/* RIGHT SIDE: CONTENT & FEATURES */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Subheader Accent */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-[#FFC107]"></div>
            <span className="text-[#FFC107] uppercase tracking-[0.3em] font-bold text-xs italic">
              Most Popular
            </span>
          </div>

          {/* Main Title with Permanent Marker Font */}
          <h3 
            className="text-5xl md:text-6xl font-black italic uppercase text-zinc-900 leading-[0.9] mb-8"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            The Full Day <br /> 
            <span className="text-zinc-400">Expedition</span>
          </h3>

          <p className="text-zinc-500 text-lg leading-relaxed mb-10 max-w-lg">
            Immerse yourself in a 12-hour adventure spanning dawn to dusk. Witness the jungle wake up with the sunrise and hunt as the sun sets.
          </p>

          {/* Feature List */}
          <ul className="space-y-5 mb-12">
            {[
              "Includes breakfast & picnic lunch inside the park",
              "Dedicated naturalist guide",
              "Visit to ancient ruins within the reserve"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-4 text-zinc-700 font-semibold text-sm uppercase tracking-tight">
                <CheckCircle2 size={20} className="text-[#FFC107] flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <button className="px-12 py-5 border-2 border-zinc-900 text-zinc-900 font-black uppercase italic tracking-[0.2em] text-sm hover:bg-zinc-900 hover:text-white transition-all duration-300 rounded-lg shadow-lg active:scale-95">
            Book Now
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ExpeditionDetail;