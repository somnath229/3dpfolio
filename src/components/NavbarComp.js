import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import styled from "styled-components";

const NavItem = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    background: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100vh;
  }
`;
export default function NavbarComp({
  onAboutclick,
  onContactclick,
  setHome,
  home,
}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
    setHome(true);
  };
  const handleNavigateP = () => {
    navigate("/projects");
    setHome(false);
  };
  return (
    <div className="flex" style={{ top: "0", position: "aboslute" }}>
      <div>
        <NavItem
          className="flex"
          style={{
            listStyle: "none",
            cursor: "pointer",
            fontWeight: "700",
            textAlign: "center",
            gap: "2rem",
          }}>
          <a
            href="#"
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
            }}
            onClick={handleNavigate}>
            Home
          </a>
          <a
            // href="#"
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
            }}
            onClick={!home ? handleNavigate : onAboutclick}>
            About
          </a>
          <a
            href="#"
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
            }}
            onClick={handleNavigateP}>
            Projects
          </a>
          <a
            // href="#"
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
            }}
            onClick={!home ? handleNavigate : onContactclick}>
            Contact
          </a>
          <a
            href="#"
            style={{
              color: "#3b82f6",
              textDecoration: "none",
            }}
            target="_blank">
            Resume
          </a>
        </NavItem>
      </div>
    </div>
  );
}
