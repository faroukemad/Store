import React, { useRef, useState } from 'react'
import './topbar.scss'
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import coffeeLove from '../../coffee-love.json'
import { Link } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa";

export default function Topbar({ backOpen, setBackOpen }) {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (

    <div className={"topbar "+ (menuOpen && 'topbar-fixed')} id='topbar' >
      <div className="topbar-wrapper" >

        <div className="topbar-left">
          <Link to='/' className='topbar-link'>
            <img className='topbar-logo' src="assests/logo.svg" alt="" />
            <div className="topbar-login" to='/'>
              Login designer
            </div>
          </Link>
        </div>
        <div className="topbar-right">
          <Link className="topbar-Blog element" to='/blog'>
            Blog
          </Link>
          <Link className="topbar-Pricing element" to='/plans'>
            Pricing
          </Link>

          <a href="https://objectsws.atlassian.net/servicedesk/customer/portal/19" target='_blank' rel="noreferrer" className="topbar-get element">Get Support</a>

          <Link className="topbar-viewplans btnn" to='/plans'>
            View Plans</Link>
        </div>
        <div className="topbar-right2">
          <button className="topbar-menu" onClick={toggleMenu}>  {menuOpen ? "Close" : "Menu"}</button>
        </div>
        {menuOpen && (
          <div className="topbar-list-menu">
            <a className='topbar-a' href="https://wordpress.org/support/plugin/login-designer/" target='_blank' rel="noreferrer">
              <div className="topbar-support">Support</div>
            </a>
            <Link to='/plans' className='topbar-a' onClick={toggleMenu}>
              <div className="topbar-buynow">Buy Now</div></Link>
            <a className='topbar-a' href="https://twitter.com/logindesigner" target='_blank' rel="noreferrer">
              <FaTwitter className="topbar-twitter" />
            </a>
          </div>
        )}
      </div>

    </div>


  )
}
