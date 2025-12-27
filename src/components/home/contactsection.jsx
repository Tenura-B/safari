import React, { useEffect, useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="contact-section" 
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-20 overflow-hidden" 
      style={{ backgroundColor: '#050505' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
        
        {/* Left Column: Info */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <span className="text-[#FFC107] uppercase tracking-[0.2em] sm:tracking-[0.4em] font-bold text-[10px] sm:text-xs italic block mb-3 md:mb-4">
            Start Your Journey
          </span>
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic text-white uppercase leading-none mb-6 md:mb-8"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            Get In <span className="text-zinc-700">Touch</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mb-8 md:mb-12 max-w-md leading-relaxed font-medium">
            Whether you're ready to book or just have a few questions about the wildlife, our trackers are standing by.
          </p>

          <div className="space-y-6 md:space-y-8">
            {[
              { icon: <MapPin className="text-[#FFC107]" />, text: "Yala National Park, Sri Lanka" },
              { icon: <Phone className="text-[#FFC107]" />, text: "+94 77 123 4567" },
              { icon: <Mail className="text-[#FFC107]" />, text: "hello@wildpack.com" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-6 group cursor-pointer">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#FFC107] flex items-center justify-center group-hover:bg-[#FFC107] group-hover:border-[#FFC107] transition-all duration-300">
                  {React.cloneElement(item.icon, { size: 18, className: "md:w-5 md:h-5 text-white" })}
                </div>
                <span className="text-zinc-300 font-bold uppercase tracking-widest text-xs sm:text-sm group-hover:text-white transition-colors">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Animated Form */}
        <div className={`relative bg-zinc-900/50 p-6 sm:p-8 md:p-12 border border-zinc-800 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <form className="space-y-6 md:space-y-10">
            {/* Input Fields with Animated Bottom Borders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {['Your Name', 'Email Address'].map((label, i) => (
                <div key={i} className="relative group md:col-span-1">
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-transparent border-b border-zinc-700 py-2 md:py-3 text-white text-sm md:text-base focus:outline-none focus:border-[#FFC107] transition-colors peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-2 md:top-3 text-zinc-500 uppercase text-[10px] sm:text-xs font-bold tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[#FFC107] peer-placeholder-shown:top-2 md:peer-placeholder-shown:top-3">
                    {label}
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FFC107] transition-all duration-500 group-hover:w-full"></div>
                </div>
              ))}
            </div>

            <div className="relative group">
              <textarea 
                rows="4" 
                required 
                className="w-full bg-transparent border-b border-zinc-700 py-2 md:py-3 text-white text-sm md:text-base focus:outline-none focus:border-[#FFC107] transition-colors peer resize-none"
                placeholder=" "
              ></textarea>
              <label className="absolute left-0 top-2 md:top-3 text-zinc-500 uppercase text-[10px] sm:text-xs font-bold tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[#FFC107] peer-placeholder-shown:top-2 md:peer-placeholder-shown:top-3">
                Your Message
              </label>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFC107] transition-all duration-500 group-hover:w-full"></div>
            </div>

            <button className="w-full group relative overflow-hidden bg-[#FFC107] text-black py-4 md:py-5 uppercase font-black italic tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm flex items-center justify-center gap-2 md:gap-3 transition-transform active:scale-95">
              <span className="relative z-10 flex items-center gap-2 md:gap-3">
                Send Message <Send size={14} className="md:w-4 md:h-4 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </form>

          {/* Decorative Corner */}
          <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-[#FFC107]"></div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;