import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const galleryRef = useRef(null);
  const imagesRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Simple section fade in
      gsap.utils.toArray('.fade-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power2.out',
        });
      });

      // Gallery title fade in
      gsap.from('.gallery-title', {
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top 80%',
          markers: false, // change to true if you want to debug trigger points
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power2.out',
      });

      // Very simple image fade + slight lift
      gsap.from(imagesRef.current, {
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  // Very reliable public images (direct full-size links)
  const templeImages = [
    'https://images.unsplash.com/photo-1580130718646-9f694209b207?w=800',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    'https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?w=800',
    'https://images.unsplash.com/photo-1627308594188-4d19397b9b9f?w=800',
    'https://images.pexels.com/photos/1391639/pexels-photo-1391639.jpeg?w=800',
    'https://images.unsplash.com/photo-1601024445123-6a6a1f6e1e6e?w=800',
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Sri Mahalakshmi Temple</h1>
        <p className="mt-4 text-xl">
          A Sacred Place of Peace, Devotion & Tradition
        </p>
      </section>

      {/* About */}
      <section className="fade-section max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-orange-700 mb-6">About the Temple</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Sri Mahalakshmi Temple is a historic spiritual center devoted to Goddess Mahalakshmi.
          Devotees visit this sacred place seeking blessings, prosperity, and inner peace.
        </p>
      </section>

      {/* Gallery – very simple version for debugging */}
      <section ref={galleryRef} className="py-16 bg-orange-50">
        <h2 className="gallery-title text-4xl font-bold text-center text-orange-800 mb-12">
          Temple Gallery
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templeImages.map((src, index) => (
            <div
              key={index}
              ref={(el) => (imagesRef.current[index] = el)}
              className="rounded-lg overflow-hidden shadow-md bg-white"
            >
              <img
                src={src}
                alt={`Temple image ${index + 1}`}
                loading="lazy"
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400?text=Image+Failed';
                  console.log('Image failed to load:', src);
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Simple footer */}
      <footer className="bg-gray-800 text-gray-200 py-8 text-center">
        <p>© 2026 Sri Mahalakshmi Temple</p>
      </footer>
    </div>
  );
};

export default Home;
