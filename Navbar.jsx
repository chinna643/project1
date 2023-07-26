import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/navbar.css"
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className="logo">
        <HashLink smooth to="#home">LOGO</HashLink>
      </div>
      <div className="nav-links">
        <li><HashLink smooth to="/#home">Home</HashLink></li>
        <li><HashLink smooth to="/#about">About</HashLink></li>
        <li><HashLink smooth to="/#brands">Brands</HashLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
      </div>
    </nav>
  )
}

export default Navbar