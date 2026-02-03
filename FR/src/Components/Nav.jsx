import React, { useLayoutEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import gsap from 'gsap'

const Nav = () => {
  const navRef = useRef(null)
  const leftRef = useRef(null)
  const centerRef = useRef(null)
  const rightRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      })

      gsap.from([leftRef.current, centerRef.current, rightRef.current], {
        opacity: 0,
        y: -20,
        stagger: 0.15,
        duration: 0.5,
        delay: 0.2,
        ease: 'power2.out',
      })
    }, navRef)

    return () => ctx.revert()
  }, [])

  return (
    <nav
      ref={navRef}
      className="bg-orange-600 h-12 w-full flex items-center px-6 font-mono text-lg text-black"
    >
      
      <div
        ref={leftRef}
        className="flex items-center gap-6 bg-red-900 px-6 py-1 rounded-md text-white"
      >
        <NavLink to="/" className="hover:text-yellow-300 transition">
          Home
        </NavLink>
        <span className="cursor-pointer hover:text-yellow-300 transition">
          Guides
        </span>
      </div>


      <div
        ref={centerRef}
        className="flex flex-1 mx-8 items-center gap-4 bg-black px-4 py-1 rounded-md"
      >
        <input
          type="search"
          placeholder="Search…"
          className="flex-1 px-3 py-1 rounded bg-slate-200 text-gray-900 placeholder:text-gray-500 outline-none"
        />
        <span className="text-white cursor-pointer hover:text-orange-400 transition">
          Mythology
        </span>
        <span className="text-white cursor-pointer hover:text-orange-400 transition">
          Tools
        </span>
      </div>

      <div ref={rightRef}>
        <Link
          to="/about"
          className="text-black font-semibold hover:text-white transition"
        >
          About Us
        </Link>
      </div>
    </nav>
  )
}

export default Nav
