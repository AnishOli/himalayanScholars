import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.png'

const Navbar = () => {
  return (
    <nav className='container'> 
      <img src={logo} alt="" className='logo'/> 
      <ul>
        <li>HOME</li>
        <li>PROGRAM</li>
        <li>ABOUT US</li>
        <li>CAMPUS</li>
        <li>TESTIMONIALS</li>
        <li><button className='btn'>CONTACT US</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
