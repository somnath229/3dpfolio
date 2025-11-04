import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../App.css";
import Dino from "../assets/Dino.jpeg";
import { height, width } from "@fortawesome/free-brands-svg-icons/fa11ty";

export default function Game() {
  const [isJumping, setIsJumping] = useState(false);
  const [isDucking, setIsDucking] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const dinoRef = useRef();
  const obstacleRef = useRef();

  // Handle key events
  const handleKeyPress = (e) => {
    if (e.key === " " && !isJumping && !gameOver) setIsJumping(true);
    if (e.key === "ArrowUp" && !isJumping) setIsDucking(true);
  };

  const handleKeyRelease = (e) => {
    if (e.key === "ArrowUp") setIsDucking(false);
  };

  // Jump animation timer
  useEffect(() => {
    if (isJumping) {
      const timer = setTimeout(() => setIsJumping(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isJumping]);

  // Score increases over time
  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => setScore((s) => s + 1), 100);
    return () => clearInterval(interval);
  }, [gameOver]);

  // Obstacle movement
  const [obstacleX, setObstacleX] = useState(1000);
  useEffect(() => {
    if (gameOver) return;
    const move = setInterval(() => {
      setObstacleX((prev) => (prev <= -100 ? 1000 : prev - 10));
    }, 50);
    return () => clearInterval(move);
  }, [gameOver]);

  // Collision detection
  useEffect(() => {
    if (gameOver) return;
    const collisionCheck = setInterval(() => {
      const dino = dinoRef.current?.getBoundingClientRect();
      const obstacle = obstacleRef.current?.getBoundingClientRect();

      if (!dino || !obstacle) return;

      if (
        dino.right > obstacle.left &&
        dino.left < obstacle.right &&
        dino.bottom > obstacle.top &&
        dino.top < obstacle.bottom
      ) {
        setGameOver(true);
      }
    }, 50);

    return () => clearInterval(collisionCheck);
  }, [gameOver]);

  const restartGame = () => {
    setGameOver(false);
    setScore(0);
    setObstacleX(1000);
  };

  return (
    <div
      className="game-container"
      tabIndex="0"
      onKeyDown={handleKeyPress}
      onKeyUp={handleKeyRelease}
      style={{ border: "6px solid black" }}>
      <div className="score">Score: {score}</div>

      {!gameOver ? (
        <>
          <motion.div
            ref={dinoRef}
            className={`dinosaur ${isDucking ? "ducking" : ""}`}
            animate={{
              y: isJumping ? -120 : 0,
              transition: { duration: 0.25 },
            }}>
            <img
              src={Dino}
              alt=""
              srcset=""
              style={{ width: "100%", height: "100%" }}
            />
          </motion.div>

          <motion.div
            ref={obstacleRef}
            className="obstacle"
            animate={{ x: obstacleX }}>
            <img
              src={Dino}
              alt=""
              srcset=""
              style={{ width: "100%", height: "100%" }}
            />
          </motion.div>
        </>
      ) : (
        <div className="game-over">
          <p>💀 Game Over</p>
          <button className="gbutton" onClick={restartGame}>
            Restart
          </button>
        </div>
      )}

      <div className="ground"></div>
    </div>
  );
}
