import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber"; // For 3D rendering in React
import { OrbitControls } from "@react-three/drei"; // For mouse controls in the 3D scene

function Parking() {
  useEffect(() => {
    // Use this effect for any required side effects or actions, like animations or fetching assets
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.leftSide}>
        <h1 style={styles.header}>AUTOMATED PARKING</h1>
        <p style={styles.text}>
          Modern equipment for the automation of parking spaces. Scanning cars
          and posting data on the time spent in the parking lot when entering
          and exiting.
        </p>
        <button style={styles.button}>GET STARTED</button>
      </div>
      <div style={styles.rightSide}>
        <Canvas style={styles.canvas}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <OrbitControls />
          {/* 3D Model */}
          <CarModel />
        </Canvas>
      </div>
    </div>
  );
}

// Dummy 3D model of a car
function CarModel() {
  return (
    <mesh rotation={[0, Math.PI / 2, 0]} position={[0, 0, 0]}>
      <boxGeometry args={[1, 0.5, 0.3]} />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  leftSide: {
    width: "50%",
    padding: "20px",
    backgroundColor: "white",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  header: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  rightSide: {
    width: "45%",
    height: "70%",
  },
  canvas: {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
  },
};

export default Parking;
