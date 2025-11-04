import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Theme({ setColor, setWhite, white }) {
  const colors = [
    { background: "#ffffff", text: "black" },
    { background: "#10121a", text: "#fff" },
  ];

  const handleColorDay = () => {
    setColor(colors[0]);
    setWhite(false);
  };
  const handleColorNight = () => {
    setColor(colors[1]);
    setWhite(true);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "fixed",
        right: "1rem",
        top: "50%",
        zIndex: "900",
        padding: ".5rem 1rem",
        border: "1px solid black",
        borderRadius: "1rem",
        background: "rgba(0,0,0,0.8)",
        boxShadow: "0 4px 6px rgba(0,0,0,0.8)",
      }}>
      {white ? (
        <button
          onClick={handleColorDay}
          style={{
            padding: "1rem",
            borderRadius: "100%",
            margin: ".4rem",
            cursor: "pointer",
          }}>
          <FontAwesomeIcon icon={faSun} />
        </button>
      ) : (
        <button
          onClick={handleColorNight}
          style={{
            padding: "1rem",
            borderRadius: "100%",
            margin: ".4rem",
            cursor: "pointer",
          }}>
          <FontAwesomeIcon icon={faMoon} />
        </button>
      )}
    </div>
  );
}
