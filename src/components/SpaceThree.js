import * as THREE from "three";
import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stars, OrbitControls } from "@react-three/drei";

/* ======================
   🔥 THRUSTER EFFECT
====================== */
function Thruster() {
  const count = 150;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) arr[i] = (Math.random() - 0.5) * 0.5;
    return arr;
  }, [count]);

  const ref = useRef();

  useFrame((_, delta) => {
    const pos = ref.current.attributes.position.array;
    for (let i = 0; i < pos.length; i += 3) {
      pos[i + 2] -= delta * 5; // move backward
      if (pos[i + 2] < -1.5) pos[i + 2] = 0;
    }
    ref.current.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <points
        position={[-1, 1, -1.05]}
        rotation={[0, 0, 0]}
        scale={[0.8, 0.8, 1]}>
        <bufferGeometry ref={ref}>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={4}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.8}
          color="#ff9900"
          opacity={1}
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </>
  );
}

/* ======================
   🚀 SPACESHIP MODEL
====================== */
function MovingSpaceship() {
  const { scene } = useGLTF("/assetstd/Spaceship.glb");
  const ref = useRef();

  useFrame((state, delta) => {
    if (!ref.current) return;
    // slight nose tilt animation
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
    ref.current.rotation.x = Math.cos(state.clock.elapsedTime * 1) * 0.05;
  });

  return (
    <group ref={ref} scale={1.5}>
      <primitive object={scene} />
      <Thruster />
    </group>
  );
}

/* ======================
   🌠 STAR TRAILS
====================== */
function StarTrails() {
  const count = 800;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = Math.random() * 150;
    }
    return pos;
  }, [count]);

  const velocities = useMemo(() => {
    const vel = new Float32Array(count);
    for (let i = 0; i < count; i++) vel[i] = 20 + Math.random() * 120;
    return vel;
  }, [count]);

  const ref = useRef();

  useFrame((_, delta) => {
    const pos = ref.current.attributes.position.array;
    for (let i = 0; i < pos.length; i += 3) {
      const idx = i / 3;
      pos[i + 2] -= velocities[idx] * delta;
      if (pos[i + 2] < -150) {
        pos[i] = (Math.random() - 0.5) * 80;
        pos[i + 1] = (Math.random() - 0.5) * 40;
        pos[i + 2] = 5 + Math.random() * 150;
        velocities[idx] = 20 + Math.random() * 120;
      }
    }
    ref.current.attributes.position.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry ref={ref}>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.6}
        color="#ffffff"
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ======================
   🎥 CAMERA FOLLOW + SHAKE
====================== */
function CameraController({ target }) {
  const cam = useRef();
  useFrame((state) => {
    if (!target.current || !cam.current) return;

    const targetPos = new THREE.Vector3();
    target.current.getWorldPosition(targetPos);
    const idealPos = targetPos.clone().add(new THREE.Vector3(0, 2, 6));

    // Smooth camera follow
    state.camera.position.lerp(idealPos, 0.05);

    // Subtle shake
    const t = state.clock.elapsedTime;
    state.camera.position.x += Math.sin(t * 20) * 0.02;
    state.camera.position.y += Math.cos(t * 15) * 0.02;

    state.camera.lookAt(targetPos);
  });
  return null;
}

/* ======================
   🌌 MAIN SCENE
====================== */
export default function SpaceThree() {
  const shipRef = useRef();

  return (
    <div style={{ width: "100%", height: "40vh" }}>
      <Canvas camera={{ position: [-6, 4, 10], fov: 60 }}>
        <color attach="background" args={["#050816"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <StarTrails />

        <group ref={shipRef} position={[0, 0, 0]}>
          <MovingSpaceship />
        </group>
        <CameraController target={shipRef} />
        <OrbitControls
          enableZoom={false} // disable zoom
          enablePan={false} // disable panning
          minPolarAngle={Math.PI / 3} // limit vertical rotation(down)
          maxPolarAngle={Math.PI / 2} // limit vertical rotation(up)
          minAzimuthAngle={-Math.PI / 4} // limit horizontal rotation(left)
          maxAzimuthAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}
