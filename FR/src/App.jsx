import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './Components/Nav'
import About from './pages/About'

const App = () => {
  return (
    <div className='bg-slate-600 h-screen'>

      <Nav/>

      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/about" element ={<About/>} />
      </Routes>
      <h2>
        HI
      </h2>
      
    </div>
  )
}

export default App