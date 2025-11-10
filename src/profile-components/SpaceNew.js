import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stars, Environment } from "@react-three/drei";
import {EffectComposer, Bloom} from '@react-three/postprocessing'
import { Light } from "three";

function Model({ color }) {
  const { scene, materials } = useGLTF("/assetstd/Spaceship.glb");
  const ref = useRef;

  //Change color
  React.useEffect(() => {
    Object.values(materials).forEach((mat) => {
      if (mat && mat.color) {
        mat.color.set(color);
      }
    });
  }, [color, materials]);

  return <primitive object={scene} />;
}
export default function Space() {
  const [color, setColor] = useState("#fff"); //start red
  const handleColorChange = () => {
    //random color
    const newCol = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(newCol);
  };

  return (
    <div style={{ background: "black", width: "100%", height: "50vh" }}>
      <button style={{ position: "relative" }} onClick={handleColorChange}>
        Change Color
      </button>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={6} fade />
        {/* <Environment preset="night" background/> */}
        <EffectComposer>
            <Bloom luminanceThreshold={0.4} luminanceSmoothing={0.9} height={300} intensity={1.2}/>
        </EffectComposer>
        <Model color={color} />
        <OrbitControls
          //   enableZoom={false} // disable zoom
          enablePan={false} // disable panning
          minPolarAngle={Math.PI / 3} // limit vertical rotation(down)
          maxPolarAngle={Math.PI / 2} // limit vertical rotation(up)
          minAzimuthAngle={-Math.PI / 4} // limit horizontal rotation(left)
          maxAzimuthAngle={Math.PI / 4} // limit horizontal rotation(right)
          rotateSpeed={0.5} //0.1 slow
          minDistance={3}
          maxDistance={7}
        />
      </Canvas>
    </div>
  );
}


