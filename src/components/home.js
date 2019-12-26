import React, { useState, useEffect, useRef } from 'react';


function Home({ isMobile }) {

  const [vantaEffect, setVantaEffect] = useState(0)
  const homeRef = useRef();
  const progressBarRef = useRef();

  const cdnThree = "https://cdnjs.cloudflare.com/ajax/libs/three.js/100/three.min.js";
  const cdnVanta = "https://www.vantajs.com/dist/vanta.birds.min.js";
  const localThree = "/assets/scripts/three.min.js"
  const localVanta = "/assets/scripts/vanta.birds.min.js";
  let appendCount = 0;

  let scrollTop = 0;
  let scrollBottom = 0;
  let scrollPercent = 0;
  let progressBarOpacity = false;

  useEffect(() => {
    onScroll(); 
    window.addEventListener("scroll", onScroll, { passive: true });
  }, [])

  useEffect(() => {
    if (isMobile) return;
    
    if (!vantaEffect) {
      window.addEventListener("load", initOnLoad);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [isMobile, vantaEffect])

  const onScroll = () => {
    scrollTop = document.documentElement["scrollTop"] || document.body["scrollTop"];
    scrollBottom = (document.documentElement["scrollHeight"] || document.body["scrollHeight"]) - document.documentElement.clientHeight;
    scrollPercent = scrollTop / scrollBottom;
    
    progressBarRef.current.style.setProperty("--scroll", scrollPercent);

    if (!progressBarOpacity && homeRef.current.scrollHeight < scrollTop) {
      progressBarOpacity = true;
      progressBarRef.current.style.setProperty("opacity", 1);
      return;
    }

    if (progressBarOpacity && homeRef.current.scrollHeight > scrollTop) {
      progressBarOpacity = false;
      progressBarRef.current.style.setProperty("opacity", 0);
      return;
    }
    
  };

  const initOnLoad = () => {
    addScriptsNodes(cdnThree, cdnVanta, localThree);
  }

  const addScriptsNodes = (script, scriptOnload, scriptOnError) => {
    const nodeScript = document.createElement('script');
    nodeScript.src = script;
    nodeScript.async = true;
    
    if(appendCount > 4) return;
    document.head.appendChild(nodeScript);
    appendCount += 1;

    nodeScript.onload =  function() {
      if (window.VANTA && window.VANTA.BIRDS) { initVanta(); return }
      if (scriptOnload === undefined) return;
       addScriptsNodes(scriptOnload, undefined, localVanta);
    };

    nodeScript.onerror =  function() {
      if (scriptOnError === undefined) return;
       addScriptsNodes(scriptOnError, cdnVanta);
    };
  }

  const initVanta = () => {

    setVantaEffect(
      window.VANTA.BIRDS({
        el: homeRef.current,
        backgroundAlpha: 0.0,
        color1: 0x5e8ac8,
        color2: 0xdcf8ff,
        separation: 100.0,
        alignment: 50.0,
        cohesion: 1.0,
        quantity: 3.0
      })
    );
    document
      .getElementsByClassName("vanta-canvas")[0]
      .style.setProperty("opacity", 1);
  };

  return (
    <section ref={homeRef} id="home" className="home">
      <div className="home-content">
        <h1>
          Web Developer &amp; Designer{" "}
          <span className="home-slogan">Making the web great again ...</span>
        </h1>
        <div className="home-cta-btns">
          <a href="#about" className="home-btn home-btn--vmw">
            <span>View my Work</span>
          </a>

          <a href="#contact" className="home-btn home-btn--git">
            Get in Touch
          </a>
        </div>
      </div>
      <div ref={progressBarRef} className="js_progress-bar"></div>
    </section>
  );
}

export default Home;