import React from 'react';
import bg1 from '../../assets/images/testi1.jpg';
import bg2 from '../../assets/images/testi2.jpg';
import bg3 from '../../assets/images/testi3.jpg';

const testimonials = [
  {
    name: "Avinash Kr",
    role: "Co-Founder at xyz",
    bgImage: bg1,
    quote: "The safari was an unforgettable experience. The attention to detail and the knowledge of the guides made every moment in the wild feel like a discovery."
  },
  {
    name: "Bharat Kunal",
    role: "Manager at xyz",
    bgImage: bg2,
    quote: "Incredible views and premium service. Sleeping under the stars in their luxury tents was the highlight of my trip to Sri Lanka."
  },
  {
    name: "Prabhakar D",
    role: "Founder / CEO at xyz",
    bgImage: bg3,
    quote: "Professionalism at its finest. They managed to find leopards in Yala when no one else could."
  }
];

const Testimonialsection = () => {
  return (
    <section className="py-24 px-6 font-sans" style={{ backgroundColor: '#050505' }}>
      <div className="max-w-6xl mx-auto text-center">

        <h2
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-3xl md:text-4xl font-bold text-orange-500 uppercase tracking-widest"
        >
          Testimonials
        </h2>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1500"
          className="w-20 h-1 bg-orange-500 mx-auto mt-3 mb-16 rounded-full"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          {testimonials.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={index * 200}
              className={`relative overflow-hidden rounded-2xl transition-all duration-500 group border border-white/10 ${
                index === 1
                  ? 'md:scale-110 z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
                  : 'z-10'
              }`}
            >
              {/* BACKGROUND IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.bgImage})` }}
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] group-hover:bg-black/60 transition-colors duration-500" />

              {/* CONTENT */}
              <div className="relative z-10 p-8">
                <div className="text-left">
                  <p className="text-gray-200 text-sm italic mb-8 min-h-[120px]">
                    “{item.quote}”
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-orange-500 font-bold text-lg">
                    {item.name}
                  </h4>
                  <span className="text-white/60 text-[10px] uppercase tracking-[0.2em]">
                    {item.role}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonialsection;
