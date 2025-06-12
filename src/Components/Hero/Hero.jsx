import React from 'react'
import './Hero.css'
import arrow from '../../assets/right-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Technology with Purpose, Education with Vision </h1>
        <p>
           Welcome to the official website of <span>Himalayan Scholars</span> , 
           where education meets innovation and tradition. 
           Our platform serves as a central hub for students, parents, teachers,
            and the community to stay connected and informed. 
        </p>
        <button className='btn'>Explore more <img src={arrow}/></button>
      </div>
    </div>
  )
}

export default Hero
