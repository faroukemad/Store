import React, { useRef } from "react";
import './intro.scss'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Lottie from 'react-lottie';
import scroll from '../../scroll.json'
import { Link } from "react-router-dom";

export default function Intro({ menuOpen, setMenuOpen, backOpen, setBackOpen }) {




  return (

    <div className={"intro"} id="intro">

      <div className="intro-wrapper"  >

        <h1 className="intro-h1">Build beautiful  </h1>
        <h1 className="intro-h1">custom WordPress</h1>
        <h1 className="intro-h1">login pages</h1>
        <p className="intro-p">Login Designer gives you the power to design and
          build an on-brand custom WordPress login page.</p>
          <Link to='/plans'className="intro-button">
       Get Login Designer Now</Link>
        <div className="intro-checks">
          <div className="intro-check">
            <img src="assests/check.svg" alt="check" />
          </div>
          <div className="intro-live">Live Editing</div>
          <div className="intro-check">
            <img src="assests/check.svg" alt="check" />
          </div>
          <div className="intro-live">Templates</div>
          <div className="intro-check">
            <img src="assests/check.svg" alt="check" />
          </div>
          <div className="intro-live">Custom Logo</div>
        </div>
      </div>
      <div className="intro-absolute">
      <img src="assests/blue-shape.svg" alt="check" />
      </div>
    </div>
  )
}
