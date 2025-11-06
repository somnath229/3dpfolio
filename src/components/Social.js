import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../App.css";
import Theme from "./Theme";

export default function Social({ color, setColor, setWhite, white }) {
  return (
    <div className="flex">
      <div
        className="flex"
        style={{
          position: "fixed",
          bottom: "1rem",
          zIndex: "900",
          padding: ".5rem 1rem",
          border: "1px solid black",
          borderRadius: "1rem",
          background: "rgba(0,0,0,0.8)",
          boxShadow: "0 4px 6px rgba(0,0,0,0.8)",
          cursor: "pointer",
        }}>
        <a href="http://github.com/somnath229/" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
        </a>
        <a href="http://linkedin.com/in/somnathdubey" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            color="white"
            style={{ padding: "0 1rem" }}
          />
        </a>
        <div>
          <Theme setColor={setColor} setWhite={setWhite} white={white} />
        </div>
        <a href="http://" target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            color="white"
            style={{ padding: "0 1rem" }}
          />
        </a>
        <a href="http://" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} size="2x" color="white" />
        </a>
      </div>
    </div>
  );
}
//color="#1DA1F2"
