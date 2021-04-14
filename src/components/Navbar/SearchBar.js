import React, { useState } from 'react'
import '../../styles/SearchBar.css'

const SearchBar = () => {
  const [inputStyle, setInputStyle] = useState(false)
  const onFocusOutHandler = () => {
    setInputStyle(false)
  }
  const onFocusHandler = () => {
    setInputStyle(true)
  }
  return (
    <div className="navbar__search">
      <i className={inputStyle ? "fas fa-search" : "fas fa-search  input__icon"}></i>
      <input 
      onFocus={onFocusHandler} onBlur={onFocusOutHandler} 
      className={inputStyle ? "search__input--focus" : "search__input"} 
      type="text" 
      placeholder="Search" />
      {inputStyle ? <button onClick={onFocusOutHandler}><i class="fas fa-times-circle"></i></button> : null}  
    </div>
  )
}

export default SearchBar
