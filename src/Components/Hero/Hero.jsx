import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Building Bright Futures Through Quality Education</h1>
        <p>Welcome to our vibrant school community where every child discovers their potential,
          develops their talents, and grows into confident, caring individuals ready to make a difference in the world.
        </p>
        <button className='btn'>Start Your Journey <img src={dark_arrow}
          alt="" /> </button>
      </div>
    </div>
  )
}

export default Hero