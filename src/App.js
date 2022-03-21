import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Rendering from './components/Rendering';
import { scroller} from "react-scroll";
import Content from './components/Content';
import {ReactComponent as Arrow} from './assets/Angle-down.svg';


// const style1 = {
//   height: '100vh',
//   width: '100vw',
//   backgroundColor: 'black',
//   maxWidth: '100%',
// }

function App () {

  const [isKorean, setIsKorean] = useState(true);

  const [position, setPosition] = useState(0);


  const changeLanguage = () => {
    setIsKorean(!isKorean)
  }

  const toTheNext = () => {
    scroller.scrollTo('project', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  function onScroll() {
    if (window.scrollY > 600) {
      return
    } else {
      setPosition(window.scrollY / 500);
    }
  }

  
  useEffect(() => {
    if (window.scrollY > 500) {
      setPosition(1)
    }
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);





  return (
    <>
      {/* <h1 style={{marginTop: 0, color: 'white', zIndex: 31}}>{position}이다!!!</h1> */}
      <Navbar position={position} isKorean={isKorean} changeLanguage={changeLanguage} />
      <section id="model" style={{height: '100vh', width: '100vw', backgroundColor: 'black', maxWidth: '100%'}}>
        {/* <div id="mint">
          <button>Mint</button>
          <button>OpenSea</button>
        </div> */}
        <div id="banner" className="blink" onClick={toTheNext}>
          <h3>Start</h3>
          <Arrow></Arrow>
        </div>
        {/* <div style={{visibility: 'hidden'}}>
          <Rendering />
        </div> */}
        <div style={{width: '100%', height: '100%'}}>
          {!Math.floor(position) && <Rendering />}
        </div>
      </section>
      <Content isKorean={isKorean}/>
    </>

  )
}

export default App