import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const galleryRef = useRef(null);
  const imagesRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade-ins
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

      // Gallery title
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

      // Gallery images staggered reveal
      gsap.from(imagesRef.current, {
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        scale: 0.85,
        y: 40,
        stagger: 0.2,
        duration: 0.9,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  // High-quality temple images (free to use commercially)
  const templeImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1580130718646-9f694209b207?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    "https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1627308594188-4d19397b9b9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    "https://images.pexels.com/photos/1391639/pexels-photo-1391639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1601024445123-6a6a1f6e1e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  ];

  return (
    <div className="w-full min-h-screen bg-slate-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-700 to-red-800 text-white py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
          Sri Mahalakshmi Temple
        </h1>
        <p className="mt-4 text-xl md:text-2xl">
          A Sacred Place of Peace, Devotion & Tradition
        </p>
      </section>

      {/* About */}
      <section className="fade-section max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-orange-700 mb-6">
          About the Temple
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Sri Mahalakshmi Temple is a historic spiritual center devoted to Goddess
          Mahalakshmi. For generations, devotees from across the country have
          visited this sacred place seeking blessings, prosperity, and peace.
        </p>
      </section>

      {/* Timings & Sevas */}
      <section className="fade-section bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-orange-700 mb-4">
              Darshan Timings
            </h3>
            <ul className="text-lg text-gray-700 space-y-2">
              <li>🕉 Morning: 5:30 AM – 12:30 PM</li>
              <li>🕉 Evening: 4:00 PM – 9:00 PM</li>
              <li>🕉 Abhishekam: 6:00 AM</li>
              <li>🕉 Maha Aarti: 8:30 PM</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-orange-700 mb-4">
              Special Sevas
            </h3>
            <ul className="text-lg text-gray-700 space-y-2">
              <li>🌼 Archana</li>
              <li>🌼 Abhishekam</li>
              <li>🌼 Sahasranama Archana</li>
              <li>🌼 Annadanam</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="fade-section bg-orange-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">
            Temple Announcements
          </h2>
          <div className="bg-white p-6 rounded-lg shadow text-lg text-gray-700 space-y-2">
            <p>📢 Special Pooja on Full Moon Day.</p>
            <p>📢 Annadanam available daily after Maha Aarti.</p>
            <p>📢 Temple remains open on all public holidays.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section ref={galleryRef} className="py-20 bg-gradient-to-b from-orange-50 to-orange-100">
        <h2 className="gallery-title text-4xl md:text-5xl font-bold text-center text-orange-800 mb-16 tracking-tight">
          Temple Gallery
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {templeImages.map((img, index) => (
            <div
              key={index}
              ref={(el) => (imagesRef.current[index] = el)}
              className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] bg-gray-200 cursor-pointer"
            >
              <img
                src={img}
                alt={`Sri Mahalakshmi Temple Gallery ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-lg font-semibold drop-shadow-lg">
                  Sri Mahalakshmi Temple
                </p>
                <p className="text-sm opacity-90">Divine Blessings & Serenity</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-200 py-10 text-center">
        <p className="text-lg">© 2026 Sri Mahalakshmi Temple</p>
        <p className="text-sm mt-2">
          Managed by Temple Administration Committee
        </p>
      </footer>
    </div>
  );
};

export default Home;
