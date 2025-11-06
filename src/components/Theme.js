import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Theme({ setColor, setWhite, white }) {
  const colors = [
    { background: "#ffffff", text: "black" },
    { background: "#050816", text: "#ffffff" },
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
    <div>
      {white ? (
        <FontAwesomeIcon
          icon={faSun}
          onClick={handleColorDay}
          size="2x"
          color="white"
        />
      ) : (
        <FontAwesomeIcon
          icon={faMoon}
          onClick={handleColorNight}
          size="2x"
          color="white"
        />
      )}
    </div>
  );
}
