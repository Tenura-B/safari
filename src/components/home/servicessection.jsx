import React from 'react';
import { Compass, Camera, Tent } from 'lucide-react';
import campingImg from '../../assets/images/camping.jpg';
import photographyImg from '../../assets/images/photoghapy.jpg';
import testiImg from '../../assets/images/testi.jpg';
import geepImg from '../../assets/images/geep.jpg';
import bgImage from '../../assets/images/services-bg.jpg'; // Your background image

const Services = () => {
  return (
    <section className="relative w-full min-h-screen text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* FULL BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Services Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/93"></div> {/* Dark overlay for contrast */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        {/* LEFT TIMELINE */}
        <div className="hidden lg:flex lg:col-span-1 flex-col items-center gap-6 pt-32">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 rounded-full border border-yellow-500/50 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border border-yellow-500 flex items-center justify-center">
                  <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
              {item !== 5 && (
                <div className="w-px h-10 bg-gradient-to-b from-yellow-500/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div className="lg:col-span-11">
          {/* HEADER */}
          <header className="mb-16 relative z-10">
            <h4 className="text-yellow-500 text-2xl font-bold italic tracking-tighter mb-2" style={{ fontFamily: '"Permanent Marker", cursive' }}>
              WHAT WE DO
            </h4>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gray-300 mb-4">
              Sri Lanka Jeep Safari
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-6xl md:text-7xl font-bold uppercase leading-none">
                Wild Services
              </h2>
              <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                Embarking the safari to more beautiful nature. Let's experience the wild adventures with us.
              </p>
            </div>
          </header>

          {/* BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

            {/* CARD 1 */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 h-75 flex flex-col justify-end">
              <img src={geepImg} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition duration-700" alt="Jeep Safari" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-4 border border-yellow-500/30">
                  <Compass className="text-yellow-500" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Guided Safaris</h3>
                <p className="text-xs text-gray-300 max-w-xs mb-6">
                  Expert guidance through the deep jungle trails of Yala and Wilpattu.
                </p>
                <button className="bg-yellow-500 text-black text-[10px] font-bold px-4 py-2 rounded-lg uppercase tracking-widest hover:bg-yellow-400 transition">
                  Explore More
                </button>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col justify-center items-center text-center">
              <img src={photographyImg} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition duration-700" alt="Photography" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-4">
                  <Camera className="text-yellow-500 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Photography</h3>
                <p className="text-[10px] text-gray-400">Capture the majestic moments of the jungle.</p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="rounded-3xl border border-white/10 overflow-hidden h-75">
              <img src={testiImg} className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500" alt="Testimonial" />
            </div>

            {/* CARD 4 */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 h-75 flex flex-col justify-end">
              <img src={campingImg} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition duration-700" alt="Camping" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <Tent className="text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Taxi Service</h3>
                <p className="text-xs text-gray-400 max-w-sm mb-6">
                  Sustainable glamping with premium amenities in the heart of the wild.
                </p>
                <button className="bg-yellow-500 text-black text-[10px] font-bold px-4 py-2 rounded-lg uppercase tracking-widest hover:bg-yellow-400 transition">
                  Explore More
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
