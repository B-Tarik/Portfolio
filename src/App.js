import React, { useState, useEffect } from 'react';
import AOS from 'aos';

import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import MyWork from "./components/myWork";
import Contact from "./components/contact";
import Footer from "./components/footer";

import 'aos/dist/aos.css';

// development
// import './App.critcss.scss';
// import './App.scss';

// production
import './assets/gulpCss/grpCssMedia/App.css';

function App() {

  const [isMobile, setIsMobile] = useState(true);
  const [isGrid, setIsGrid] = useState(false);
  const [netSpeed, setNetSpeed] = useState('fast');

  useEffect(() => {
    onResize();
    getNetworkSpeed();
    initAOS();
    window.addEventListener("resize", onResize);
  }, [])


  const onResize = () => {
    const width = window.innerWidth;
    if (width < 800) setIsMobile(true)
    else setIsMobile(false)

    if (width < 1100) setIsGrid(false);
    else setIsGrid(true);
  }

  const getNetworkSpeed = () => {
    const { connection = null } = navigator;
    if(connection === null) return;
    const { effectiveType = "4g" } = connection;
    const netSpeed = /[345]g/.test(effectiveType) ? "fast" : "slow";
    setNetSpeed(netSpeed);
  }

  const initAOS = () => {
    AOS.init({
      disable: window.innerWidth < 800,
      duration: 400,
      easing: "ease-in-out",
      offset: 250,
      once: true
    });
  };

  return (
    <main className="app" role="main">
      <Header />
      <Home isMobile={isMobile} />
      <About netSpeed={netSpeed} />
      <MyWork isMobile={isMobile} isGrid={isGrid} netSpeed={netSpeed} />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
