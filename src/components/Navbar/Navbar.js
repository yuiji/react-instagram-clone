import React from 'react'
import NavbarLinks from './NavbarLinks.js'
import SearchBar from './SearchBar.js'
import { Link } from 'react-router-dom'

import '../../styles/Navbar.css'
import logo from '../../assets/images/instagram-logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <SearchBar />
        <NavbarLinks />
      </div>
    </nav>
  )
}


export default Navbar