import React from 'react'
import Menu from '../../assets/img/Menu.svg'
import Logo from '../../assets/img/Logo.svg'
import Search from '../../assets/img/Search.svg'
import Shopping from '../../assets/img/shopping bag.svg'

const Header = () => {
  return (
    <div>
      <div className="Header_wrap">
      <div className="Header">
            <div className="left">
             <img src={Menu} alt="" /></div>
            <div className="center">
             <img src={Logo} alt="" /></div>
            <div className="right">
             <a href="/search">
              <img src={Search} alt="Search" />
            </a>
             <img src={Shopping} alt="" /></div>
        </div>     
    </div>
    </div>
  )
}

export default Header;
