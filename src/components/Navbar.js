import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/images/instagram-logo.png'
import avatar from '../assets/images/avatar.jpg'
import { ReactComponent as HomeSvg } from '../assets/icons/home.svg'
import { ReactComponent as MessageSvg } from '../assets/icons/message.svg'
import { ReactComponent as FindSvg } from '../assets/icons/find.svg'
import { ReactComponent as FlowSvg } from '../assets/icons/flow.svg'

const Navbar = () => {
  const [inputStyle, setInputStyle] = useState(false)
  const onFocusOutHandler = () => {
    setInputStyle(false)
  }
  const onFocusHandler = () => {
    setInputStyle(true)
  }

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbar__search">
          {inputStyle ?
            <div className="navbar__input-container">
              <p>&#xF002;</p>
              <input onBlur={onFocusOutHandler} className="navbar__input--focus" type="text" placeholder="Ara" />
              <button onClick={onFocusOutHandler}>X</button>
            </div>
            : <input onFocus={onFocusHandler} className="navbar__input" type="text" placeholder="&#xF002;  Ara" />
          }
        </div>
        <div className="navbar__links">
          <a href="/">
            <HomeSvg />
          </a>
          <a href="/">
            <MessageSvg />
          </a>
          <a href="/">
            <FindSvg />
          </a>
          <a href="/">
            <FlowSvg />
          </a>
          <a href="/">
            <img src={avatar} alt="" />
          </a>
        </div>
      </div>
    </nav>
  )
}


export default Navbar