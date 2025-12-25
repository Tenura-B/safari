import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// ✅ FIXED PATH (NO /src)
import tentImg from "../../assets/images/bush-camp-tent.jpg";

const CampSection = () => {
  const features = [
    "Full board luxury tented accommodation",
    "Night walk with infrared equipment",
    "Private chef and butler service"
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src={tentImg}
              alt="Luxury Bush Camp"
              className="w-full h-[450px] md:h-[550px] object-cover"
            />
          </div>

          {/* PRICE BADGE */}
          <div className="absolute bottom-8 right-8 bg-black/90 backdrop-blur-md text-[#FFC107] px-8 py-4 rounded-2xl font-black text-sm shadow-xl">
            From $350 / Night
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-1 bg-[#FFC107]" />
            <span className="text-[#FFC107] uppercase tracking-[0.3em] font-black text-xs">
              ULTIMATE EXPERIENCE
            </span>
          </div>

          <h3
            className="text-5xl md:text-7xl font-black italic uppercase text-zinc-900 leading-[0.9]"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            OVERNIGHT <br />
            <span className="text-zinc-400">BUSH CAMP</span>
          </h3>

          <p className="text-zinc-500 text-lg leading-relaxed max-w-lg">
            Sleep under a blanket of stars in the heart of the sanctuary. Our luxury
            mobile camps offer the thrill of the wild with the comforts of a hotel.
          </p>

          {/* FEATURES */}
          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-zinc-500 font-medium text-sm"
              >
                <CheckCircle2 size={18} className="text-[#FFC107]" />
                {feature}
              </li>
            ))}
          </ul>

          <button className="px-12 py-4 border-2 border-zinc-900 text-zinc-900 font-black uppercase tracking-widest text-xs hover:bg-zinc-900 hover:text-white transition-all rounded-lg shadow-md">
            BOOK NOW
          </button>
        </div>

      </div>
    </section>
  );
};

export default CampSection;
