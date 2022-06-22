import React from 'react'
import HomePage from '../../components/HomePage/HomePage'
import Navbar from '../../components/navbar/Navbar'


const LandingSection = () => {
  return (
    <section className="section">
      <Navbar />
      <HomePage />
    </section>
  )
}

export default LandingSection