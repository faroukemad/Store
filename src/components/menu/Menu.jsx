import React,{useEffect} from 'react'
import './menu.scss'
import { useAnimation, motion } from "framer-motion";
import {useInView} from "react-intersection-observer";
import Menuslider from './Menuslider';

export default function Menu() {

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
    <div className='Menu' id="menu">
        <div className="wrapper">
            <Menuslider/>
            <div className="products1">
            <FadeInWhenVisible >

            <div className='menu1'>

            <div className="imgCont">
            <img src="assests/menu-1.png" alt=''></img>
            </div>
            <h2>Arabica</h2>
            <p>  One of the most common types of coffee beans, known for its mild flavor and low acidity
                , Grown at high altitudes.
                 </p>
                 <div className='read'><a href="https://www.thoughtco.com/what-is-arabica-coffee-2353016" target="_blank" rel="noreferrer" >Read More</a></div>

            </div>
            </FadeInWhenVisible >
            <FadeInWhenVisible2 >

            <div className='menu2'>

            <div className="imgCont">
            <img src="assests/menu-2.png" alt=''></img>
            </div>
            <h2> Robusta</h2>
            <p> A type of coffee bean with a stronger and harsher taste than Arabica beans. 
                It is often used in espresso  to add a crema to the shot. </p>
                <div className='read'><a href="https://nguyencoffeesupply.com/blogs/news/what-is-robusta-coffee" target="_blank" rel="noreferrer" >Read More</a></div>

            </div>
            </FadeInWhenVisible2 >
            <FadeInWhenVisible3 >

            <div className='menu3'>

            <div className="imgCont">
            <img src="assests/menu-3.png" alt=''></img>
            </div>
            <h2> Liberica</h2>
            <p> A rare type of coffee bean with a distinctively fruity and floral flavor.
                 It is grown primarily in West Africa and Southeast Asia. </p>
                 <div className='read'><a href="https://coffeeaffection.com/liberica-coffee-beans-facts/" target="_blank" rel="noreferrer" >Read More</a></div>

            </div>
            </FadeInWhenVisible3 >


            </div>


            <div className="products2">
            <FadeInWhenVisible >

            <div className='menu1'>

            <div className="imgCont">
            <img src="assests/menu-4.png" alt=''></img>
            </div>
            <h2> Excelsa</h2>
            <p>  A type of coffee bean with a tart and fruity flavor that is often used in blends to add complexity. </p>
            <div className='read'><a href="https://perfectdailygrind.com/2021/05/what-is-excelsa-coffee/" target="_blank" rel="noreferrer" >Read More</a></div>

            </div>
            </FadeInWhenVisible >
            <FadeInWhenVisible2 >

            <div className='menu2'>

            <div className="imgCont">
            <img src="assests/menu-5.png" alt=''></img>
            </div>
            <h2> Maragogype</h2>
            <p> A type of coffee bean also known as "elephant beans"
                 due to their large size. They have a mild flavor and low acidity. </p>
                 <div className='read'><a href=" https://fullcoffeeroast.com/maragogype-coffee/" target="_blank" rel="noreferrer" >Read More</a></div>

            </div>
            </FadeInWhenVisible2 >
            <FadeInWhenVisible3>

            <div className='menu3'>

            <div className="imgCont">
            <img src="assests/menu-6.png" alt=''></img>
            </div>
            <h2> Geisha</h2>
            <p> A high-end type of coffee bean with a complex and delicate flavor profile,
                 It is often grown in Panama. </p>
                 <div className='read'><a href="https://www.craftcoffeeguru.com/what-is-geisha-coffee/" target="_blank" rel="noreferrer" >Read More</a></div>

            </div>
            </FadeInWhenVisible3 >


            </div>


        </div>

    </div>
  )
}
