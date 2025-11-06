import React from "react";
import Card from "./Card";
import { projectsFull } from "../assets/textUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
export default function ProjectNew({ color }) {
  return (
    <div
      style={{
        width: "80%",
        height: "100%",
        background: color.background,
        color: color.text,
        padding: "2rem",
        marginTop: "5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}>
      <div>
        <h1 style={{ color: "#800080" }}>
          Code & Creations <FontAwesomeIcon icon={faRocket} shake />
        </h1>

        <span className="text-p">
          A curated selection of my projects. Dive in and see what I've been
          building with passion and precision. Each project is briefly described
          with links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </span>
      </div>
      <div className="card">
        <Card projects={projectsFull} color={color} />
      </div>
    </div>
  );
}
