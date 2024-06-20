import './App.css';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import { useState, useEffect } from "react";
import Footer from './components/footer/Footer';
import { motion, useScroll, useSpring } from "framer-motion";
import Lottie from 'react-lottie';
import store from './store.json'
import Up from './components/up/Up';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductDetails from './components/intro/productDetails';
import Cart from './components/intro/cart';
import { CartProvider } from './components/cartContext';


function App() {


  const [menuOpen, setMenuOpen] = useState(false)
  const [backOpen, setBackOpen] = useState(false)
  const [loading, setLoading] = useState(false)


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: store,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  useEffect(() => {
    window.onload = () => {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])


  return (
    <CartProvider>
      <Router>
        <div className={"App "} >
          <div className={"App " + (loading && 'appSize')} >

            <motion.div className='progressBar' style={{ scaleX }} />
            {
              loading ?
                <div className='coffeeCont'>
                  <Lottie onload={window.scrollTo(0, 0)} options={defaultOptions} className='cofload' />
                </div>
                :
                <div className={'sections '}>
                  <Topbar backOpen={backOpen} setBackOpen={setBackOpen} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                  <Routes>
                    <Route path='/' element={<Intro />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                  </Routes>
                  <Footer />
                  <Up />
                </div>
            }
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
