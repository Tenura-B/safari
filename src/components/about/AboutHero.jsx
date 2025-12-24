import React, { useEffect, useState } from 'react';

const AboutHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-zinc-950">
      
      {/* Background Image with Ken Burns (Slow Zoom) Effect */}
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 ease-out ${
          isLoaded ? 'scale-110' : 'scale-100'
        }`}
        style={{ backgroundImage: "url('/assets/abhero.jpg')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Bottom fade to transition into the next section */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t  to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6">
        
        {/* Subtitle - Fades in and slides down */}
        <h3 className={`text-[#FFC107] font-bold italic uppercase tracking-[0.3em] text-sm md:text-lg mb-4 transition-all duration-500  ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          Explore The Untamed
        </h3>

        {/* Main Title - Large "Scale-In" effect */}
        <h1 
          className={`text-white text-5xl md:text-[120px] font-black italic uppercase leading-none transition-all duration-500 delay-500 drop-shadow-2xl ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          Who We  <span className="text-black" >Are</span>
        </h1>

        {/* Description - Rises up slowly */}
        <p className={`text-white/80 text-base md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          From the dense jungles of Yala to the elephant gatherings of Minneriya,
          we are storytellers of the wild.
        </p>

        {/* Animated Scroll Indicator Dot */}
        <div className={`mt-12 transition-opacity duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-1 h-12 bg-linear-to-b from-[#FFC107] to-transparent mx-auto rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;