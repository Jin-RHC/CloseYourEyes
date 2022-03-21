import React, { Suspense } from 'react';
import {Canvas} from '@react-three/fiber';
// import { OrbitControls, Stars, Html, useProgress, Environment } from "@react-three/drei";
import { OrbitControls, Stars, Html, Environment, useProgress } from "@react-three/drei";
import Model from './Model';



function Loader() {
  const { progress } = useProgress()
  return (
  <Html center>
    {/* <h3 style={{color: 'white', whiteSpace:'nowrap', fontFamily:'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen'}}>Please Wait 4 your CHUCHU ‘3’<span className='blinking'> . </span><span className='blinking2'>. </span><span className='blinking'>. </span></h3> */}
    <h3 style={{color: 'white', whiteSpace:'nowrap', fontFamily:'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen'}}>Please Wait 4 your CHUCHU ‘3’</h3>
    <div style={{width: '80%', margin: '0 auto', height: '11px', backgroundColor: 'rgba(128, 128, 128, 0.678)'}}><div style={{height: '100%', width: `${progress}%`, backgroundColor: '#A6B8C4', zIndex: 100}}></div></div>
    {/* <h5 style={{textAlign: 'center'}}>{Math.floor(progress)}% loaded</h5> */}
    {/* <h3 style={{color: 'white', whiteSpace:'nowrap', fontFamily:'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen'}}>{progress}%</h3> */}
    {/* <div style={{width: '100vw', }}></div> */}
    {/* <img src="loading.jpg" alt="loading..." style={{opacity: progress / 200}} /> */}
  </Html>)
}


function Rendering () {
  return (
    <>

      <Canvas frameloop="demand" style={{pointerEvents: 'auto', cursor:'pointer'}} pixelRatio={window.devicePixelRatio} camera={{ position: [-15, 27, 150], 
      // <Canvas frameloop="demand" style={{pointerEvents: 'auto', cursor:'pointer'}} pixelRatio={[1, 1]} camera={{ position: [-15, 27, 150],
        fov: 75, far: 4000}}>
        <Stars count={2000} />
        <ambientLight intensity={0.3} />
        {/* <Suspense fallback={null}> */}
        <Suspense fallback={<Loader />}>
          <Model />
          <Environment
            background={false}
            exposure={1}
            preset={'sunset'}
          />
        </Suspense>
        <OrbitControls enablePan={false} autoRotate={true} autoRotateSpeed={0.5} minDistance={90} maxDistance={1000} />
      </Canvas>
    </>

  )
}

export default Rendering