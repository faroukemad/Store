import React, {  useState } from 'react'
import './topbar.scss'
import { Link } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";

export default function Topbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <div className={"topbar "+ (menuOpen && 'topbar-fixed')} id='topbar' >
      <div className="topbar-wrapper" >

        <div className="topbar-left">
          <Link to='/' className='topbar-link'>
            <img className='topbar-logo' src={`${process.env.PUBLIC_URL}/assests/logo.svg`} alt="" />
            <div className="topbar-login" to='/'>
              Online Store
            </div>
          </Link>
        </div>
        <div className="topbar-right">
         
            <Link className="topbar-Blog " to='/cart'>
            <TiShoppingCart className='topbar-cart'/>
          </Link>
        </div>
        
      </div>

    </div>


  )
}
