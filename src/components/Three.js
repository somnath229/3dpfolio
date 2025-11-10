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
        camera={{ position: [2, 3, 6], fov: 35 }}
        style={{ width: "100%", height: "40rem" }}>
        <Suspense fallback={<>Loading...</>}>
          <Float>
            <Astronaut scale={0.23} position={[0, -1.5, 0]} />
          </Float>
        </Suspense>
        <OrbitControls
          enablePan={false} // disable panning
          minPolarAngle={Math.PI / 2} // limit vertical rotation(down)
          maxPolarAngle={Math.PI / 2} // limit vertical rotation(up)
          minAzimuthAngle={-Math.PI / 2} // limit horizontal rotation(left)
          maxAzimuthAngle={Math.PI / 2} // limit horizontal rotation(right)
          rotateSpeed={0.5} //0.1 slow
          minDistance={6} //zoom in
          maxDistance={8} //zoom out
        />
      </Canvas>
    </div>
  );
}
