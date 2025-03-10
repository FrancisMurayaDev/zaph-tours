import "./Header.css";

import React from 'react'

function HeaderTop () {
  return (
    <div className="header-top">
      <HeaderLogo />
      <HeaderButton />
    </div>
  )
}

function HeaderLogo () {
  return (
    <p className="logo-text"> <span>zaph</span> tours</p>
  )
}

function HeaderButton () {
  return (
    <div className="header-button">
      <button>contact us</button>
    </div>
  )
}







function HeaderNavigation () {
  return (
    <div className="header-navigation">
      <HeaderIcons />
    </div>
  )
}

function HeaderIcons({icon, text}) {
  return (
    <div className="header-icons">
      {icon}
      
    </div>
  )
}

function NavigationLinks () {}

function Header() {
  return (
    <div>
      <HeaderTop />
      <HeaderNavigation />
    </div>
  )
}

export default Header
