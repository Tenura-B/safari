import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

// ✅ CORRECT IMAGE PATH
import executiveCarImg from "../../assets/images/executive-car.jpg";

/* ---------------- Animation Variants ---------------- */

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const fadeSlideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const fadeSlideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const imageFloat = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
  }
};

const badgePulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
};

/* ---------------- Component ---------------- */

const TaxiCarSection = () => {
  const serviceFeatures = [
    "Experienced chauffeurs",
    "Flight tracking",
    "Flat rates to airport"
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE: CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.header variants={fadeSlideLeft}>
            <h3
              className="text-5xl md:text-7xl font-black italic uppercase text-zinc-900 leading-[0.9] mb-4"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              EXECUTIVE CAR <br />
              <span className="text-zinc-400">SERVICE</span>
            </h3>

            <p className="text-zinc-500 text-lg leading-relaxed max-w-lg mt-6">
              Experience unparalleled luxury with our executive airport fleet.
              Perfect for business travel, night runs, or premium city rides.
            </p>
          </motion.header>

          {/* FEATURES */}
          <ul className="space-y-4">
            {serviceFeatures.map((feature, idx) => (
              <motion.li
                key={idx}
                variants={fadeSlideLeft}
                whileHover={{ x: 8 }}
                className="flex items-center gap-3 text-zinc-500 font-bold uppercase italic text-xs tracking-widest"
              >
                <CheckCircle2 size={18} className="text-[#FFC107]" />
                {feature}
              </motion.li>
            ))}
          </ul>

          <motion.div variants={fadeSlideLeft} className="pt-6">
            <Link to="/contact">
              <motion.button
                whileHover={{ y: -4, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 220 }}
                className="px-14 py-4 border-2 border-zinc-900 text-zinc-900 font-black uppercase tracking-widest text-xs hover:bg-zinc-900 hover:text-white transition-all rounded-lg shadow-md"
              >
                BOOK NOW
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: IMAGE */}
        <motion.div
          variants={fadeSlideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div
            variants={imageFloat}
            animate="animate"
            whileHover={{ scale: 1.03 }}
            className="rounded-[30px] overflow-hidden shadow-2xl"
          >
            <img
              src={executiveCarImg}
              alt="Executive Car Service"
              className="w-full h-100 md:h-125 object-cover"
            />
          </motion.div>

          {/* PRICE BADGE */}
          <motion.div
            variants={badgePulse}
            animate="animate"
            className="absolute bottom-6 right-6 bg-[#1a1a1a] text-[#FFC107] px-6 py-3 rounded-xl font-black text-sm shadow-xl"
          >
            From $10 / Ride
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default TaxiCarSection;
