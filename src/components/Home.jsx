import React from 'react'
import './HomeStyles.css'
import Navbar from './Navbar'
import Hero from './Hero';
import Projects from './Projects';
import Footer from './Footer';
const Home = () => {
  return (
    <div>
         <Navbar />
        <Hero />
      <Projects />
      <Footer />
     

    </div>
  )
}

export default Home