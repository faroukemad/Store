import React, { useEffect} from "react";
import { useAnimation, motion } from "framer-motion";
import {useInView} from "react-intersection-observer";
import './about.scss';
import {BiCoffee} from 'react-icons/bi'
import {CiCoffeeBean} from 'react-icons/ci'
import {MdOutlineCoffeeMaker} from 'react-icons/md'
import Aboutslider from './Aboutslider';


  const About = () => {
   
   
    function FadeInWhenVisible({ children }) {
      const controls = useAnimation();
      const [ref, inView] = useInView();
      
useEffect(() => {
if (inView) {
  controls.start("visible");
}
}, [controls, inView]);


return (
  <motion.div
  ref={ref}
  animate={controls}
  initial="hidden"
  transition={{ duration: 1.5 }}
  variants={{
  visible: { opacity: 1,y:0, scale: 1 },
  hidden: { opacity: 0,y:100, scale: 1 }
  }}
  >
  {children}
  </motion.div>
  );
  }


  function FadeInWhenVisible2({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    
  useEffect(() => {
  if (inView) {
  controls.start("visible");
  }
  }, [controls, inView]);
  
  return (
  <motion.div
  ref={ref}
  animate={controls}
  initial="hidden"
  transition={{ duration: 1.5,delay:0.3 }}
  variants={{
  visible: { opacity: 1,y:0, scale: 1 },
  hidden: { opacity: 0,y:100, scale: 1 }
  }}
  >
  {children}
  </motion.div>
  );
  }

  function FadeInWhenVisible3({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    
  useEffect(() => {
  if (inView) {
  controls.start("visible");
  }
  }, [controls, inView]);
  
  return (
  <motion.div
  ref={ref}
  animate={controls}
  initial="hidden"
  transition={{ duration: 1.5,delay:0.6 }}
  variants={{
  visible: { opacity: 1,y:0, scale: 1 },
  hidden: { opacity: 0,y:100, scale: 1 }
  }}
  >
  {children}
  </motion.div>
  );
  }

    
  return (
    <div className='about' id='about'>
        <div className="wrapper">
          <div className="aboutDiv">
          <Aboutslider/>
          </div>
            <div className="slides">
              <FadeInWhenVisible >
            <div className="slide2">

              <CiCoffeeBean className="coffee2"/>
              <h1 className='coffeeh12'> Productivity-Boosting</h1>
              <p className='coffeep2'>Recent research suggests that drinking coffee can improve focus and increase productivity, 
              making it a popular choice for workers <span> and students alike.</span> </p>
              </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible2>
            <div className="slide3">

                <MdOutlineCoffeeMaker className="coffee3"/>
                <h1 className='coffeeh13'> Heart-Healthy</h1>
                <p className='coffeep3'>Studies have found that regularly drinking coffee may decrease the risk of developing heart disease, 
                thanks to its antioxidant and <span>anti-inflammatory properties.</span></p>
                </div>
                </FadeInWhenVisible2>
                <FadeInWhenVisible3>
              <div className="slide1">

                <BiCoffee className="coffee1"/>
                <h1 className='coffeeh1'> Trendy Specialty</h1>
                <p className='coffeep'>The popularity of specialty coffee shops continues to grow, with consumers seeking out unique and high-quality coffee experiences,
                 from single-origin brews to artisanal espresso <span>drinks.</span></p>
              </div>
              </FadeInWhenVisible3>
         
            </div>
            
            
        </div>



    </div>
  )
}
export default About;