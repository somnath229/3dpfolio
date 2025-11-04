import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Astronaut from "./Astronaut";
import { Float, OrbitControls } from "@react-three/drei";

export default function Three() {
  return (
    <div
      style={{
        width: "100%",
      }}>
      <Canvas
        camera={{ position: [0, 8, 4], fov: 20 }}
        style={{ width: "100%", height: "40rem" }}>
        <Suspense fallback={<>Loading...</>}>
          <Float>
            <Astronaut scale={0.23} position={[0, -1.5, 0]} />
          </Float>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
