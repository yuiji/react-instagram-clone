import React from 'react'
import NavbarLinks from './NavbarLinks.js'
import SearchBar from './SearchBar.js'

import './Navbar.css'
import logo from '../../assets/images/instagram-logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={logo} alt="" />
        </div>
        <SearchBar />
        <NavbarLinks />
      </div>
    </nav>
  )
}


export default Navbar