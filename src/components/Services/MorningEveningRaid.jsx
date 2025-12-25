import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import leopardImg from "../../assets/images/leopard-resting.jpg";

const MorningEveningRaid = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#FFC107] uppercase tracking-[0.3em] font-black text-xs">
              FLEXIBLE TIMING
            </span>
            <div className="w-12 h-1 bg-[#FFC107]" />
          </div>

          <h3
            className="text-5xl md:text-7xl font-black italic uppercase text-zinc-900 leading-[0.9] mb-8"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            MORNING OR EVENING <br />
            <span className="text-zinc-400">RAID</span>
          </h3>

          <p className="text-zinc-500 text-lg leading-relaxed mb-10 max-w-lg">
            Short on time? Choose between the golden hour of sunrise or the dramatic
            lighting of sunset. These 4-hour drives are perfect for capturing
            stunning photography and witnessing peak animal activity periods.
          </p>

          <ul className="space-y-4 mb-12">
            {[
              "Choice of 5:00 AM or 2:00 PM start",
              "Refreshments provided",
              "Hotel pickup and drop-off included"
            ].map((feature, idx) => (
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

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-1 lg:order-2"
        >
          <div className="rounded-[30px] overflow-hidden shadow-2xl">
            <img
              src={leopardImg}
              alt="Leopard Resting"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md text-[#FFC107] px-6 py-3 rounded-xl font-black text-sm shadow-xl">
            From $75 / Person
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MorningEveningRaid;
