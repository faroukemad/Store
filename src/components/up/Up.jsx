import React,{useRef } from 'react'
import './up.scss'
import Lottie from 'react-lottie';
import arrow  from '../../uparrow.json'

export default function Up() {

    const lottieRef = useRef(null);

  const handleClick = () => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  }

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: arrow,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    
  return (
    <div className='Up'>
        <div className="wrapper">
            <div className="upCircle" >
            <div className="scroll" onClick={handleClick}> 
            <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Lottie ref={lottieRef} options={defaultOptions}
           
             
            /></a></div>
            </div>
        </div>

    </div>
  )
}
