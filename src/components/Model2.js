import React from 'react';
import {useGLTF} from '@react-three/drei';



export default function Model2({targetModal}) {
  const { scene } = useGLTF(`./models/showcase/new_showcase${targetModal}.glb`);
    return (
        <>
            <primitive  position={[0, 10, 0]} object={scene} scale={1} />
            <directionalLight
            position={[0.5, 0, 0.866]}
            intensity={1.3}
            castShadow
            />
            {/* <ambientLight></ambientLight> */}
            <directionalLight
            // position={[-0.5, 0, -0.866]}
            position={[-2, -4, -3]}
            intensity={0.9}
            castShadow
            />
        </>
    );
}

// useGLTF.preload('/Poimandres.gltf')