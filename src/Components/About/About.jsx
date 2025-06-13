import React from 'react'
import './About.css'
import about_img from '../../assets/program2.jpg'
import play_icon from '../../assets/play.png'

const About = () => {
  return (
    <div className='about'>
    <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
    </div>
    <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Building Tomorrow's Leaders Today !!!</h2>
        <p>Harvard University, founded in 1636, is the oldest institution of higher education in the United States. It is located in Cambridge, Massachusetts, and is part of the Ivy League.
         The university has a rich history of academic excellence and leadership.</p>
         <p>Harvard offers a wide range of undergraduate and graduate programs across various fields. Its faculty includes Nobel laureates, Pulitzer Prize winners, and leading researchers. 
         The campus is known for its historic architecture and vibrant student life.</p>
         <p>Harvard’s global influence is seen through its alumni, which include U.S. presidents, CEOs, and innovators. It emphasizes research, critical thinking, and community service.
          The university also provides generous financial aid to ensure accessibility.</p>
    </div>
      
    </div>
  )
}

export default About
