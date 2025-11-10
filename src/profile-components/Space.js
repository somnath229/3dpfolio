import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/assetstd/Spaceship.glb");
  useFrame((state, delta) => (scene.rotation.y += delta)); //rotate on y axis continiusly
  return <primitive object={scene} />;
}
export default function Space() {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}
