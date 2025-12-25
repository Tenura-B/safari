import React from "react";
import { motion } from "framer-motion";
import { Car, ShieldCheck, Users, Star } from "lucide-react";
import taxiBg from "../../assets/images/city-taxi-blur.jpg";

/* ------------------ Animation Variants ------------------ */

const bgVariants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" }
  }
};

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const textItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

/* ------------------ Component ------------------ */

const TaxiHomeSection = () => {
  const taxiServices = [
    { icon: <Car size={24} />, title: "PREMIUM FLEET", desc: "Luxury sedans maintained to the highest standards for your comfort." },
    { icon: <ShieldCheck size={24} />, title: "SAFETY FIRST", desc: "Highly trained drivers ensuring a secure and smooth ride." },
    { icon: <Users size={24} />, title: "PROFESSIONAL DRIVERS", desc: "Licensed professionals dedicated to safe and timely arrivals." },
    { icon: <Star size={24} />, title: "LUXURY & COMFORT", desc: "Premium interiors and amenities for a first-class travel experience." }
  ];

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-end items-center overflow-hidden">

      {/* 🔥 Animated Background */}
      <motion.div
        variants={bgVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-0"
      >
        <img
          src={taxiBg}
          alt="City Taxi"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-12">

        {/* 🔥 Animated Text */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h1
            variants={textItem}
            className="text-6xl md:text-8xl font-black italic uppercase text-white drop-shadow-lg tracking-tighter"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            YOUR CITY'S <span className="text-[#FFC107]">BEST TAXI</span>
          </motion.h1>

          <motion.p
            variants={textItem}
            className="text-white text-xl md:text-2xl font-medium mt-4 tracking-wide drop-shadow-md"
          >
            Premium rides, anytime, anywhere.
          </motion.p>
        </motion.div>

        {/* 🔥 Animated Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {taxiServices.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-8 rounded-sm shadow-2xl border-l-4 border-[#FFC107] group transition-all duration-300"
            >
              <div className="text-[#FFC107] group-hover:text-black mb-4 transition-colors">
                {service.icon}
              </div>

              <h4 className="text-[12px] font-black uppercase text-zinc-900 mb-2 group-hover:text-black">
                {service.title}
              </h4>

              <p className="text-[10px] text-zinc-500 font-bold leading-tight group-hover:text-black/80">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TaxiHomeSection;
