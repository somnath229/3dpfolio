import React from "react";
import "../App.css";
import Card from "./Card";
import projects from "../assets/textUtils";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Project({ color, setHome }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/projects");
    setHome(false);
  };

  return (
    <div
      style={{
        width: "80%",
        height: "100%",
        background: color.background,
        color: color.text,
        padding: "2rem",
        margin: "10rem 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "start",
      }}>
      <div className="">
        <div className="flex" style={{ alignItems: "flex-start" }}>
          <div className="line-p">
            <div className="circle-p" />
            <div className="line-p" />
          </div>
          <div style={{ margin: "0 2rem" }}>
            <span className="text-p">MY WORK</span> <br />
            <div style={{ fontSize: "2rem", fontWeight: "800" }}>
              <span> Projects.</span>
            </div>
            <br />
            <span className="text-p">
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos in it. It reflects
              my ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </span>
          </div>
        </div>
      </div>
      <div className="card">
        <Card projects={projects} color={color} />
      </div>
      <div className="more">
        <a
          href="#"
          style={{
            color: color.text,
            textDecoration: "none",
          }}
          onClick={handleNavigate}>
          <h4>
            View More Projects <FontAwesomeIcon icon={faArrowRight} shake />
          </h4>
        </a>
      </div>
    </div>
  );
}
// &rarr; &nbsp; variants={fadeIn("", "", 0.1, 1)}
