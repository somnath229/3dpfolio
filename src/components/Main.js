import React from "react";
import TextSpan from "./TextSpan";
import man from "../assets/profile1.png";
import bg from "../assets/gradient.png";
import "../App.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import Three from "./Three";

const ImgItem = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const DivItem = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export default function Main({ color }) {
  const textBtn = [
    "Open to opportunities",
    "Remote Work",
    "Freelance",
    "collaborate",
    "Explore",
  ];

  return (
    <div
      style={{
        width: "80%",
        height: "100%",
        color: color.text,
        padding: "2rem 2rem",
        marginTop: "8rem",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}>
          <div style={{}}>
            <div>
              <div
                // className="name font"
                style={{
                  fontSize: "3rem",
                  paddingTop: "1rem 0",
                  letterSpacing: "3px",
                  fontWeight: "800",
                }}>
                Hi, I'm <span style={{ color: "#800080" }}>Somnath Dubey</span>
              </div>
              <div
                className="text"
                style={{
                  fontSize: "1.1rem",
                  padding: ".5rem 0",
                  letterSpacing: "1px",
                }}>
                <TextSpan />
              </div>
            </div>
            <div
              className="btn"
              style={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                margin: ".5rem 1rem",
              }}>
              {textBtn.map((text, index) => (
                <DivItem>
                  <button
                    key={index}
                    style={{
                      width: "100%",
                      background: "none",
                      borderRadius: "2rem",
                      padding: ".5rem 1rem",
                      margin: ".2rem",
                      letterSpacing: "1px",
                      fontSize: ".9rem",
                      fontWeight: "700",
                      background:
                        "linear-gradient( to right, #141e30, #243b55)",
                      color: "white",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.8)",
                    }}>
                    {text}
                  </button>
                </DivItem>
              ))}
            </div>
          </div>
          <ImgItem
            style={{
              width: "40%",
            }}
            className="pic3DD">
            <Three />
          </ImgItem>
        </div>
      </motion.div>
    </div>
  );
}
