import React from 'react'
import Title_bar from '../../assets/img/3.png'
import Twitter from '../../assets/img/Twitter.png'
import Youtube from '../../assets/img/YouTube.png'
import Insta from '../../assets/img/Instagram (1).png'

const Footer = () => {
  return (
    <div>
      <div className="Footer_wrap">
        <div className="section1">
        <div className="logo">
        <img src={Twitter} alt="" />
        <img src={Youtube} alt="" />
        <img src={Insta} alt="" />
        </div>
        <div className="bar1">
          <img src={Title_bar} alt="" />
        </div>
        <p>support@openui.design<br/>
          +60 825 876<br/>
          08:00 - 22:00 - Everyday
        </p>
        <div className="bar2">
          <img src={Title_bar} alt="" />
        </div>
        <div className="text">
          <h2>About</h2>
          <h2>Contact</h2>
          <h2>Blog</h2>
        </div>
        </div>

        <div className="section2">
          <p>Copyright© OpenUI All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
