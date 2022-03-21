import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html, Environment,useProgress} from "@react-three/drei";
import Model2 from './Model2';



// function Loader() {
//   const { progress } = useProgress()
//   return <Html center><img src="loading.jpg" alt="loading..." style={{opacity: progress / 200}} /></Html>
// }


function Loader() {
  const { progress } = useProgress()
  return (
  <Html center>
    <div style={{position:'relative', top:'10%', width:'40vw'}}>
      <h3 style={{marginTop:0, zIndex:301, fontWeight:'normal', fontSize:'1rem', textAlign: 'center'}}>We are finding your ♥CHUCHU</h3>
      <div style={{width: '60%', margin: '0 auto', height: '11px', backgroundColor: 'rgba(128, 128, 128, 0.678)'}}><div style={{height: '100%', width: `${progress}%`, backgroundColor: '#A6B8C4', zIndex: 100}}></div></div>
    </div>
  </Html>)
}



function Rendering2 ({targetModal}) {
  return (
    <>
      <Canvas style={{pointerEvents: 'auto', cursor: 'pointer'}} pixelRatio={window.devicePixelRatio} camera={{ position: [-10, 15, 100], 
        fov: 75, far: 4000}}>
        <Stars count={2000} radius={90} />
        <ambientLight intensity={0.3} />
        <Suspense fallback={<Loader />}>
        {/* <Suspense fallback={null}> */}
          <Environment preset={'sunset'} />
          <Model2 targetModal={targetModal} />
        </Suspense>
        <OrbitControls enablePan={false} autoRotate={true} autoRotateSpeed={0.5} minDistance={80} maxDistance={600} />
      </Canvas>
    </>

  )
}

export default Rendering2