import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './ScrollToTop'

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/work' element={<Work />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
