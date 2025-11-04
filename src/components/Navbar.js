import React, { useState } from "react";
import NavbarComp from "./NavbarComp";
import "../App.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const NavItem = styled.div`
  @media (max-width: 768px) {
    display: absolute;
    background: transparent;
  }
`;
export default function Navbar({
  color,
  onAboutclick,
  onContactclick,
  setHome,
  home,
}) {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div
      style={{
        width: "80%",
        height: "4rem",
        background: "rgb(0,0,0,0.8)",
        color: "white",
        border: "4px solid",
        borderColor: color.text,
        borderRadius: "1rem",
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "4px",
        position: "fixed",
        top: "0",
        zIndex: "1000",
        boxShadow: "0 4px 6px rgba(0,0,0,0.8)",
      }}>
      <div
        className="name"
        style={{
          display: "flex",
          alignItems: "center",
          width: "30%",
        }}>
        <FontAwesomeIcon icon={faUser} size="2x" />
        <h2 style={{ padding: "1rem" }}>Somnath</h2>
      </div>
      <div
        className="ham"
        style={{
          // width: "70%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <div>
          {!isVisible && (
            <NavbarComp
              onAboutclick={onAboutclick}
              onContactclick={onContactclick}
              setHome={setHome}
              home={home}
            />
          )}
        </div>
        <div
          onClick={() => (isVisible ? setIsVisible(false) : setIsVisible(true))}
          style={{
            padding: "1rem",
            cursor: "pointer",
          }}>
          {isVisible ? (
            <h1>
              <FontAwesomeIcon icon={faBars} />
            </h1>
          ) : (
            <div>
              <h1>
                <FontAwesomeIcon icon={faXmark} spin/>
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
