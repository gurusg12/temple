import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const galleryRef = useRef(null);
  const imagesRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.fade-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
        });
      });

      gsap.from('.gallery-title', {
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(imagesRef.current, {
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 60,
        scale: 0.92,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  // Real temple images — should load properly
  const templeImages = [
    // South Indian style with gopuram
    'https://images.unsplash.com/photo-1580130379624-3a069adbffc5?w=900',
    'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=900',
    'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=900',
    
    // Temple interior / lamps / devotion feel
    'https://images.unsplash.com/photo-1601024445123-6a6a1f6e1e6e?w=900',
    'https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?w=900',
    'https://images.pexels.com/photos/1391639/pexels-photo-1391639.jpeg?w=900',
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-700 to-red-800 text-white py-20 md:py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          Sri Mahalakshmi Temple
        </h1>
        <p className="mt-5 text-xl md:text-2xl">
          A Sacred Place of Peace, Devotion & Tradition
        </p>
      </section>

      {/* About */}
      <section className="fade-section max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-orange-700 mb-6">
          About the Temple
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Sri Mahalakshmi Temple is a revered spiritual center dedicated to Goddess Mahalakshmi. 
          Devotees from far and wide come here to seek blessings for wealth, peace, and happiness.
        </p>
      </section>

      {/* Gallery – simple & clean */}
      <section ref={galleryRef} className="py-16 md:py-20 bg-gradient-to-b from-orange-50 to-white">
        <h2 className="gallery-title text-4xl md:text-5xl font-bold text-center text-orange-800 mb-12 md:mb-16">
          Temple Gallery
        </h2>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {templeImages.map((src, index) => (
            <div
              key={index}
              ref={(el) => (imagesRef.current[index] = el)}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <img
                src={src}
                alt={`Sri Mahalakshmi Temple ${index + 1}`}
                loading="lazy"
                className="w-full h-64 md:h-72 object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400/ccc/333?text=Image+Not+Loading';
                  console.log('Failed to load image:', src);
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center">
        <p className="text-lg">© {new Date().getFullYear()} Sri Mahalakshmi Temple</p>
        <p className="mt-2 text-sm">
          Managed with devotion by the Temple Committee
        </p>
      </footer>
    </div>
  );
};

export default Home;
