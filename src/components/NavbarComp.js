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
            textAlign:"center"
          }}>
          <li
            onClick={handleNavigate}
            style={{
              paddingRight: "2rem", 
             
            }}>
            Home
          </li>
          <li
            onClick={!home ? handleNavigate : onAboutclick}
            style={{
              paddingRight: "2rem", 
            }}>
            About
          </li>
          <li
            onClick={handleNavigateP}
            style={{
              paddingRight: "2rem", 
            }}>
            Projects
          </li>
          <li
            onClick={!home ? handleNavigate : onContactclick}
            style={{
              paddingRight: "2rem", 
            }}>
            Contact
          </li>
          <a
            href="http://"
            target="_blank"
            style={{
              paddingRight: "2rem", 
              color: "white",
            }}>
            <li>Resume</li>
          </a>
        </NavItem>
      </div>
    </div>
  );
}
