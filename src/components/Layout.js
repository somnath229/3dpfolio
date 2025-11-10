import React from "react";
import Main from "./Main";
import About from "./About";
import Project from "./Project";
import SpaceThree from "./SpaceThree";
import Contactnew from "./Contactnew";
import "../App.css";

export default function Layout({ color, aboutRef, contactRef, setHome }) {
  return (
    <div
      className="flex"
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }}>
      <Main color={color} />

      <div ref={aboutRef} className="flex">
        <About color={color} />
      </div>

      <Project color={color} setHome={setHome} />
      <SpaceThree />
      <div ref={contactRef} className="flex" style={{ width: "100%" }}>
        <Contactnew />
      </div>
    </div>
  );
}
