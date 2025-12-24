import React from "react";
import { motion } from "framer-motion";
import { Car, Compass, Camera } from "lucide-react";
import sectionBg from "../../assets/images/safari-jeep.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: <Car size={32} />,
      title: "PREMIUM FLEET",
      desc: "Luxury 4x4 jeeps equipped for rugged terrain without compromising comfort."
    },
    {
      icon: <Compass size={32} />,
      title: "EXPERT GUIDES",
      desc: "Certified naturalists with deep knowledge of local wildlife behavior."
    },
    {
      icon: <Camera size={32} />,
      title: "PHOTO TOURS",
      desc: "Specialized positioning and timing for the perfect wildlife shot."
    }
  ];

  return (
    // 🔥 Pull section up to cancel parent padding
    <section className="relative w-full -mt-24 min-h-screen flex items-center overflow-hidden bg-black">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src={sectionBg}
          alt="Safari Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-24 pb-24 px-6 md:px-12 lg:px-24">
        
        {/* HEADER */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#FFC107] uppercase tracking-[0.4em] font-black italic text-xs block mb-2"
          >
            WHAT WE OFFER
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black italic uppercase text-white leading-none"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            SAFARI <span className="text-[#FFC107]">EXPERTISE</span>
          </motion.h2>
        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/95 p-10 rounded-xl shadow-2xl border-l-[10px] border-[#FFC107] group hover:bg-[#FFC107] transition-all duration-300"
            >
              <div className="text-[#FFC107] group-hover:text-black mb-6">
                {service.icon}
              </div>

              <h4 className="text-xl font-black uppercase text-zinc-900 mb-4 group-hover:text-black">
                {service.title}
              </h4>

              <p className="text-zinc-500 text-sm group-hover:text-black/80 font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
