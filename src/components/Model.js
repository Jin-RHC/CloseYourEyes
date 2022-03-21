import React from 'react';
// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { useGLTF } from '@react-three/drei';


// const quality = window.innerWidth > 500 ? 'q' : ''
const modelNumber = Math.floor(Math.random() * 7 + 1)

export default function Model() {
    const { scene } = useGLTF(`./models/mainmodels/mainq${modelNumber}.glb`);
//   const { scene } = useGLTF(`models/mainmodels/fatty-4.glb`);
//   const { scene } = useGLTF('models/compressed8.glb');
    return (
        <>
            <primitive  position={[0, 10, 0]} object={scene} scale={1} />
            <directionalLight
            position={[0.5, 0, 0.866]}
            intensity={1.7}
            // castShadow
            />
            <directionalLight
            position={[-1, -0.3, -0.866]}
            intensity={1.5}
            // castShadow
            />
        </>
    );
}

// useGLTF.preload('/Poimandres.gltf')