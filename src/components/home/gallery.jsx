import React from 'react';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import imgAboutUs from '../../assets/images/aboutus.jpg';
import imgHome from '../../assets/images/home.jpg';
import imgGallery from '../../assets/images/gallary.jpg';
import imgBlog from '../../assets/images/blog.jpg';
import imgTDetail from '../../assets/images/t-detail.jpg';
import imgTuos from '../../assets/images/tuos.jpg';
import imgTesti from '../../assets/images/testi.jpg';

const Gallery = () => {
  const images = [
    { id: 1, src: img1, colSpan: 1, rowSpan: 4 },
    { id: 2, src: img2, colSpan: 1, rowSpan: 3 },
    { id: 3, src: img3, colSpan: 1, rowSpan: 3 },

    { id: 4, src: img4, colSpan: 1, rowSpan: 3 },
    { id: 5, src: imgAboutUs, colSpan: 1, rowSpan: 4 },
    { id: 6, src: imgHome, colSpan: 1, rowSpan: 3 },

    { id: 7, src: imgGallery, colSpan: 1, rowSpan: 2 },
    { id: 8, src: imgBlog, colSpan: 1, rowSpan: 3 },
    { id: 9, src: imgTDetail, colSpan: 1, rowSpan: 3 },
    { id: 10, src: imgTuos, colSpan: 1, rowSpan: 2 },

    { id: 11, src: imgTesti, colSpan: 1, rowSpan: 2 },
    { id: 12, src: img1, colSpan: 1, rowSpan: 2 },
    { id: 13, src: img2, colSpan: 1, rowSpan: 3 },
    { id: 14, src: img3, colSpan: 1, rowSpan: 2 },
    { id: 15, src: img4, colSpan: 1, rowSpan: 2 },
  ];

  return (
    <section
      className="relative py-8 px-4 md:px-8 min-h-screen overflow-hidden"
      style={{ backgroundColor: '#050505' }}
    >
      <div className="relative z-20 max-w-[1400px] mx-auto">

        {/* GALLERY GRID */}
        <div
          className="grid gap-2"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: '150px',
          }}
        >
          {images.map((img, index) => (
            <div
              key={img.id}
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={index * 150}
              className="relative overflow-hidden rounded-md bg-[#4a1e4a] group cursor-pointer border-2 border-white"
              style={{
                gridColumn: `span ${img.colSpan}`,
                gridRow: `span ${img.rowSpan}`,
              }}
            >
              <img
                src={img.src}
                alt={`Gallery image ${img.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
