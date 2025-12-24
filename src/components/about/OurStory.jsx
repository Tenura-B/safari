import React, { useEffect, useState } from 'react';

const OurStory = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('our-story-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        // Trigger animation when top of section is 75% into the viewport
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="our-story-section"
      className="bg-zinc-950 py-24 px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content Column - Slides in from left */}
        <div className={`order-2 lg:order-1 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}>
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className={`h-0.5 bg-[#FFC107] transition-all duration-1000 delay-500 ${isVisible ? 'w-12' : 'w-0'}`}></div>
            <span className="text-[#FFC107] uppercase tracking-[0.3em] font-bold text-xs">
              Our Origin Story
            </span>
          </div>

          {/* Title */}
          <h2 
            className="text-5xl md:text-7xl uppercase italic leading-none mb-8 text-white tracking-tighter"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            Born From <br /> The <span className="text-zinc-500">Wild</span>
          </h2>

          {/* Body Text with staggered fade-in */}
          <div className={`space-y-6 text-zinc-300 leading-relaxed max-w-xl text-base transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <p>
              It started with a single vintage Land Rover and a profound respect for nature. 
              Founded by Rohan Perera, a local naturalist who grew up on the fringes of 
              Yala National Park, our company was born out of a desire to share the magic 
              of Sri Lanka's wildlife authentically.
            </p>
            <p className="border-l-2 border-zinc-800 pl-6 italic">
              We believed that a safari shouldn't just be a drive through a park; it should 
              be an immersive lesson in ecology. Over the last 15 years, we've grown from 
              a one-man operation to a family of passionate guides.
            </p>
          </div>

          <div className={`h-px bg-zinc-800 my-10 transition-all duration-1000 delay-700 ${isVisible ? 'w-full' : 'w-0'}`}></div>

          {/* Statistics Grid - Staggered reveal */}
          <div className="grid grid-cols-3 gap-8">
            {[
              { val: "15+", label: "Years Experience" },
              { val: "10K+", label: "Happy Explorers" },
              { val: "100%", label: "Local Guides" }
            ].map((stat, i) => (
              <div 
                key={i} 
                className={`transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${800 + (i * 100)}ms` }}
              >
                <h4 className="text-[#FFC107] text-4xl font-black italic mb-1">{stat.val}</h4>
                <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest leading-tight">
                  {stat.label.split(' ')[0]}<br/>{stat.label.split(' ')[1]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Column - Drops in with bounce */}
        <div className={`order-1 lg:order-2 relative transition-all duration-1000 cubic-bezier(0.34, 1.56, 0.64, 1) transform ${
          isVisible ? 'opacity-100 translate-x-0 scale-100 rotate-0' : 'opacity-0 translate-x-20 scale-90 rotate-12'
        }`}>
          <div className="relative group">
            {/* White Polaroid Frame */}
            <div className="p-4 bg-white shadow-[0_40px_80px_rgba(0,0,0,0.4)] rounded-sm transform group-hover:-rotate-2 transition-transform duration-500">
              <div className="overflow-hidden">
                <img 
                  src="../../src/assets/images/safari-jeep.jpg" 
                  alt="Safari Jeep" 
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
              </div>
              {/* Bottom space of polaroid for the 'handwritten' feel */}
              <div className="pt-6 pb-2">
                 <p className="font-mono text-zinc-400 text-[10px] uppercase">Expedition #01 // Yala National Park</p>
              </div>
            </div>

            {/* Yellow Quote Banner Overlay - Slides out from under photo */}
            <div 
              className={`absolute -bottom-6 -left-8 bg-[#FFC107] py-4 px-8 shadow-2xl transition-all duration-700 delay-1000 transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              } -rotate-3 hover:rotate-0 cursor-default`}
            >
              <p className="text-black font-black italic text-sm md:text-lg uppercase tracking-tight">
                "The wild doesn't perform for us."
              </p>
            </div>
            
            {/* Background decorative element */}
            <div className="absolute -z-10 top-10 right-10 w-full h-full border-2 border-zinc-800 rounded-sm -rotate-6 transition-transform group-hover:-rotate-12 duration-700"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;