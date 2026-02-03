import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const galleryRef = useRef(null)
  const imagesRef = useRef([])

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
        })
      })

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
      })

      // Gallery images
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
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="w-full min-h-screen bg-slate-100 text-gray-900">

   
      <section className="bg-gradient-to-r from-orange-700 to-red-800 text-white py-24 text-center">
        <h1 className="text-5xl font-bold tracking-wide">
          Sri Mahalakshmi Temple
        </h1>
        <p className="mt-4 text-xl">
          A Sacred Place of Peace, Devotion & Tradition
        </p>
      </section>

     
      <section className="fade-section max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-orange-700 mb-6">
          About the Temple
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Sri Mahalakshmi Temple is a historic spiritual center devoted to Goddess
          Mahalakshmi. For generations, devotees from across the country have
          visited this sacred place seeking blessings, prosperity, and peace.
        </p>
      </section>

     
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

 
      <section
        ref={galleryRef}
        className="py-20 bg-orange-100"
      >
        <h2 className="gallery-title text-4xl font-semibold text-center text-orange-800 mb-14">
          Temple Gallery
        </h2>

        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            '/images/temple1.jpg',
            '/images/temple2.jpg',
            '/images/temple3.jpg',
            '/images/temple4.jpg',
            '/images/temple5.jpg',
            '/images/temple6.jpg',
          ].map((img, index) => (
            <div
              key={index}
              ref={(el) => (imagesRef.current[index] = el)}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              <img
                src={img}
                alt="Temple"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>
          ))}
        </div>
      </section>

     
      <footer className="bg-slate-800 text-slate-200 py-8 text-center">
        <p>© 2026 Sri Mahalakshmi Temple</p>
        <p className="text-sm mt-1">
          Managed by Temple Administration Committee
        </p>
      </footer>

    </div>
  )
}

export default Home
