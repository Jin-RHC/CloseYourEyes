import React from 'react';
import Rendering2 from './Rendering2';
import {ReactComponent as Quit} from '../assets/Close.svg';
// import {ReactComponent as Left} from '../assets/Angle-left.svg';
// import {ReactComponent as Right} from '../assets/Angle-right.svg';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls} from "@react-three/drei";
// import { useGLTF } from '@react-three/drei';

// const bgNum = Math.floor(Math.random() * 3 + 1)


function Modal ({showModal, targetModal, changeShow, setTargetModal}) {

  const close = () => {
    changeShow(false)
    // console.log(showModal)
  }



  if (!showModal) {
    return null

  } else {

    return (
      <div className="modal-overlay">
        {/* <div className="modal-inner" tabIndex={-1} onKeyDown={close} style={{zIndex:20, backgroundColor:'black', backgroundImage: `url(showcase_popup_bg_${bgNum}.jpg)`}}> */}
        <div className="modal-inner" tabIndex={-1} onKeyDown={close} style={{zIndex:20}}>
          {/* <button  style={{position:'relative', color: '#42515a', fontSize:'1.5vw', left: '95%', top: '0%', backgroundColor:'transparent', cursor:'pointer', outline:0, border:0, fontWeight: 'bold', zIndex: 300}}>
            <Quit onClick={close} style={{color:"white", cursor:"pointer"}} width="8%" height="8%" fill="#5EBF8F" />
          </button> */}
          {/* <picture>
            <source srcSet={`showcase_popup_bg_${bgNum}.webp`} type="image/webp" />
            <img style={{position: 'absolute', width:'100%', height:'100%', objectFit: 'cover' }} src={`showcase_popup_bg_${bgNum}.webp`} alt="slime" />
          </picture> */}
          <Quit onClick={close} id="close" width="8%" height="8%" />
          {/* <div className="model-changer">
            <Left style={{cursor:'pointer'}} onClick={goLeft} width="8%" height="8%" />
            <button onClick={goLeft} style={{color:'#FF6978', fontSize:'min(10vw, 4rem)', cursor:'pointer', outline:0, border:0, backgroundColor: 'transparent', fontWeight: 'bold', zIndex: 300,}}><Left /></button>
            <Right style={{cursor:'pointer'}} onClick={goRight} width="8%" height="8%" />
            <button onClick={goRight} style={{color:'#FF6978', fontSize:'min(10vw, 4rem)', cursor:'pointer', outline:0, border:0, backgroundColor: 'transparent', fontWeight: 'bold', zIndex: 300,}}>{'>'}</button>
          </div> */}
          <Rendering2 targetModal={targetModal} />
        </div>
      </div>
  )}

}

export default Modal