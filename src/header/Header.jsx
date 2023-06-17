import React from 'react'
import "./Header.css"
import greenplace from "./../assets/images/02.jpg"

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
        <img className='headerImage' src={greenplace} alt="" />
      </div>
    </div>
  )
}
