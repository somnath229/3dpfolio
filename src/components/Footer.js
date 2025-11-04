import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer({ color }) {
  const date = new Date();
  // const dateN = date.toLocaleDateString();
  const dateN = date.getFullYear();
  return (
    <div
      style={{
        width: "80%",
        height: "100%",
        background: color.background,
        color: color.text,
        padding: "2rem 0",
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <div className="name">
          <h3>
            Somnath Dubey &nbsp;
            <FontAwesomeIcon icon={faHeart} color="red" shake />
          </h3>
        </div>
        <div className="date">
          <h3>&copy; {dateN}</h3>
        </div>
      </div>
    </div>
  );
}
